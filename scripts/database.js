// var faunadb;
// var q;
// var client;

// let serverURL;

//     fetch(".netlify/functions/api")
//     .then(response => response.json())
//     .then(json => {
//         faunadb = window.faunadb;
//         q = faunadb.query;
//         client = new faunadb.Client({
//             secret: json.api,
//             domain: "db.fauna.com",
//             scheme: "https",
//         });

//     })
    
// // Load Fauna Stuff
// let NoCalls = 0;
// let NoPosts = 0;
// var faunadb = window.faunadb;
// var q = faunadb.query;
// var client = new faunadb.Client({
//     secret: "fnAEH9qaMKACAZUacat_8gPzT9yf_m85U7fy8kdb",
//     domain: "db.fauna.com",
//     scheme: "https",
// });


// // Load DataBase from Fauna
// function GetDataBase() {
//     NoCalls ++;
//     logger('GetDataBase',`Calls: ${NoCalls}, Posts: ${NoPosts}`);
//     client
//         .query(
//             q.Paginate(q.Match(q.Index("NewDemQuestions")))

//             )

//         .then((ret) => {
//             questions = ret.data;
//             logger('GetDataBase',questions);
//         })
//         .catch((err) => console.error("Error: %s", err));
// }

// // Update Fauna DataBase
// function UpdateDataBase(Num, Answer) {
//     NoPosts ++;
//     logger('GetDataBase',`Calls: ${NoCalls}, Posts: ${NoPosts}`);
//     if(Answer == 'yes'){
//         client
//         .query(
//             q.Map(q.Paginate(q.Match(q.Index('NewNumbers'),Num)),
//             q.Lambda(
//                 'X',
//                 q.Update(
//                   q.Var('X'),
//                   {
//                     data: {
//                         Total: q.Add(
//                         q.Select(['data', 'Total'], q.Get(q.Var('X'))),
//                         1
//                       ),
//                       Yes: q.Add(
//                         q.Select(['data', 'Yes'], q.Get(q.Var('X'))),
//                         1
//                       )
//                     }
//                   }
//                 )
//             )
//         )
//         )
//         .then((ret) => logger('UpdateDataBase',ret))
//         .catch((err) => console.error("Error: %s", err));
//     }else{
//         client
//         .query(
//             q.Map(q.Paginate(q.Match(q.Index('NewNumbers'),Num)),
//             q.Lambda(
//                 'X',
//                 q.Update(
//                   q.Var('X'),
//                   {
//                     data: {
//                         Total: q.Add(
//                         q.Select(['data', 'Total'], q.Get(q.Var('X'))),
//                         1
//                       ),
//                       No: q.Add(
//                         q.Select(['data', 'No'], q.Get(q.Var('X'))),
//                         1
//                       )
//                     }
//                   }
//                 )
//             )
//         )
//         )
//         .then((ret) => logger('UpdateDataBase',ret))
//         .catch((err) => console.error("Error: %s", err));
//     }
    
// }

let scriptURL = '';

function saveToGoogleSheet(name){

    let serverURL;

    fetch(".netlify/functions/api2")
    .then(response => response.json())
    .then(json => {
        scriptURL = json.api;
        })

var sendingData = new FormData() // adjusted here
sendingData.append('name', name)
fetch(scriptURL, {method: 'POST', body: sendingData}) // adjusted here
.then(response => console.log('Success!', response))
.catch(error => console.error('Error!', error.message))
}