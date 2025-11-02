let messages = [];

function addMessage() {
    let msg = document.getElementById("messageInput").value.trim();
    if (msg === "") return;

    messages.push(msg);
    renderMessages();
    document.getElementById("messageInput").value = "";
}

function undoMessage() {
    messages.pop();
    renderMessages();
}

function clearMessages() {
    messages = [];
    renderMessages();
}

function renderMessages() {
    let display = document.getElementById("messagesDisplay");
    display.innerHTML = "";
    messages.forEach(m => {
        let p = document.createElement("p");
        p.textContent = m;
        display.appendChild(p);
    });
}

/* Balloon generator */
function releaseBalloons() {
    let container = document.querySelector(".balloons");
    for (let i = 0; i < 10; i++) {
        let b = document.createElement("div");
        b.className = "balloon";
        b.style.left = Math.random() * 100 + "vw";
        b.style.animationDuration = (5 + Math.random() * 3) + "s";
        container.appendChild(b);

        setTimeout(() => b.remove(), 8000);
    }
}

setInterval(releaseBalloons, 1200);
