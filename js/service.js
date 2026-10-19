function openChat() {
    document.getElementById("chatbot").style.display = "block";
    document.getElementById("userInput").focus();
}

function closeChat() {
    document.getElementById("chatbot").style.display = "none";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    const message = input.value.trim();

    if (message === "") return;

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;
    messages.appendChild(userMessage);
    input.value = "";

    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    const question = message.toLowerCase();

    if (question.includes("gom kora")) {
        botMessage.textContent = "Gom Kora is a sacred pilgrimage site in Trashiyangtse, Bhutan.";
    } else if (question.includes("aja ney")) {
        botMessage.textContent = "Aja Ney is a sacred pilgrimage destination associated with Guru Rinpoche in eastern Bhutan.";
    } else if (question.includes("gasa") || question.includes("menchu") || question.includes("hot spring")) {
        botMessage.textContent = "Gasa Menchu is a natural hot spring in Gasa Dzongkhag.";
    } else if (question.includes("mebar") || question.includes("burning lake")) {
        botMessage.textContent = "Mebar Tsho is a sacred lake in Bumthang associated with the story of Terton Pema Lingpa.";
    } else if (question.includes("omba")) {
        botMessage.textContent = "Omba Ney is a sacred site in eastern Bhutan known for its natural OM rock formation.";
    } else if (question.includes("hello") || question.includes("hi")) {
        botMessage.textContent = "Hello! Welcome to Yul-Go-Ri. Ask me about Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho or Omba Ney.";
    } else if (question.includes("book") || question.includes("booking")) {
        botMessage.textContent = "Choose a place and press its Book Now button. This demo displays a message; a real booking form can be added later.";
    } else {
        botMessage.textContent = "I can help with Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho and Omba Ney. Which place would you like to know about?";
    }

    messages.appendChild(botMessage);
    messages.scrollTop = messages.scrollHeight;
}

document.getElementById("chatForm").addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
});
