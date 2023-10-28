
const inputUno = document.getElementById('1')
const inputDue = document.getElementById('2')
const inputTre = document.getElementById('3')
const inputQuattro = document.getElementById('4')
const inputCinque = document.getElementById('5')
const stampa = document.getElementById('stampa')
const col = document.createElement('div');
const numbersLenght = 5 
const numbers = document.getElementById('numbers')
const conferma = document.getElementById('conferma')
const numeriDaIndovinare = []
const numberFound = document.getElementById('numbers-found')

stampa.addEventListener('click', function(){
    numbers.classList.remove('d-none')
    inputUno.classList.add('d-none')
    inputDue.classList.add('d-none')
    inputTre.classList.add('d-none')
    inputQuattro.classList.add('d-none')
    inputCinque.classList.add('d-none')
    generaNumeri()

    setTimeout( sparireNumeri, 3000)

})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generaNumeri(){
    
    let num; 

    for(let i = 1; i <= 5;){
        num = getRndInteger(1, 100)
        if(numeriDaIndovinare.includes(num)){

        }else{
        numeriDaIndovinare.push(num) 
        i++
        }
    }
    numbers.innerHTML = numeriDaIndovinare
}

function sparireNumeri(){
    numbers.classList.add('d-none')
    inputUno.classList.remove('d-none')
    inputDue.classList.remove('d-none')
    inputTre.classList.remove('d-none')
    inputQuattro.classList.remove('d-none')
    inputCinque.classList.remove('d-none')

}

conferma.addEventListener('click', function(){
    let inputValueUno = inputUno.value
    let inputValueDue = inputDue.value
    let inputValueTre = inputTre.value
    let inputValueQuattro = inputQuattro.value
    let inputValueCinque = inputCinque.value
    
    let numeriScritti = []
    numeriScritti.push(inputValueUno)
    numeriScritti.push(inputValueDue)
    numeriScritti.push(inputValueTre)
    numeriScritti.push(inputValueQuattro)
    numeriScritti.push(inputValueCinque)

    let amountNumGiusti = 0
    let numeriCorretti = []
    let numeriSbagliati = []

    for(let i = 1; i <= 5; i++){
        if(numeriDaIndovinare.includes(numeriScritti[0])){
            let numVittoria = numeriScritti.shift();
            numeriCorretti.push(numVittoria)
            amountNumGiusti++
        }else{
            let numPerso = numeriScritti.shift();
            numeriSbagliati.push(numPerso)
        }
        
    }
    console.log(amountNumGiusti);
    numberFound.innerHTML = 'hai trovato ' + amountNumGiusti + ' numeri corretti'
})



