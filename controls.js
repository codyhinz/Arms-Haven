
const spoilerH4 = () => {
    const displayParagraph = document.getElementById("spoiler");
    if (displayParagraph.style.display === "block") {
        displayParagraph.style.display = "none";
      } else {
        displayParagraph.style.display = "block";
    }
}

const clickableSpoiler = document.querySelector("h4");
clickableSpoiler.addEventListener('click', spoilerH4);