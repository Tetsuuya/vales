function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window
                                    .getComputedStyle(yesButton)
                                    .fontSize);
    yesButton.computedStyleMap.fontSize = `${currentSize * 1.5}px`;

}

function handleYesClick () {
    window.location.href = "yehey.html";
}