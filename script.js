 let numberShow = 0;

function rockPick() {
    const randomNum = Math.random(); //creates a random number

    let setplayerMove = document.querySelector('.playerMove'); // shows the selected pick
    setplayerMove.textContent = ' Rock'; 
    
    let playerMove = 'Rock';
    let botMove = '';


    if (randomNum >= 0 && randomNum < 1/3) {
        botMove = 'Rock';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Rock';

    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        botMove = 'Paper';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Paper';

    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        botMove = 'Scissor';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Scissor';
        
    }

    if (playerMove === botMove){
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' Tie';

    } else if (playerMove === 'Rock' && botMove === 'Paper') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Lose';

    } else if (playerMove === 'Rock' && botMove === 'Scissor') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Win';

            numberShow++;
            let getShowNum = document.querySelector('.playerScore');
            getShowNum.textContent = "Your score: "+ numberShow;
    }
}

function scissorPick(){
    const randomNum = Math.random();

    let setplayerMove = document.querySelector('.playerMove'); 
    setplayerMove.textContent = ' Scissor'; 
    
    let playerMove = 'Scissor';
    let botMove = '';

    if (randomNum >= 0 && randomNum < 1/3) {
        botMove = 'Rock';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Rock';

    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        botMove = 'Paper';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Paper';

    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        botMove = 'Scissor';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Scissor';

    }

    if (playerMove === botMove){
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' Tie';

    }else if (playerMove === 'Scissor' && botMove === 'Rock') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Lose';
    
    } else if (playerMove === 'Scissor' && botMove === 'Paper') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Win';
        numberShow++;
            let getShowNum = document.querySelector('.playerScore');
            getShowNum.textContent = "Your score: "+ numberShow;
    }
}
function paperPick(){
    const randomNum = Math.random(); 

    let setplayerMove = document.querySelector('.playerMove'); 
    setplayerMove.textContent = ' Paper'; 
    
    let playerMove = 'Paper';
    let botMove = '';

    if (randomNum >= 0 && randomNum < 1/3) {
        botMove = 'Rock';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Rock';

    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        botMove = 'Paper';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Paper';

    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        botMove = 'Scissor';

        const spanElement = document.querySelector('.cpuMove');
        spanElement.textContent = ' Scissor';

    }

    if (playerMove === botMove){
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' Tie';

    } else if (playerMove === 'Paper' && botMove === 'Rock') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Win';
        numberShow++;
            let getShowNum = document.querySelector('.playerScore');
            getShowNum.textContent = "Your score: "+ numberShow;
    
    } else if (playerMove === 'Paper' && botMove === 'Scissor') {
        let spanElement = document.querySelector('.showResult');
        spanElement.textContent = ' You Lose';
        
    }
}