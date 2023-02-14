const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  // if (ext === "css") {
  //   return "text/css";
  // } else if (ext === "jpg") {
  //   return "image/jpeg";
  // } else {
  //   return "text/plain";
  // }

  switch (ext) {
    case "css":
      return "text/css";
    case "jpg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    console.log("request url ", req.url);

    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const filePath = urlParts[urlParts.length - 1];
    console.log("file path ", filePath);

    const fileExtension = filePath.split(".")[1];
    console.log("file extension ", fileExtension);

    const responseBody = fs.readFileSync(`./assets${filePath}`);

    const contentType = getContentType(fileExtension);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(responseBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const htmlPage = fs.readFileSync("index.html", "utf-8");

    const responseBody = htmlPage;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
