let tete = document.querySelector('#tete');
let corp = document.querySelector('#corp');
let brasG = document.querySelector('#bras-g');
let brasD = document.querySelector('#bras-d');
let jambeG = document.querySelector('#jambe-g');
let jambeD = document.querySelector('#jambe-d');
let oeilG = document.querySelector('#oeilG');
let oeilD = document.querySelector('#oeilD');
let bouche = document.querySelector('#bouche');
let oeilGx = document.querySelector('#oeilGx');
let oeilDx = document.querySelector('#oeilDx');
let boucheX = document.querySelector('#bouchex');
let body = document.querySelector('body');
let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let result = document.querySelector('#result')
let resultEnd = document.querySelector('#result-end')
let inputGuess = document.querySelector('#input-guess')
let btnGuess = document.querySelector('#btn-guess')
let preview = []
let tableauEnter = []
let nbError = 0;
let value
let doublon
let request = new XMLHttpRequest();
request.open("GET", "word.txt", true);
request.send()

request.onload = function(){
    let words = this.responseText;
    words = words.split("\n")
    // Transforme wordArray en minuscule
    const wordArray = words.map(element => {
        return element.toLowerCase();
    });

    // Gen mot aléatoirement
    let randomWord = ~~(Math.random()*wordArray.length);
    const word = wordArray[randomWord];
    console.log(word)

    // Preview 
    for(let i = 0; i < word.length; i++){
        preview.push(".");
    } result.textContent = preview

    // Decompose le tableau
    function decompLetter() {
        const letters = [];
        for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        letters.push(letter);
        } return letters;
    } const resultArray = decompLetter(word);


    function checkDoublon(resultArray, value) {
        let count = 0;
        for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] === value) {
            count++;
        }
        }
        return count > 1;
    }

    // Compare la valeur et le tableau 
    function compar(){
        let place = resultArray.indexOf(input.value.toLowerCase())
        if(doublon){
            let nbRepe = 0;
            for (let i = 0; i < resultArray.length; i++) {
                if (resultArray[i] === input.value.toLowerCase()) {
                    nbRepe++;
                }
            }
            do {
                preview.splice(place, 1, input.value.toLowerCase());
                resultArray.splice(place, 1, ".");
                result.textContent = preview;
                nbRepe--;
                decompLetter()
                doublon = checkDoublon(resultArray, value)
                compar()
            } while (nbRepe != 1)
        } else if(resultArray.includes(input.value.toLowerCase())) {
            preview.splice(place, 1, input.value.toLowerCase());
            result.textContent = preview;
            resultArray.splice(place, 1, ".");
            if(preview.includes(".") == false) {
                resultEnd.textContent = "Tu as gagné !"
                btn.textContent = "GG";
                btnGuess.textContent = ":)";
                input.disabled = true;
                btn.disabled = true;
                inputGuess.disabled = true;
                btnGuess.disabled = true;
                tete.style.display = "flex";
                corp.style.display = "flex";
                brasG.style.display = "flex";
                brasD.style.display = "flex";
                jambeG.style.display = "flex";
                jambeD.style.display = "flex";
                oeilG.style.display = "flex";
                oeilD.style.display = "flex";
                bouche.style.display = "flex";
                boucheX.style.display = "none";
                body.style.backgroundColor = "#fffef0";
                input.style.backgroundColor = "#fffef0";
                btn.style.backgroundColor = "#fffef0";
                btn.style.color = "#458728";
                inputGuess.style.backgroundColor = "#fffef0";
                btnGuess.style.backgroundColor = "#fffef0";
                btnGuess.style.color = "#458728";
            }
        } else if(tableauEnter.includes(value)) {
            alert("Tu l'as déjà mis couillon")
        } else if(nbError == 0) {
            tete.style.display = "flex";
            oeilG.style.display = "flex";
            oeilD.style.display = "flex";
            boucheX.style.display = "flex";
            body.style.backgroundColor = "#ffcbc0";
            input.style.backgroundColor = "#fabe97";
            btn.style.backgroundColor = "#6a6c20";
            btn.style.color = "#cbcaa6";
            inputGuess.style.backgroundColor = "#fabe97";
            btnGuess.style.backgroundColor = "#6a6c20";
            btnGuess.style.color = "#cbcaa6";
            nbError = nbError + 1;
        } else if(nbError == 1) {
            corp.style.display = "flex";
            body.style.backgroundColor = "#ffa299";
            input.style.backgroundColor = "#fb9879";
            btn.style.backgroundColor = "#88561a";
            btn.style.color = "#a2a185";
            inputGuess.style.backgroundColor = "#fb9879";
            btnGuess.style.backgroundColor = "#88561a";
            btnGuess.style.color = "#a2a185";
            nbError = nbError + 1;
        } else if(nbError == 2) {
            brasG.style.display = "flex";
            body.style.backgroundColor = "#ff7973";
            input.style.backgroundColor = "#fc725a";
            btn.style.backgroundColor = "#a64113";
            btn.style.color = "#797963";
            inputGuess.style.backgroundColor = "#fc725a";
            btnGuess.style.backgroundColor = "#a64113";
            btnGuess.style.color = "#797963";
            nbError = nbError + 1;
        } else if(nbError == 3) {
            brasD.style.display = "flex";
            body.style.backgroundColor = "#ff524d";
            input.style.backgroundColor = "#fd4d3d";
            btn.style.backgroundColor = "#c32b0d";
            btn.style.color = "#525143";
            inputGuess.style.backgroundColor = "#fd4d3d";
            btnGuess.style.backgroundColor = "#c32b0d";
            btnGuess.style.color = "#525143";
            nbError = nbError + 1;
        } else if(nbError == 4) {
            jambeG.style.display = "flex";
            body.style.backgroundColor = "#ff2927";
            input.style.backgroundColor = "#fe261e";
            btn.style.backgroundColor = "#e11606";
            btn.style.color = "#292821";
            inputGuess.style.backgroundColor = "#fe261e";
            btnGuess.style.backgroundColor = "#e11606";
            btnGuess.style.color = "#292821";
            nbError = nbError + 1;
        } else {
            jambeD.style.display = "flex";
            resultEnd.textContent = "TU AS PERDU ..";
            result.textContent = "Le mot était : " + '"' + word + '"';
            body.style.backgroundColor = "red";
            input.disabled = true;
            btn.disabled = true;
            inputGuess.disabled = true;
            btnGuess.disabled = true;
            oeilGx.style.display = "flex";
            oeilDx.style.display = "flex";
            boucheX.style.display = "flex";
            oeilG.style.display = "none";
            oeilD.style.display = "none";
            bouche.style.display = "none";
            input.style.backgroundColor = "red";
            btn.style.backgroundColor = "red";
            btn.style.color = "black";
            btn.textContent = "TROP TARD";
            inputGuess.style.backgroundColor = "red";
            btnGuess.style.backgroundColor = "red";
            btnGuess.style.color = "black";
            btnGuess.textContent = "BOUHH";
        } 
    }

    // Action clique sur le bouton
    btn.addEventListener("click", ()=>{
        if(isNaN(input.value.toLowerCase())) {
            decompLetter()
            value = input.value.toLowerCase();
            doublon = checkDoublon(resultArray, value)
            compar()
            tableauEnter.push(value)
        } else {
            alert("Merci mettre une lettre valide.")
        }
        input.value = "";
    })

    // Action clique sur "enter"
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        btn.click();
        }
    });

    // Action clique sur le bouton
    btnGuess.addEventListener("click", ()=>{
        if(isNaN(inputGuess.value.toLowerCase())) {
            if(inputGuess.value.toLowerCase() == word) {
                resultEnd.textContent = "Tu as gagné !"
                btnGuess.textContent = "GG";
                btn.textContent = ":)";
                inputGuess.disabled = true;
                btnGuess.disabled = true;
                input.disabled = true;
                btn.disabled = true;
                tete.style.display = "flex";
                corp.style.display = "flex";
                brasG.style.display = "flex";
                brasD.style.display = "flex";
                jambeG.style.display = "flex";
                jambeD.style.display = "flex";
                oeilG.style.display = "flex";
                oeilD.style.display = "flex";
                bouche.style.display = "flex";
                boucheX.style.display = "none";
                body.style.backgroundColor = "#fffef0";
                inputGuess.style.backgroundColor = "#fffef0";
                btnGuess.style.backgroundColor = "#fffef0";
                btnGuess.style.color = "#458728";
                input.style.backgroundColor = "#fffef0";
                btn.style.backgroundColor = "#fffef0";
                btn.style.color = "#458728";
                result.textContent = word;
            } else if(tableauEnter.includes(inputGuess.value)) {
                alert("Tu l'as déjà mis couillon")
            } else if(nbError == 0) {
                tete.style.display = "flex";
                oeilG.style.display = "flex";
                oeilD.style.display = "flex";
                boucheX.style.display = "flex";
                body.style.backgroundColor = "#ffcbc0";
                inputGuess.style.backgroundColor = "#fabe97";
                btnGuess.style.backgroundColor = "#6a6c20";
                btnGuess.style.color = "#cbcaa6";
                input.style.backgroundColor = "#fabe97";
                btn.style.backgroundColor = "#6a6c20";
                btn.style.color = "#cbcaa6";
                nbError = nbError + 1;
            } else if(nbError == 1) {
                corp.style.display = "flex";
                body.style.backgroundColor = "#ffa299";
                inputGuess.style.backgroundColor = "#fb9879";
                btnGuess.style.backgroundColor = "#88561a";
                btnGuess.style.color = "#a2a185";
                input.style.backgroundColor = "#fb9879";
                btn.style.backgroundColor = "#88561a";
                btn.style.color = "#a2a185";
                nbError = nbError + 1;
            } else if(nbError == 2) {
                brasG.style.display = "flex";
                body.style.backgroundColor = "#ff7973";
                inputGuess.style.backgroundColor = "#fc725a";
                btnGuess.style.backgroundColor = "#a64113";
                btnGuess.style.color = "#797963";
                input.style.backgroundColor = "#fc725a";
                btn.style.backgroundColor = "#a64113";
                btn.style.color = "#797963";
                nbError = nbError + 1;
            } else if(nbError == 3) {
                brasD.style.display = "flex";
                body.style.backgroundColor = "#ff524d";
                inputGuess.style.backgroundColor = "#fd4d3d";
                btnGuess.style.backgroundColor = "#c32b0d";
                btnGuess.style.color = "#525143";
                input.style.backgroundColor = "#fd4d3d";
                btn.style.backgroundColor = "#c32b0d";
                btn.style.color = "#525143";
                nbError = nbError + 1;
            } else if(nbError == 4) {
                jambeG.style.display = "flex";
                body.style.backgroundColor = "#ff2927";
                inputGuess.style.backgroundColor = "#fe261e";
                btnGuess.style.backgroundColor = "#e11606";
                btnGuess.style.color = "#292821";
                input.style.backgroundColor = "#fe261e";
                btn.style.backgroundColor = "#e11606";
                btn.style.color = "#292821";
                nbError = nbError + 1;
            } else {
                jambeD.style.display = "flex";
                resultEnd.textContent = "TU AS PERDU ..";
                result.textContent = "Le mot était : " + '"' + word + '"';
                body.style.backgroundColor = "red";
                inputGuess.disabled = true;
                btnGuess.disabled = true;
                input.disabled = true;
                btn.disabled = true;
                oeilGx.style.display = "flex";
                oeilDx.style.display = "flex";
                boucheX.style.display = "flex";
                oeilG.style.display = "none";
                oeilD.style.display = "none";
                bouche.style.display = "none";
                inputGuess.style.backgroundColor = "red";
                btnGuess.style.backgroundColor = "red";
                btnGuess.style.color = "black";
                btnGuess.textContent = "BOUH";
                input.style.backgroundColor = "red";
                btn.style.backgroundColor = "red";
                btn.style.color = "black";
                btn.textContent = "TROP TARD";
            }
        } else {
            alert("Merci mettre un mot valide.")
        }
        tableauEnter.push(inputGuess.value)
        inputGuess.value = "";
    })

    // Action clique sur "enter"
    inputGuess.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        btnGuess.click();
        }
    });

}