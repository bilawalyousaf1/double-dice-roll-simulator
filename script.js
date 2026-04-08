function roll_dice(event) {
    const d1 = document.getElementById('dice1');
    const d2 = document.getElementById('dice2');

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    d1.className = "";
    d2.className = "";

    setTimeout(() => {


        if (num1 == 1) {
            d1.className = "fa-solid fa-dice-one output animate__animated animate__rotateIn";
        } else if (num1 == 2) {
            d1.className = "fa-solid fa-dice-two output animate__animated animate__rotateIn";
        } else if (num1 == 3) {
            d1.className = "fa-solid fa-dice-three output animate__animated animate__rotateIn";
        } else if (num1 == 4) {
            d1.className = "fa-solid fa-dice-four output animate__animated animate__rotateIn";
        } else if (num1 == 5) {
            d1.className = "fa-solid fa-dice-five output animate__animated animate__rotateIn";
        } else if (num1 == 6) {
            d1.className = "fa-solid fa-dice-six output animate__animated animate__rotateIn";
        }

        // Step 5: Dice 2 ko update karo animation ke saath
        if (num2 == 1) {
            d2.className = "fa-solid fa-dice-one output animate__animated animate__rotateIn";
        } else if (num2 == 2) {
            d2.className = "fa-solid fa-dice-two output animate__animated animate__rotateIn";
        } else if (num2 == 3) {
            d2.className = "fa-solid fa-dice-three output animate__animated animate__rotateIn";
        } else if (num2 == 4) {
            d2.className = "fa-solid fa-dice-four output animate__animated animate__rotateIn";
        } else if (num2 == 5) {
            d2.className = "fa-solid fa-dice-five output animate__animated animate__rotateIn";
        } else if (num2 == 6) {
            d2.className = "fa-solid fa-dice-six output animate__animated animate__rotateIn";
        }

    }, 10);

    document.querySelector(".audio").play()

}