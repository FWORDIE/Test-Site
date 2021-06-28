
let AnsButs = [];
let topAns;
let QuesNumArea = document.getElementById('QuesNumArea');
let QuesTextArea = document.getElementById('QuesTextArea');
let TopAns1 = document.getElementById('TopAns1');
let TopAns2 = document.getElementById('TopAns2');
let QuestionArea = document.getElementById('QuestionArea');
let TopAnswerArea = document.getElementById('TopAnswerArea');
let AnswerArea = document.getElementById('AnswerArea');
let HidableTop = document.getElementsByClassName('hidableTop');
let SectionName = document.getElementById('SectionName');
let SectionQuesNum = document.getElementById('SectionQuesNum');
let SectionTotQues = document.getElementById('SectionTotQues');
let NextQButton = document.getElementById('NextQButton');
let partRole = '';
let partDepartment = [];
let Qnumber = 0;
let OpenQnumber = 0;
var limitCount;


//dom builder
function builder(HTML){
    SectionName.innerHTML = HTML[0];
    SectionQuesNum.innerHTML = HTML[1];
    SectionTotQues.innerHTML = HTML[2];
    QuesTextText.innerHTML = HTML[3];
    if(HTML[8]== false){
        AnswerArea.classList.add('hidden');
        TopAnswerArea.innerHTML = HTML[6];
    }else{
        AnswerArea.classList.remove('hidden');
        TopAns1.innerHTML = HTML[4];
        TopAns2.innerHTML = HTML[5];
    }
    //AnswerArea.innerHTML = HTML[7];
    if(AnswerArea != ''){
        AnsButs = document.getElementsByClassName('quizbutton');
        for(let i =0; i < AnsButs.length; i++){
            //console.log(AnsButs[i]);
            AnsButs[i].addEventListener("mouseenter", (e) => {
                if(i <= 1){
                    topAns = document.getElementById('TopAns1')
                }else{
                    topAns = document.getElementById('TopAns2')
                }
                gsap.to(topAns,{duration: 0.2, ease:"power3.out", color:'#FA0060'});
            });
            AnsButs[i].addEventListener("mouseleave", (e) => {
                if(i <= 1){
                    topAns = document.getElementById('TopAns1')
                }else{
                    topAns = document.getElementById('TopAns2')
                }
                gsap.to(topAns,{duration: 0.1,  ease:"power3.out", color:'#1D1B1B'});
            });
        }
    }
}

//Intro 
function nextPage(HTML){
    builder(HTML);
}

//Demo 1 - role - select
function selectBut(option){
    let selectButArr = document.getElementsByClassName('selectable');
    for( let i =0; i < selectButArr.length; i++){
        selectButArr[i].classList.remove('butselected');
    };
    selectButArr[option].classList.add('butselected');
    let tempBut = document.getElementById('NextButtonDemo1');
    tempBut.classList.remove('hidden');
    if(option == 4){
        partRole = selectButArr[option].innerText; 
        selectButArr[5].classList.remove('hidden');
    }else{
        selectButArr[5].classList.add('hidden');
        partRole = selectButArr[option].innerText; 
    }
    logger('Demo 1',partRole)
}

//Demo 1 - role - submit
function selectNextDemo1(){
    if(partRole == 'Other'){
        partRole = document.getElementById('OtherText').value;
    }
    logger('Demo 1-1',partRole)
    allAnswers.GSA_Involvement = partRole;
    builder(DemoArea2);
}

//Demo 2 - department - select
function selectButMany(option){
    let selectButArr = document.getElementsByClassName('selectable');
    if(partDepartment.includes(option) ==true){
        partDepartment = partDepartment.filter(v => v !== option);
        selectButArr[option].classList.remove('butselected');
    }else{
        partDepartment.push(option);
        selectButArr[option].classList.add('butselected');
    }
    let tempBut = document.getElementById('NextButtonDemo2');
    tempBut.classList.remove('hidden');
    logger('Demo 2',partDepartment)
}

//Demo 2 - department - submit
function selectNextDemo2(){    
    let selectButArr = document.getElementsByClassName('selectable');
    let tempPartDepart = [];
    for(i=0; i<partDepartment.length; i++){
        tempPartDepart.push(selectButArr[partDepartment[i]].innerText);
    }
    allAnswers.GSA_Association = tempPartDepart;
    setUpQuestionArea();
    //builderQuestion(DemoArea2);

}

