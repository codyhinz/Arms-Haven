
const spoilerH4 = () => {
    const displayParagraph = document.getElementById("spoiler");
    displayParagraph.style.display = "block";
}

const clickableSpoiler = document.querySelector("h4");
clickableSpoiler.addEventListener('click', spoilerH4);