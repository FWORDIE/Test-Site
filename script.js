var faunadb;
var q;
var client;

let serverURL;

    fetch(".netlify/functions/api")
    .then(response => response.json())
    .then(json => {
        faunadb = window.faunadb;
        q = faunadb.query;
        client = new faunadb.Client({
            secret: json.api,
            domain: "db.fauna.com",
            scheme: "https",
        });

    })
    
var questions;
    function GetDataBase() {
        //NoCalls ++;
        //console.log('Calls: ' + NoCalls + ", Posts: " + NoPosts)
        client
            .query(
                q.Paginate(q.Match(q.Index("AllDemQuestions")))
    
                )
    
            .then((ret) => {
                questions = ret.data;
                console.log(questions);
            })
            .catch((err) => console.error("Error: %s", err));
    }
    

