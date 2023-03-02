import JSConfetti from'js-confetti'
const jsConfetti = new JSConfetti()

document.getElementById("button").addEventListener("click",fireConfetti)

function fireConfetti() {

    jsConfetti.addConfetti({
        confettiRadius:1,
        confettiNumber: 100,
        emojis:['💖', '😗','🌟','🌺']
    })
}