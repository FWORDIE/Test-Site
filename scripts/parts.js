let answerBoxElements = `                
<div class="answerbox">
<button id="Ans1" class="quizbutton" onclick="Answer4(0)">Completely</button>
</div>
<div class="answerbox">
<button id="Ans2" class="quizbutton" onclick="Answer4(1)">Mostly</button>
</div>
<div class="answerbox">
<button id="Ans3" class="quizbutton" onclick="Answer4(2)">Mostly</button>
</div>
<div class="answerbox">
<button id="Ans4" class="quizbutton" onclick="Answer4(3)">Completely</button>
</div>
`;

let topAnswerBoxElements = `
<div id="TopAns1" class="topanswerbox">In stand alone disciplines</div>
<div id="TopAns2" class="topanswerbox">In interdisciplinarity</div>
`;

let IntroTextArea = `
<div id="IntroTextArea">
    <p id="IntroTextText">Based entirely on your own prefrences, answer the following questions to design you Art School, and see others resutls as you go.</p>
    <a id="IntroLinkText">Why are you asking me to do this?</a>
    <button class="button nextButton" id="NextButton" onclick="nextPage(DemoArea1)">Start</button>
</div>
`;

let DemoArea1 = [
    "",
    "1",
    "22",
    "What’s your involvement with GSA?",
    "",
    "",
    `
<div id="IntroTextArea">
    <div id="ButtonBox">
        <button class="button selectable" onclick="selectBut(0)">Staff</button>
        <button class="button selectable" onclick="selectBut(1)">Student</button>
        <button class="button selectable" onclick="selectBut(2)">Alumni</button>
        <button class="button selectable" onclick="selectBut(3)">Board Member</button>
        <button class="button selectable" onclick="selectBut(4)">Other</button>
        <input class="buttonLike hidden selectable" type="text" id="OtherText" placeholder="Type your answer">
    </div>
    <button class="button nextButton hidden" id="NextButtonDemo1" onclick="selectNextDemo1()">Next Question</button>
</div>
`,
    "",
    false,
];

let DemoArea2 = [
    "",
    "2",
    "22",
    "If applicable, what school(s) have you/are you associated with?",
    "",
    "",
    `
<div id="IntroTextArea">
    <div id="ButtonBox">
        <button class="button selectable" onclick="selectButMany(0)">Architecture</button>
        <button class="button selectable" onclick="selectButMany(1)">Design</button>
        <button class="button selectable" onclick="selectButMany(2)">Fine Art</button>
        <button class="button selectable" onclick="selectButMany(3)">Innovation</button>
        <button class="button selectable" onclick="selectButMany(4)">Sim Vis</button>
        <button class="button selectable" onclick="selectButMany(5)">Not applicable</button>
        <div class="miniTextArea"><p class="miniText">Select all that apply</p></div>
    </div>
    <button class="button nextButton hidden" id="NextButtonDemo2" onclick="selectNextDemo2()">Next section</button>
</div>
`,
    "",
    false,
];

let OpenQuesArea1 = [
    "",
    "17",
    "22",
    "I want my future Art School to be known for...",
    "",
    "",
    `
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="NextOpenQuestion(OpenQuesArea2)">Next question</button> 
    
</div>
`,
    "",
    false,
];

let OpenQuesArea2 = [
    "",
    "18",
    "22",
    "In my first 100 days as director of my future Art School I would…",
    "",
    "",
    `
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>    
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="NextOpenQuestion(OpenQuesArea3)">Next question</button> 
</div>
`,
    "",
    false,
];

let OpenQuesArea3 = [
    "",
    "19",
    "22",
    "My future Art School will nurture…",
    "",
    "",
    `
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="NextOpenQuestion(OpenQuesArea4)">Next question</button> 
    
</div>
`,
    "",
    false,
];

let OpenQuesArea4 = [
    "",
    "20",
    "22",
    "My future Art School will provide students with the following added value once they graduate…",
    "",
    "",
    `
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>    
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="NextOpenQuestion(OpenQuesArea5)">Next question</button> 
</div>
`,
    "",
    false,
];

