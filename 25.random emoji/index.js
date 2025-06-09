const btnE1 = document.getElementById("btn");
const emojinameE1 = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=521c51fccb86cc2527dc44412821f1611bd196b8");

    let data = await response.json(); 

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();

btnE1.addEventListener("click", () => {
    if (emoji.length === 0) {
        emojiNameE1.innerText = "Loading emojis...";
        return;
    }

    const randomNum = Math.floor(Math.random() * emoji.length); 
    btnE1.innerText = emoji[randomNum].emojiName;
    emojinameE1.innerText = emoji[randomNum].emojiCode;
});
