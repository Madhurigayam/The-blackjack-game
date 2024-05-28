
let hasblackjack=false
let isAlive=false
let msgEl=document.getElementById("msg-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandomcard(){
    let randomnumber=Math.floor(Math.random()*13)+1
    if (randomnumber>10){
        return 10
    }
    else if(randomnumber===11){
        return 11
    }
    else{
        return randomnumber
    }
}

function StartGame(){
    isAlive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cardss=[firstcard , secondcard]
    sum=firstcard+secondcard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cardss.length; i++) {
        cardEl.textContent += cardss[i] + " "
    sumEl.textContent="sum: "+sum
    }

    if (sum<=21){
        mssg="draw an other card!"
    }
    else if(sum===21){
        mssg="w0hoo! you have got blackjack!"
        hasblackjack=true
    }
    else{
        mssg="you are out of the game!"
        isAlive=false
    }
    msgEl.textContent=mssg
}
 function newcard(){
    if(isAlive===true && hasblackjack===false){
        let card=getrandomcard()
    sum+=card
    cardss.push(card)
    renderGame()
    }
    
 }