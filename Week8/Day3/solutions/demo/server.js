const http = require("http");
const fs = require("fs");

const comments = [];

const server = http.createServer((req, res) => {
  // parse form urlencoded
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }

    // get /
    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("./assets/index.html", "utf-8");

      let responseBody;
      if (comments.length) {
        let commentsLi = "";
        comments.forEach((comment) => {
          commentsLi += `<li>${comment}</li>`;
        });
        responseBody = htmlPage.replace(/#{comments}/, commentsLi);
      } else {
        responseBody = htmlPage.replace(
          /#{comments}/,
          `<li>No Comment Created</li>`
        );
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }
    // post /comments

    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      if (comment) {
        comments.push(comment);
      }

      res.setHeader("Location", "/");
      res.statusCode = 302;
      return res.end();
    }

    // static asset route
    if (req.method === "GET" && req.url.startsWith("/styles")) {
      const urlParts = req.url.split("/styles/");
      console.log("url parts ", urlParts);
      const filePath = `./assets/${urlParts[1]}`;

      console.log("file path ", filePath);

      const responseBody = fs.readFileSync(filePath);

      res.setHeader("Content-Type", "text/css");
      res.statusCode = 200;
      return res.end(responseBody);
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`listening on port ${port}`));
