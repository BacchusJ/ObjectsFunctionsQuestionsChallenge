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
    
    

    function nextQuestion () {
        
        //multiply - this will run through the array 
        var n = Math.floor(Math.random() * questions.length)
        
        questions[n].displayQuestion();
        //use parseInt to make sure it turns the answer into a string 
        var answer = prompt('Please select the correct answer.');
      
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();
        }

        

    }                     
                         
    nextQuestion();

    }) ();
    console.log(this.question);
    //this will loop through the answers 
    for (var i = 0; i < this.answers.length; i++ ) {
        
