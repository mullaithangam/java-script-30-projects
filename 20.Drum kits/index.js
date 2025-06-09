const kits = ["snare", "kick", "crash", "tom"];
const btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
    const kit = kits[index];

    btn.style.backgroundImage = `url("images/${kit}.png")`;
    btn.style.backgroundSize = "cover";
    btn.style.backgroundPosition = "center";
    btn.style.color = "transparent";

    const audio = new Audio(`sounds/${kit}.wav`);

    btn.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();

        
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    });
});
