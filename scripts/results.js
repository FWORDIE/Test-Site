function genPcents(Qnumber){
    let pCentArray = [];
    let total = 0;
    for(let i = 0; i < 4; i++){
        total += Answers[Qnumber][i+1];
    }
    for(let i = 0; i < 4; i++){
        pCentArray[i]=Number(((Answers[Qnumber][i+1]/total)* 100).toFixed(1));
    }
    return pCentArray;
}

function topAnsFunc(Qnumber){
    let ansOne = Answers[Qnumber][1]+Answers[Qnumber][2];
    let ansTwo = Answers[Qnumber][3]+Answers[Qnumber][4];
    let topAnsTemp = [ansOne, 0];
    if(ansTwo > ansOne){
        topAnsTemp = [ansTwo, 1];
    }
    return topAnsTemp;
}

function answer(ans){
    Answers[Qnumber][ans+1]++
    let ansArr = genPcents(Qnumber);
    let topAnsArr = topAnsFunc(Qnumber);
    showResults(ansArr,false,false);
    showTop(topAnsArr,Qnumber);
    console.log(topAnsArr);
}

function showTop(topAnsArr,Qnumber){
    let textArea = document.getElementById('QuesTextText');
    let textString = `${topAnsArr[0].toFixed(0)}% of Particepents’ ${AllQuestions[Qnumber][7]} ${AllQuestions[Qnumber][8+topAnsArr[1]]}.`
    textArea.innerText = textString;
}