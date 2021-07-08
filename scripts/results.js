function genPcents(Qnumber){
    let pCentArray = [];
    let total = 0;
    for(let i = 0; i < 4; i++){
        total += Answers[Qnumber][i+1];
        console.log('total',total);
    }
    for(let i = 0; i < 4; i++){
        pCentArray[i]=Number(((Answers[Qnumber][i+1]/total)* 100).toFixed(1));
    }
    console.log('pCent',pCentArray);
    return pCentArray;
}

function topAnsFunc(ansArr){
    let ansOne = ansArr[0]+ansArr[1];
    let ansTwo = ansArr[2]+ansArr[3];
    let topAnsTemp = [ansOne, 0];
    if(ansTwo > ansOne){
        topAnsTemp = [ansTwo, 1];
    }
    return topAnsTemp;
}

function answer(ans){
    console.log('before',Answers[Qnumber][ans+1]);
    Answers[Qnumber][ans+1]++
    console.log('after',Answers[Qnumber][ans+1]);
    let ansArr = genPcents(Qnumber);
    let topAnsArr = topAnsFunc(ansArr);
    showResults(ansArr,false,false);
    showTop(topAnsArr,Qnumber);
    console.log(topAnsArr);
}

function showTop(topAnsArr,Qnumber){
    let textArea = document.getElementById('QuesTextText');
    let textString = `${topAnsArr[0].toFixed(0)}% of Particepents’ ${AllQuestions[Qnumber][7]} ${AllQuestions[Qnumber][8+topAnsArr[1]]}`
    textArea.innerText = textString;
}