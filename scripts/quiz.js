let AnsButs = document.getElementsByClassName('quizbutton');
let topAns;

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