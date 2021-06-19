

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

    function GetDataBase() {
        NoCalls ++;
        console.log('Calls: ' + NoCalls + ", Posts: " + NoPosts)
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
    

