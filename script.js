//selecting the screen 
let screen = document.querySelector(".textarea");

let keys = document.querySelectorAll(".btn")

//creating the word that will be displayed
let word = "Hang Man"

let letters = word.toUpperCase().split("");

const displayWord = ()=>{
    letters.forEach(char => {
        if (char == ' ') {
            let space = document.createElement("div")
            space.classList.add("space");
            screen.appendChild(space);

        }else{
            let letter = document.createElement("input")
            letter.type = "text"
            letter.classList.add("letter");
            letter.value = char;
            letter.classList.add("invisible")
            let letterBox = document.createElement("div");
            letterBox.classList.add("letter-box")
            letterBox.appendChild(letter);
            screen.appendChild(letterBox)
        }
    });
}

const checkWord = (letter)=>{
    let answer = document.querySelectorAll(".letter");
    answer.forEach(char => {
        if(char.value == letter){
            char.classList.remove("invisible")            
        }
    });
}

keys.forEach(key => {
   key.addEventListener("click", ()=>{
    checkWord(key.textContent)
    
   }) 
});

displayWord();