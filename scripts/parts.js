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

let IntroTextArea =`
<div id="IntroTextArea">
    <p id="IntroTextText">Based entirely on your own prefrences, answer the following questions to design you Art School, and see others resutls as you go.</p>
    <a id="IntroLinkText">Why are you asking me to do this?</a>
    <button class="button nextButton" id="NextButton" onclick="nextPage(DemoArea1)">Start</button>
</div>
`

let DemoArea1 = 
['Introduction','2','3','What’s your involvement with GSA?','','',
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
'',false
]

let DemoArea2 = 
['Introduction','3','3','If applicable, what school(s) have you/are you associated with?','','',
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
'',false
]

let OpenQuesArea1 = 
['Open Questions','1','2','What would you do in your first 100 days as head of GSA?','','',
`
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="NextOpenQuestion(OpenQuesArea2)">Next question</button> 
    
</div>
`,
'',false
]

let OpenQuesArea2 = 
['Open Questions','2','2','Why do you think Art school is important?','','',
`
<div id="IntroTextArea">
    <p class="characterCount" id="Characters"><span id="CharUsed">0</span>/280 characters used </p>
    <textarea type="text" class="comment" id="comment" name="comment" placeholder="Type your answer" onkeyup="limitText(this,280);" onkeypress="limitText(this,280);" onkeydown="limitText(this,280);"></textarea>
    <div Id="OtherAnswers" class="hidden"><p id="OtherAns">Click on a blob to see their answer</p></div>
    <button id="NextQButtonOpen" class="button nextButton" onclick="openButAnswer()">Submit answer & read others</button>    
    <button id="NextQButtonOpenNext" class="button nextButton hidden" onclick="loadSummary()">Next question</button> 
</div>
`,
'',false
]

let SummaryArea = 
['Check Out','1','3','Here is a summary of your answers','','',
`
<div id="IntroTextArea">
    <p id="summaryText"></p>
    <div id="ButtonBox">
    <button class="button " id="NextButtonCopy" onclick="copy()">Copy text</button>
    <button class="button nextButton" id="NextButton" onclick="hopesNFears()">One final question</button>
    </div>
</div>
`,
'',false
]

let HopesArea = 
['Check Out','2','3',"Lastly, what are your Hopes and Fears regrading the future of GSA?",'','',
`
<div id="IntroTextArea">
<p class="characterCount" id="Characters"><span id="CharUsed">0</span>/140 characters used </p>
<textarea type="text" class="comment small" id="comment" name="comment" placeholder="Type your hope here" onkeyup="limitText(this,140, 1);" onkeypress="limitText(this,140, 1);" onkeydown="limitText(this,140, 1);"></textarea>
<p class="characterCount" id="Characters1"><span id="CharUsed1">0</span>/140 characters used </p>
<textarea type="text" class="comment small" id="comment1" name="comment" placeholder="Type your fear here" onkeyup="limitText(this,140, 2);" onkeypress="limitText(this,140, 2);" onkeydown="limitText(this,140, 2);"></textarea>
<button id="NextQButtonOpenNext" class="button nextButton" onclick="saveFears()">Finish & submit</button> 
</div>
`,
'',false
]

let EndArea = 
['Check Out','3','3',"That's everything",'','',
`
<div id="IntroTextArea">
<p id="IntroTextText">Thank you so much for your help in shaping the future of GSA</p>
<div id="ButtonBox">
    <button class="button " id="NextButtonCopy" onclick="location.href='https://www.thefutureofgsa.com">Learn more about the project</button>
    <button class="button " id="NextButton" onclick="location.href='https://google.com';">Suggest questions</button>
    </div>
</div>
`,
'',false
]














