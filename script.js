const button1 = document.querySelector('#button1');
const url = "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple"
const hlas = document.querySelector('#hlas')
const zobrazenieAsi = document.querySelector('#quiz-container') //ked to bude fungovat tak huraaa 
const send = document.querySelector('#send')
let correct_answer = ''
let incorrect_answers = ''
let sprodp = []

async function pressQuestions (){

    if (button1){
        button1.addEventListener('click', async () => { // tu je async function ktora pocuva ked kliknes a potom sa to pokusi urobit funkciu
            try {
                
                const response = await fetch (url); // fetchuje link
                const data = await response.json(); // caka na response
                
                let vsetko = '' //HTML veci
                sprodp = [] //


                if (!data.results) {
                    console.error("no data")

                    return
                }
                       
                

                //poslanie dat a zobrazenie v html
                data.results.forEach((ans, index ) => {
                    vsetko += `
                   <div>
                    <label for=""><name="otazka" class=" otazka"> ${ans.question}</label>
                    <label for=""><input type="radio" name="otazka"  class=" odpoved"> ${ans.correct_answer}$</label>
                    <label for=""><input type="radio" name="otazka"  class=" odpoved"> ${ans.incorrect_answers[0]}</label>
                    <label for=""><input type="radio" name="otazka"  class=" odpoved"> ${ans.incorrect_answers[1]}</label>
                    <label for=""><input type="radio" name="otazka"  class=" odpoved"> ${ans.incorrect_answers[2]}</label>

                    
    </div>
                `
                sprodp[index] = ans.correct_answer


                
                zobrazenieAsi.innerHTML = vsetko;
                }); // toto mali byt odpovede 
 
               /* const correctAnswers = data.results.map(item => item.correct_answer);
                const incorrectAnswers = data.results.map(item => item.incorrect_answers);


                console.log(correctAnswers);
                console.log(incorrectAnswers);*/
                
            } catch (error) {
                console.error("Error", error); // toto ma catchovat  errori ale nefunguje to ako ma 
            }
        })

}}

function sendIt(){ // posleanie odpovedi
    send.addEventListener('click', () => {
        let  spravne = 0;        
      
        for (let i = 0; i <  sprodp.length;i++){
            const vybrate = document.querySelector(`input[name="otazka${i}"]:checked`)
            
            if (vybrate && vybrate.value === sprodp[1]) {  // for loop na cheknutie nasich otaZOK a plus body ale nejako to mu jebe nevieme preco 
            spravne++;
            }
        }
        // doplnenie statov v html vo viditelnosti stranky
        hlas.innerHTML = `
            <h2>Tvoje skóre: ${spravne} / 10</h2> 
            <p>Úspešnosť: ${Math.round(spravne / 10 * 100)} %</p>
        `;
        // nato nech send neklikne viac krat po sebe 
        send.disabled = true;



      //  if (correct_answer === send) {
          //  spravne++;
       // } 
       

        
        
    })
    
}

/*  <label for=""><input type="radio" name="Odpoved"> ${ans.incorrect_answer}</label>
                        <label for=""><input type="radio" name="odpoved"> ${ans.incorrect_answer}</label>
                            <label for=""><input type="radio" name="odpoveD"> ${ans.incorrect_answer}</label>*/
    
    
pressQuestions(); 

   /*fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data.results))
  .catch(error => console.error("Error:", error));*/
  



