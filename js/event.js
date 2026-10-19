const moreInfoButtons = document.querySelectorAll(".more-info");
const infoPopup = document.getElementById("info-popup");
const closeInfo = document.getElementById("close-info");

// Get popup elements
const infoTitle = document.getElementById("info-title");
const infoLocation = document.getElementById("info-location");
const infoDate = document.getElementById("info-date");
const infoDescription = document.getElementById("info-description");
const infoCulture = document.getElementById("info-culture");
const infoActivities = document.getElementById("info-activities");
const infoTips = document.getElementById("info-tips");

// More details for each festival
const festivalExtraInfo = {
    "Drametse Ngacham": {
        culture: "Drametse Ngacham is an important part of Bhutanese cultural heritage and religious tradition.",
        activities: [
            "Watch the traditional masked drum dance.",
            "Experience Bhutanese music and costumes.",
            "Learn about the traditions of Drametse Monastery."
        ],
        tips: "Dress respectfully and follow the guidance of local organizers."
    },

    "Chorten Kora Festival": {
        culture: "The festival reflects Buddhist faith, pilgrimage, and the religious traditions of eastern Bhutan.",
        activities: [
            "Observe religious ceremonies.",
            "Watch pilgrims circumambulate the stupa.",
            "Experience local customs and traditions."
        ],
        tips: "Wear modest clothing and respect religious practices at the stupa."
    },

    "Trashiyangtse Festival": {
        culture: "This card highlights the local cultural and religious heritage of Trashiyangtse.",
        activities: [
            "Explore local traditions.",
            "Enjoy cultural activities when scheduled.",
            "Discover the heritage of eastern Bhutan."
        ],
        tips: "Confirm the exact event name and schedule with local organizers before visiting."
    },

    "Mongar Tshechu": {
        culture: "Mongar Tshechu brings people together to observe Buddhist traditions and preserve Bhutanese cultural heritage.",
        activities: [
            "Watch sacred mask dances.",
            "Observe religious ceremonies.",
            "Experience traditional music and community gatherings."
        ],
        tips: "Arrive early, dress respectfully, and follow local photography rules."
    },

    "Trashigang Tshechu": {
        culture: "Trashigang Tshechu celebrates Bhutanese Buddhist traditions through sacred dances and religious observances.",
        activities: [
            "Watch traditional masked dances.",
            "Observe religious ceremonies.",
            "Experience the atmosphere of a local tshechu."
        ],
        tips: "Wear modest clothing and respect the sacred ceremonies."
    },

    "Gomphu Kora Festival": {
        culture: "Gomphu Kora is an important religious gathering associated with pilgrimage and Buddhist traditions in eastern Bhutan.",
        activities: [
            "Walk around the sacred temple with pilgrims.",
            "Observe prayers and religious observances.",
            "Experience local traditions and community gatherings."
        ],
        tips: "Wear comfortable shoes, dress respectfully, and follow local guidance."
    }
};

// Open the More Info popup
moreInfoButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const title = button.getAttribute("data-title");
        const location = button.getAttribute("data-location");
        const date = button.getAttribute("data-date");
        const description = button.getAttribute("data-description");

        const extraInfo = festivalExtraInfo[title];

        infoTitle.textContent = title;
        infoLocation.textContent = location;
        infoDate.textContent = date;
        infoDescription.textContent = description;

        if (extraInfo) {
            infoCulture.textContent = extraInfo.culture;
            infoTips.textContent = extraInfo.tips;
            // Display activities as a list
            infoActivities.innerHTML = "";

            extraInfo.activities.forEach(function(activity) {
                const listItem = document.createElement("li");
                listItem.textContent = activity;
                infoActivities.appendChild(listItem);
            });
        } else {
            infoCulture.textContent = "Festival information is not available yet.";
            infoTips.textContent = "Check with local organizers for current visitor guidance.";
            infoActivities.innerHTML = "";
        }

        infoPopup.classList.add("show");
        document.body.style.overflow = "hidden";
    });
});

// Close popup using the X button
function closeInfoPopup() {
    if (!infoPopup) return;
    infoPopup.classList.remove("show");
    document.body.style.overflow = "";
}

if (closeInfo) closeInfo.addEventListener("click", closeInfoPopup);

// Close popup when clicking outside the box
if (infoPopup) infoPopup.addEventListener("click", function(event) {
    if (event.target === infoPopup) closeInfoPopup();
});

// Close popup using the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeInfoPopup();
});

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

const chatForm = document.getElementById("chatForm");
if (chatForm) chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  sendMessage();
});