let OpenQuesArea5 = [
    "",
    "21",
    "22",
    "My future Art School will attract staff to work at it by…",
    "",
    "",
    `
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>    
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="hopesNFears()">Next question</button> 
</div>
`,
    "",
    false,
];

let SummaryArea = [
    "Your Summary",
    "",
    "",
    "Here is a summary of your Art School of the future.",
    "",
    "",
    `
<div id="IntroTextArea">
    <div id="BindingBox">
    <p id="IntroTextText" class="bound" >Values</p>
    <p id="ValsummaryText"></p>
    <p id="IntroTextText" class="bound" >Scenarios</p>
    <p id="ScesummaryText"></p>
    <p id="IntroTextText" class="bound" >When asked, what you want your future Art school to be known for? You said it would be known for: </p>
    <p id="OpesummaryText1"></p>
    <p id="IntroTextText" class="bound" >When asked, what you would do in your first 100 days leading your future Art School? You said you would: </p>
    <p id="OpesummaryText2"></p>
    <p id="IntroTextText" class="bound" >When asked, what traits you hope your Art School will nurture in its students? You said:</p>
    <p id="OpesummaryText3"></p>
    <p id="IntroTextText" class="bound" >When asked, what added value will your future Art School provide students by the time they graduate? You said:</p>
    <p id="OpesummaryText4"></p>
    <p id="IntroTextText" class="bound" >When asked, what attracts staff to work for your future Art School? You said:</p>
    <p id="OpesummaryText5"></p>
    
    </div>
    <div id="ButtonBox">
    <button class="button " id="NextButtonCopy" onclick="copy()">Copy text</button>
    <button class="button nextButton" id="NextButton" onclick="endPage(EndArea)">Finish</button>
    </div>
</div>
`,
    "",
    false,
];

let HopesArea = [
    "Lastly, a question about GSA.",
    "22",
    "22",
    "What are your hopes and fears for the future of GSA?",
    "",
    "",
    `
<div id="IntroTextArea">
<p id="IntroTextText">
These questions are confidential, they won’t appear anywhere on the site after you submit. They might be referred to in our research, but if so they will be completely anonymised. 
</p>
<p class="characterCount" id="Characters"><span id="CharUsed">0</span>/500 characters used </p>
<textarea type="text" class="comment small" id="comment" name="comment" placeholder="My hopes for GSA are..." onkeyup="limitText(this,500, 1);" onkeypress="limitText(this,500, 1);" onkeydown="limitText(this,500, 1);"></textarea>
<p class="characterCount" id="Characters1"><span id="CharUsed1">0</span>/500 characters used </p>
<textarea type="text" class="comment small" id="comment1" name="comment" placeholder="My fears for GSA are..." onkeyup="limitText(this,500, 2);" onkeypress="limitText(this,500, 2);" onkeydown="limitText(this,500, 2);"></textarea>
<button id="NextQButtonOpenNext" class="button nextButton" onclick="saveFears()">Finish & submit</button> 
</div>
`,
    "",
    false,
];

let EndArea = [
    "End",
    "",
    "",
    "That's everything",
    "",
    "",
    `
<div id="IntroTextArea">
<p id="IntroTextText">Thank you so much for your help in shaping the future of the GSA. If you want to continue the conversation, you can sign up to workshops that are taking place in August. 
You can follow along with the project by going to <a id="IntroLinkText" href="https://www.thefutureofgsa.com/" target="_blank" rel="noopener noreferrer">thefutureofgsa.com</a>
</p>
<div id="ButtonBox">
    <a href="https://www.thefutureofgsa.com/" target="_blank" rel="noopener noreferrer"> <button class="button " id="NextButtonCopy" >Learn more about the project</button></a>
    <a href="mailto:questions@thefutureofgsa.com?subject=Rethinking%20GSA%20%E2%80%94%20question%20suggestion&body=Here%20is%20the%20question%20I%20would%20suggest%20to%20add%20to%20the%20survey%3A%20%0A%0A%0AThe%20reason%20I%20think%20it%20should%20be%20added%20is%3A%20%0A"><button class="button">Submit a question</button></a>
    </div>
</div>
`,
    "",
    false,
];
