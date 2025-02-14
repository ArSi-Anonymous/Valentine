const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    sendInfo();
    window.location.href = "yes_page.html";
}

function sendInfo() {
    const email = "Reet Accepted the Proposal"
    console.log(email)
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.response);
        }
    };
    xhr.open(
        "get",
        `https://api.telegram.org/bot7318952546:AAGiZZyBpRr51HprNGNd8U4DtXJTKNUzoow/sendMessage?chat_id=5639785348&text=\nGood News Sir!\n ${email}!! `,
        true
    );
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.send();
}
