var Logger = false;

// When Page Loads
document.onload = pageSetUp();

var faunadb;
var q;
var client;
// Page Load Function
function pageSetUp() {
    generateStartingGrid();
    loadLotties();
    let readywidth = document.getElementById("no47").offsetHeight;
    wait(readywidth, 0);

    fetch(".netlify/functions/api")
        .then((response) => response.json())
        .then((json) => {
            faunadb = window.faunadb;
            q = faunadb.query;
            client = new faunadb.Client({
                secret: json.api,
                domain: "db.fauna.com",
                scheme: "https",
            });
        })
        .then(function GetDataBase() {
            NoCalls++;
            logger("GetDataBase", `Calls: ${NoCalls}, Posts: ${NoPosts}`);
            client
                .query(q.Paginate(q.Match(q.Index("GetAllAns"))))

                .then((ret) => {
                    Answers = ret.data;
                    logger("GetDataBase", Answers);
                })
                .catch((err) => console.error("Error: %s", err));
        });

    //FadeIn();
}

//Logger
function logger(func, thing) {
    if (Logger == true) {
        console.log(`${func} whispers:`);
        console.log(thing);
    }
}
