//document.querySelector('#current-' + activePlayer).textContent = dice;

















var scores, roundScore, activePlayer,scoreActivePlayer, gamePlaying;


init();





document.querySelector('.dice').style.display = 'none';





        document.querySelector('.btn-roll').addEventListener('click', function () {

            if (gamePlaying){
                // document.getElementById('score-' + activePlayer).textContent=roundScore;

                //.1 Random number
                var dice = Math.floor(Math.random() * 6) + 1;

                //2. Display the result
                var diceDOM = document.querySelector('.dice');
                diceDOM.style.display = 'block';

                diceDOM.src = 'dice-' + dice + '.png';

                //3. Update the round score IF the round score was NOT a 1

                if (dice !== 1) {

                    roundScore += dice;
                    //console.log(roundScore);

                    document.querySelector('#current-' + activePlayer).textContent = roundScore;

                } else {
                    nextPlayer();
                }

            }
        });


        document.querySelector('.btn-hold').addEventListener('click', function () {

            if (gamePlaying){
                //add current score to global score
                scores[activePlayer] += roundScore;

                //update the UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                //check if player won the game
                if (scores[activePlayer] > 10) {
                    document.querySelector('#name-' + activePlayer).innerHTML = '<em>' + 'Winner' + '</em>';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    //document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    //init();
                    gamePlaying = false;
                } else {
                    //next player
                    nextPlayer();
                }
            }




        });


        function nextPlayer() {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';


            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
        };




        document.querySelector('.btn-new').addEventListener('click', init);



function init() {

    gamePlaying=true;
    scores = [0,0];

    roundScore = 0;

    activePlayer = 0;



    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';


    //document.getElementById('name-' + activePlayer).innerText='Player' + (activePlayer + 1);

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.dice').style.display = 'none';



};