const button1 = document.querySelector('#button1');
const url = "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple"
const hlas = document.querySelector('#hlas')

async function pressQuestions (){

    if (button1){
        button1.addEventListener('click', async () => {
            try {
                document.getElementById("hlas").textContent = Questions;
                const response = await fetch (url);
                const data = await response.json();
                const Questions  = JSON.stringify(data.results, null, 2);  
               /* const correctAnswers = data.results.map(item => item.correct_answer);
                const incorrectAnswers = data.results.map(item => item.incorrect_answers);


                console.log(correctAnswers);
                console.log(incorrectAnswers);*/
                console.log(Questions);
            } catch (error) {
                console.error("Error", error);
            }
        })

}}

    
pressQuestions();

   /*fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data.results))
  .catch(error => console.error("Error:", error));*/
  



//