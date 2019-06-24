/*
//IIFE - this prevents the code to interfere with another developer's code. In case they are using the same name for a variable
(function () {
//create a function constructor! 

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;

}
//this displays the questions 
Question.prototype.displayQuestion = function () {
console.log(this.question);
//this will loop through the answers 
for (var i = 0; i < this.answers.length; i++ ) {
    console.log(i + ': ' + this.answers[i]);
}
}

//to check if we got the correct answer 

Question.prototype.checkAnswer = function(ans){
if (ans === this.correct) {
    console.log('Correct Answer')
} else {
    console.log('Try Again')
}
}




var q1 = new Question('Is JavaScript the coolest programing language in the world?',

                    ['yes', 'no'],

                    0);


var q2 = new Question('What is the name of this course\'s instructor?',
                    ['John',
                     'Michael',
                     'Jonas'],
                     2);

var q3 = new Question('What does best describe coding?', 
                    ['Boring',
                     'Hard',
                     'Fun',
                     'Tedious'],
                     2);         
                     
var questions = [q1, q2, q3];
//multiply - this will run through the array 
var n = Math.floor(Math.random() * questions.length)

questions[n].displayQuestion();
//use parseInt to make sure it turns the answer into a string 
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);
}) ();

*/


//IIFE - this prevents the code to interfere with another developer's code. In case they are using the same name for a variable
    //create a function constructor! 


(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    
    }
    //this displays the questions 
    Question.prototype.displayQuestion = function () {
    console.log(this.question);
    //this will loop through the answers 
    for (var i = 0; i < this.answers.length; i++ ) {
        console.log(i + ': ' + this.answers[i]);
    }
    }
    
    //to check if we got the correct answer 
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
    if (ans === this.correct) {
        console.log('Correct Answer');
        sc = callback(true);
    } else {
        console.log('Try Again');
        sc = callback(false);
        }

        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------');

    }
    
    
    var q1 = new Question('Is JavaScript the coolest programing language in the world?',
    
                        ['yes', 'no'],
    
                        0);
    
    
    var q2 = new Question('What is the name of this course\'s instructor?',
                        ['John',
                         'Michael',
                         'Jonas'],
                         2);
    
    var q3 = new Question('What does best describe coding?', 
                        ['Boring',
                         'Hard',
                         'Fun',
                         'Tedious'],
                         2);         
     
    var questions = [q1, q2, q3];  
    //this functions will keep the score. 
    //notice we are using ++ for the score to increment by 1 while it keeps count
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
    }
 }
    var keepScore = score();

    function nextQuestion () {

       
        //multiply - this will run through the array 
        var n = Math.floor(Math.random() * questions.length)
        
        questions[n].displayQuestion();
        //use parseInt to make sure it turns the answer into a string 
        var answer = prompt('Please select the correct answer.');
        
        //this will allow the game to quit if the user types "exit"
        // we move the parseInt because "exit" is not an integer
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

        
        
    };

    nextQuestion();

})()