function setUpQuestionArea(){
    AnswerArea.classList.remove('hidden');
    TopAnswerArea.innerHTML = topAnswerBoxElements;
    TopAns1 = document.getElementById('TopAns1');
    TopAns2 = document.getElementById('TopAns2');
    setUpQuestion();
}

function setUpQuestion(){
    if(Qnumber > 19){
        setUpOpenQuestions(OpenQuesArea1)
    }else{ 
        if(Qnumber < 9){
            SectionName.innerHTML = 'Values';
            SectionTotQues.innerHTML = '9';
        }else{
            SectionName.innerHTML = 'Scenarios';
            SectionTotQues.innerHTML = '11';

        }
        AnsButs = document.getElementsByClassName('quizbutton')
        TopAns1.classList.remove('pink');
        TopAns2.classList.remove('pink');
        for(let i=0; i < AnsButs.length; i++){
            AnsButs[i].classList.remove('pink');
            AnsButs[i].classList.remove('nonButton');
        }
        SectionQuesNum.innerHTML = AllQuestions[Qnumber][0];
        QuesTextText.innerHTML = AllQuestions[Qnumber][1];
        TopAns1.innerHTML = AllQuestions[Qnumber][2];
        TopAns2.innerHTML = AllQuestions[Qnumber][3];
        NextQButton.classList.add('hidden');
    }       

}

function Answer4(ans){
    // Do things to show results
    NextQButton.classList.remove('hidden');
    AnsButs = document.getElementsByClassName('quizbutton')
    for(let i=0; i < AnsButs.length; i++){
        AnsButs[ans].classList.remove('pink');
        AnsButs[i].classList.add('nonButton');
    }
    AnsButs[ans].classList.add('pink');
    if(ans < 2){
        TopAns1.classList.add('pink')

    }else{
        TopAns2.classList.add('pink')
    }
    recordAnswer(ans);
    answer(ans);
}

function NextQBut(){
    Qnumber++;
    reset();
    setUpQuestion();

}

function recordAnswer(ans){
    let word = 'mostly';
    let end = AllQuestions[Qnumber][5];
    if(ans == 0 || ans == 3){
        word = 'completely'
    };
    if(ans >= 2){
        end = AllQuestions[Qnumber][6];
    }
    let Qanswer = `${AllQuestions[Qnumber][4]} ${word} ${end}.`
    logger('record answer', Qanswer);
    let allAnswersName = `Values_${Qnumber+1}`;
    if(Qnumber >= 9){
        allAnswersName = `Scenarios_${Qnumber-8}`;
    }
    allAnswers[allAnswersName] = Qanswer;
}

function setUpOpenQuestions(HMTL){
    let FindDots = document.getElementsByClassName('dot')

            for(let j=0; j < FindDots.length; j++){
                FindDots[j].classList.remove('pinkdot');
            }

    builder(HMTL);
    document.getElementById('NextQButton').classList.add('hidden')
}

var lastMove = 0;
var allAnswersName = ""

function openButAnswer(){

    allAnswersName = `Open_${OpenQnumber+1}`;
    let inputarea =document.getElementById('comment');
    allAnswers[allAnswersName] = inputarea.value;
    inputarea.value = "";
    inputarea.classList.add('hidden');
    document.getElementById('OtherAnswers').classList.remove('hidden');
    document.getElementById('NextQButtonOpen').classList.add('hidden')
    document.getElementById('Characters').classList.add('hidden');
    document.getElementById('NextQButtonOpenNext').classList.remove('hidden');

    let FindDots = document.getElementsByClassName('dot')
    for(let i=0; i < FindDots.length; i++){
        FindDots[i].addEventListener("click", (e) => {
            if(Date.now() - lastMove > 400) {
                for(let j=0; j < FindDots.length; j++){
                    FindDots[j].classList.remove('pinkdot');
                }
                console.log(FindDots[i]);
                FindDots[i].classList.add('pinkdot');
                let TotAns = OpenAnswers[OpenQnumber].length;
                let AnswerNum = Math.floor(Math.random() * (TotAns)) + 0;
                console.log(TotAns);
                if(TotAns == 0){
                    document.getElementById('OtherAns').innerText = 'No more responses left';
                    for(let j=0; j < FindDots.length; j++){
                        FindDots[j].classList.remove('pinkdot');
                    }
                }else{
                    document.getElementById('OtherAns').innerText = `"${OpenAnswers[OpenQnumber][AnswerNum]}"`;
                    OpenAnswers[OpenQnumber].splice(AnswerNum, 1);

                }
                lastMove = Date.now();
            }

            
        });
    }
}

