function solve() {
  let quizzQuestions = document.getElementsByClassName(`quiz-step step1 current`);
  let hidden = document.getElementsByClassName(`hidden`);
  let rightAnswers = 0;
  let wrongAnswers = 0;
  let ulResult = document.querySelector("#results");
  let h1Result = document.querySelector("#results > li > h1");
  let anwers = 0;
  for (let i = 0 ; i < quizzQuestions.length; i ++){
      if (i == 0){
        let buttonRight = document.querySelector("#quizzie > section:nth-child(2) > ul > li.quiz-answer.low-value > div > p")
        let buttonWrong =  document.querySelector("#quizzie > section:nth-child(2) > ul > li.quiz-answer.high-value > div > p");
        buttonRight.addEventListener(`click`, right)
        buttonWrong.addEventListener(`click`, worng)
      } else if (i == 1){
        let buttonRight = document.querySelector("#quizzie > section:nth-child(3) > ul > li.quiz-answer.high-value > div > p")
        let buttonWrong = document.querySelector("#quizzie > section:nth-child(3) > ul > li.quiz-answer.low-value > div > p")
        buttonRight.addEventListener(`click`, right)
        buttonWrong.addEventListener(`click`, worng)
      } else if (i == 2){
        let buttonRight = document.querySelector("#quizzie > section:nth-child(4) > ul > li.quiz-answer.low-value > div > p")
        let buttonWrong = document.querySelector("#quizzie > section:nth-child(4) > ul > li.quiz-answer.high-value > div > p");
        buttonRight.addEventListener(`click`, right)
        buttonWrong.addEventListener(`click`, worng)
      }
  }
  function right(){
    anwers+= 1
    rightAnswers += 1
    let parent = this.parentNode.parentNode.parentNode.parentNode
    parent.style.display = `none`

    if(anwers <= 2){
    hidden[rightAnswers - 1].style.display = `block`;
    }
    if (rightAnswers + wrongAnswers == 3){
      ulResult.style.display = `block`;
     
      if (rightAnswers == 3){
        h1Result.textContent = `You are recognized as top JavaScript fan!` 
      } else {
        h1Result.textContent = `You have ${rightAnswers} right answers` 
      }
    return rightAnswers
  } }

  function worng(){
    anwers += 1
    wrongAnswers += 1
    let parent = this.parentNode.parentNode.parentNode.parentNode
    parent.style.display = `none`

    
    if(anwers <= 2){
    hidden[wrongAnswers - 1].style.display = `block`;
    }
    if (rightAnswers + wrongAnswers == 3){
      ulResult.style.display = `block`;
     
      if (rightAnswers == 3){
        h1Result.textContent = `You are recognized as top JavaScript fan!` 
      } else {
        h1Result.textContent = `You have ${rightAnswers} right answers` 
      }
 
    }
    return wrongAnswers
  }
}