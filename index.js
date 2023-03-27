let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let home = 0
let guest = 0

function increaseHomeBtnA() {
    home += 1
    homeScore.textContent = home
}    
function increaseHomeBtnB() {
    home += 2
    homeScore.textContent = home
} 
function increaseHomeBtnC() {
    home += 3
    homeScore.textContent = home
} 
function increaseGstBtnA() {
    guest += 1
    guestScore.textContent = guest
}    
function increaseGstBtnB() {
    guest += 2
    guestScore.textContent = guest
} 
function increaseGstBtnC() {
    guest += 3
    guestScore.textContent = guest
} 
function resetScores() {
    home = 0
    homeScore.textContent = home
    guest = 0
    guestScore.textContent = guest
    
}




    