function NextOpenQuestion(OpenQuesArea2){
    OpenQnumber++
    setUpOpenQuestions(OpenQuesArea2);
}

function loadSummary(){    
    let FindDots = document.getElementsByClassName('dot')
    for(let j=0; j < FindDots.length; j++){
        FindDots[j].classList.remove('pinkdot');
    }
    builder(SummaryArea);
    let summaryText = '';
    let addText = ' ';
    let x = 0;
    for (var prop in allAnswers) {
        x++
        if (Object.prototype.hasOwnProperty.call(allAnswers, prop) && x > 2 && x <23) {
            summaryText += allAnswers[prop];
            summaryText += addText;
        } else if (Object.prototype.hasOwnProperty.call(allAnswers, prop) && x == 23){
            summaryText += 'When asked how you would spend your first 100 days as head of the art school, you said: ';
            summaryText += allAnswers[prop];
            summaryText += addText;
        } else if (Object.prototype.hasOwnProperty.call(allAnswers, prop) && x == 24){
            summaryText += 'When asked why you think Art School is important, you said: ';
            summaryText += allAnswers[prop];
        }
    }

    document.getElementById('summaryText').innerText  = summaryText;
}

function hopesNFears(){
    builder(HopesArea);
}

function saveFears(){
    let Hopetxt = document.getElementById('comment').value;
    let Feartxt = document.getElementById('comment1').value;
    allAnswers.Hope = Hopetxt;
    allAnswers.Fear = Feartxt;
    saveToGoogleSheet();
    builder(EndArea);
}




//Copy text on summary
function copy(){
    var text = document.getElementById('summaryText').innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    document.getElementById('NextButtonCopy').innerText = 'Copied';

}

//Charcter Limiter
function limitText(limitField, limitNum, num)
 {
    CharUsed = document.getElementById('CharUsed');
    if(num == 2){
        CharUsed = document.getElementById('CharUsed1');  
    }
    CharUsed.innerHTML = limitField.value.length;
   if (limitField.value.length > limitNum)
    {
     limitField.value = limitField.value.substring(0, limitNum);
    }
    else
    {
     if (limitField == '')
     {
       limitCount = limitNum - 0;
     }
     else
     {
       limitCount = limitNum - limitField.value.length;
     }
    }
   if (limitCount == 0)
     {
        if(num == 2){
            document.getElementById("comment1").style.borderColor = "red";
            document.getElementById("Characters1").style.color ="red";

        }else{
            document.getElementById("comment").style.borderColor = "red";
            document.getElementById("Characters").style.color ="red";

        }
       }
   else
     {
        if(num == 2){
            document.getElementById("comment1").style.borderColor = "";
            document.getElementById("Characters1").style.color ="";

        }else{
            document.getElementById("comment").style.borderColor = "";
            document.getElementById("Characters").style.color ="";

        }
       }
 }

//Button hover States
for(let i =0; i < AnsButs.length; i++){
    console.log(AnsButs[i]);
    AnsButs[i].addEventListener("mouseenter", (e) => {
        if(i <= 1){
            topAns = document.getElementById('TopAns1')
        }else{
            topAns = document.getElementById('TopAns2')
        }
        gsap.to(topAns,{duration: 0.2, ease:"power3.out", color:'#FA0060'});
    });
    AnsButs[i].addEventListener("mouseleave", (e) => {
        if(i <= 1){
            topAns = document.getElementById('TopAns1')
        }else{
            topAns = document.getElementById('TopAns2')
        }
        gsap.to(topAns,{duration: 0.1,  ease:"power3.out", color:'#1D1B1B'});
    });
}