// Get all question answers, put them into an array [Qnum, Ans_1, Ans_2 ...]
// Get all long form answers from two seperate collections and put them into an array



let serverURL;

// // Load Fauna Stuff
let NoCalls = 0;
let NoPosts = 0;
// var faunadb = window.faunadb;
// var q = faunadb.query;
// var client = new faunadb.Client({
//     secret: "",
//     domain: "db.fauna.com",
//     scheme: "https",
// });

function GetDataBase() {
    NoCalls++;
    logger("GetDataBase", `Calls: ${NoCalls}, Posts: ${NoPosts}`);
    client
        .query(q.Paginate(q.Match(q.Index("GetAllAns"))))

        .then((ret) => {
            Answers = ret.data;
            logger("GetDataBase", Answers);
        })
        .catch((err) => console.error("Error: %s", err));
}

// Update Fauna DataBase

function UpdateDataBase(Num, Answer) {
    var Num = Num;
    var Answer = Answer;
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
    .then(function UpdateDataBase(Num, Answer)  {
        console.log(Num, Answer)
        NoPosts++;
    logger("GetDataBase", `Calls: ${NoCalls}, Posts: ${NoPosts}`);
    if (Answer == 0) {
        client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("AllAnswers"), Num)),
                    q.Lambda(
                        "X",
                        q.Update(q.Var("X"), {
                            data: {
                                Ans_1: q.Add(q.Select(["data", "Ans_1"], q.Get(q.Var("X"))), 1),
                            },
                        })
                    )
                )
            )
            .then((ret) => logger("UpdateDataBase", ret))
            .catch((err) => console.error("Error: %s", err));
    } else if (Answer == 1) {
        client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("AllAnswers"), Num)),
                    q.Lambda(
                        "X",
                        q.Update(q.Var("X"), {
                            data: {
                                Ans_2: q.Add(q.Select(["data", "Ans_2"], q.Get(q.Var("X"))), 1),
                            },
                        })
                    )
                )
            )
            .then((ret) => logger("UpdateDataBase", ret))
            .catch((err) => console.error("Error: %s", err));
    } else if (Answer == 2) {
        client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("AllAnswers"), Num)),
                    q.Lambda(
                        "X",
                        q.Update(q.Var("X"), {
                            data: {
                                Ans_3: q.Add(q.Select(["data", "Ans_3"], q.Get(q.Var("X"))), 1),
                            },
                        })
                    )
                )
            )
            .then((ret) => logger("UpdateDataBase", ret))
            .catch((err) => console.error("Error: %s", err));
    } else {
        client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("AllAnswers"), Num)),
                    q.Lambda(
                        "X",
                        q.Update(q.Var("X"), {
                            data: {
                                Ans_4: q.Add(q.Select(["data", "Ans_4"], q.Get(q.Var("X"))), 1),
                            },
                        })
                    )
                )
            )
            .then((ret) => logger("UpdateDataBase", ret))
            .catch((err) => console.error("Error: %s", err));
    }

    });
    
}

let scriptURL = "";

function saveToGoogleSheet() {
    let serverURL;

    // fetch(".netlify/functions/api2")
    // .then(response => response.json())
    // .then(json => {
    //scriptURL = json.api;
    scriptURL = "https://script.google.com/macros/s/AKfycbz1wufGCDRnQyBFez7-DWoLsa1mJGL-8dvEudqLltuCJFQh9I6b/exec";
    var sendingData = new FormData(); // adjusted here
    sendingData.append("GSA_Involvement", allAnswers.GSA_Involvement);
    sendingData.append("GSA_Association", allAnswers.GSA_Association);
    sendingData.append("Values_1", allAnswers.Values_1);
    sendingData.append("Values_2", allAnswers.Values_2);
    sendingData.append("Values_3", allAnswers.Values_3);
    sendingData.append("Values_4", allAnswers.Values_4);
    sendingData.append("Values_5", allAnswers.Values_5);
    sendingData.append("Values_6", allAnswers.Values_6);
    sendingData.append("Values_7", allAnswers.Values_7);
    sendingData.append("Values_8", allAnswers.Values_8);
    sendingData.append("Values_9", allAnswers.Values_9);
    sendingData.append("Scenarios_1", allAnswers.Scenarios_1);
    sendingData.append("Scenarios_2", allAnswers.Scenarios_2);
    sendingData.append("Scenarios_3", allAnswers.Scenarios_3);
    sendingData.append("Scenarios_4", allAnswers.Scenarios_4);
    sendingData.append("Open_1", allAnswers.Open_1);
    sendingData.append("Open_2", allAnswers.Open_2);
    sendingData.append("Open_3", allAnswers.Open_3);
    sendingData.append("Open_4", allAnswers.Open_4);
    sendingData.append("Open_5", allAnswers.Open_5);
    sendingData.append("Hope", allAnswers.Hope);
    sendingData.append("Fear", allAnswers.Fear);

    fetch(scriptURL, { method: "POST", body: sendingData }) // adjusted here
        .then((response) => console.log("Success!"))
        .catch((error) => console.error("Error!", error.message));
    //})
}
