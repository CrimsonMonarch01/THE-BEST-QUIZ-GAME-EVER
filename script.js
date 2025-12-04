const button1 = document.querySelector('#button1');
const url = "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple"
const hlas = document.querySelector('#hlas')
const zobrazenieAsi = document.querySelector('#quiz-container') //ked to bude fungovat tak huraaa 

async function pressQuestions (){

    if (button1){
        button1.addEventListener('click', async () => { // tu je async function ktora pocuva ked kliknes a potom sa to pokusi urobit funkciu
            try {
                
                const response = await fetch (url); // fetchuje link
                const data = await response.json(); // caka na response
                
                let vsetko = '' //HTML veci

                data.results.forEach(lietajuciMajko => {
                    vsetko += `
                   <div style="display: none;">
                        <label for=""><input type="radio" name="otazka"> ${lietajuciMajko.correct_answer}</label>
                            <label for=""><input type="radio" name="Odpoved"> ${lietajuciMajko.incorrect_answer}</label>
                        <label for=""><input type="radio" name="odpoved"> ${lietajuciMajko.incorrect_answer}</label>
                            <label for=""><input type="radio" name="odpoveD"> ${lietajuciMajko.incorrect_answer}</label>
    </div>
                `
                }); // toto mali byt odpovede 

                zobrazenieAsi.innerHTML = vsetko; 
               /* const correctAnswers = data.results.map(item => item.correct_answer);
                const incorrectAnswers = data.results.map(item => item.incorrect_answers);


                console.log(correctAnswers);
                console.log(incorrectAnswers);*/
                
            } catch (error) {
                console.error("Error", error); // toto ma catchovat  errori ale nefunguje to ako ma 
            }
        })

}}


    
    
pressQuestions(); 

   /*fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data.results))
  .catch(error => console.error("Error:", error));*/
  



