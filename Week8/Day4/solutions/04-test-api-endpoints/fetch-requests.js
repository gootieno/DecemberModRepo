/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
fetch('/posts').then(res => {
  console.log(res.status);
  console.log(res.headers.get('Content-Type'));
  return res.json()
}).then(res => console.log(res));


(async function () {
  const res = await fetch('/posts');
  console.log(res.status);
  console.log(res.headers.get('Content-Type'));

  const deserializedBody = await res.json();
  console.log(deserializedBody);
})();


/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here

fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "message": "howdy" })
}).then(res => res.json()).then(res => console.log(res))


  (async function () {
    const res = await fetch('/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Hola!"
      })
    });

    console.log(res.status);
    console.log(res.headers.get('content-type'));
    const jsonRes = await res.json();
    console.log(jsonRes);
  })();
