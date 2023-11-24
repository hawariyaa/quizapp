const q1 = document.querySelector('.question1');
const q2 = document.querySelector('.question2');
const q3 = document.querySelector('.question3');
const q4 = document.querySelector('.question4');
const next = document.querySelector('.next');
const playagin = document.querySelector('.playagin');


let currentQuestion = 0;
let questions = [q1, q2, q3, q4, playagin];
function change(currentQuestion){



  // hide current question
  questions[currentQuestion].style.display = 'none';
  // show next question
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0; // start from beginning if at end
  }
  questions[currentQuestion].style.display = 'block';

}

next.addEventListener('click', function() {
  // hide current question
  questions[currentQuestion].style.display = 'none';
  // show next question
  currentQuestion++;
  if(currentQuestion >= questions.length){

  }else{
    next.innerHTML = `<button>Next</button>`;
  }
  if (currentQuestion >= questions.length) {
    currentQuestion = 0; // start from beginning if at end
  }

  questions[currentQuestion].style.display = 'block';

});
