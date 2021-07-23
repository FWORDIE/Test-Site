var Logger = true;

// When Page Loads
document.onload = pageSetUp();

// Page Load Function
function pageSetUp() {
    generateStartingGrid();
    loadLotties();
    let readywidth = document.getElementById("no47").offsetHeight;
    wait(readywidth, 0);
    GetDataBase();
    //FadeIn();
}

//Logger
function logger(func, thing) {
    if (Logger == true) {
        console.log(`${func} whispers:`);
        console.log(thing);
    }
}
