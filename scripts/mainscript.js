var Logger = true;

// When Page Loads
document.onload = pageSetUp();

// Page Load Function
function pageSetUp() {
    generateStartingGrid();
    loadLotties();
    let readywidth = document.getElementById("no47").offsetHeight;
    wait(readywidth, 0);
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

    }).then(
       function GetDataBase(){}
    );
    //FadeIn();
}

//Logger
function logger(func, thing) {
    if (Logger == true) {
        console.log(`${func} whispers:`);
        console.log(thing);
    }
}
