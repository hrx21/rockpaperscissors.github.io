const game =()=> {
    let pScore = 0;
    let cScore = 0;

    //Start The Game 

    const startGame =()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match 
    const playMatch =()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation ='';
            })
        })
        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //computerchoice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=> {
                    //here is where we all compare hands.
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Animations
                playerHand.style.animation = "shakePlayer 1.5s ease"
                computerHand.style.animation = "shakeComputer 1.5s ease"
            });
        });      
    };

    const updateScore =()=> {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    

    const compareHands =(playerChoice, computerChoice)=> {
        //update text.
        const winner = document.querySelector('.winner');
        // checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            return;
        };
        //Check for Rock.
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Won!' 
                pScore++;
                updateScore();
                return;
        }else{
            winner.textContent = 'Computer Won!'
            cScore++;
            updateScore();
            return;
        } 
    }
    //Check for paper.
    if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            winner.textContent = 'Computer Won!' 
            cScore++;
            updateScore();
            return;
        }
    }else{
        winner.textContent = 'Player Won!'
        pScore++;
        updateScore();
        return;
    } 
    //Check for Scissors.
    if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            winner.textContent = 'Computer Won!' 
            cScore++;
            updateScore();
            return;
        }
    }else{
        winner.textContent = 'Player Won!'
        pScore++;
        updateScore();
        return;
    }

}
    


    // is to call all the functions.
    startGame();
    playMatch();
};

// start the game function 
game();