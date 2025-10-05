$(document).ready(function () {
    const $dino = $(".dino");
    const $cactus = $(".cactus");
    const $score = $(".score");
    let score = 0;
    let jumping = false;

    $(document).on("keydown", function (e) {
        if (e.key === " " && !jumping) jump();
    });

    function jump() {
        jumping = true;
        $dino.animate({ bottom: "120px" }, 400, function () {
            $dino.animate({ bottom: "10px" }, 400, function () {
                jumping = false;
            });
        });
    }

    function moveCactus() {
        const cactusLeft = parseInt($cactus.css("left"));
        if (cactusLeft <= 0) {
            $cactus.css("left", "600px");
            score++;
            $score.text(`Score: ${score}`);
        } else {
            $cactus.css("left", cactusLeft - 5 + "px");
        }
        check();
    }

    function check() {
        const dinoRect = $dino[0].getBoundingClientRect();
        const cactusRect = $cactus[0].getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            alert(`Game Over!`);
            score = 0;
            $score.text(`Score: ${score}`);
            $cactus.css("left", "600px");
        }
    }

    setInterval(moveCactus, 10);
});
