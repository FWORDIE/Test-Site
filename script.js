

let serverURL;

    fetch(".netlify/functions/api")
    .then(response => response.json())
    .then(json => {
        var faunadb = window.faunadb;
var q = faunadb.query;
var client = new faunadb.Client({
    secret: json.api,
    domain: "db.fauna.com",
    scheme: "https",
});

    })
function key(){
    console.log(serverURL);
}
    

