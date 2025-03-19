let timer = document.getElementById("timer");

        let countdown = setInterval(() => {
            if (timer.textContent === "0") {
                clearInterval(countdown);
                alert("Вы победили в конкурсе!");
            } else {
                timer.textContent--;
            }
        }, 60);