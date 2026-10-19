// Search bar
let search = document.getElementById("tour-search");
let cards = document.querySelectorAll(".tour-card");

search.addEventListener("input", function () {

    let value = search.value.toLowerCase();

    cards.forEach(function(card) {

        let place = card.querySelector("h2").innerText.toLowerCase();

        if (place.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});



//* PLACE INFORMATION */

const places = {
    "Gom Kora": {
        location: "Trashiyangtse Dzongkhag | Yangneer Area",

        images: [
            "../assest/image/tour.img/gom kora 1.jpg",
            "../assest/image/tour.img/gom kora 2.jpg",
            "../assest/image/tour.img/gom kora 3.jpg"
        ],

        description:
            "Gom Kora is a sacred pilgrimage site in eastern Bhutan, located in a scenic landscape near the Drangme Chhu valley. The site is known for its rocky surroundings, spiritual atmosphere and importance in Bhutanese Buddhist traditions.",

        history:
            "According to Bhutanese religious tradition, Guru Rinpoche visited this sacred place and subdued harmful forces. Gom Kora is also known for its annual religious festival, when devotees gather to pray and celebrate their faith.",

        whyVisit:
            "Visitors can learn about Bhutanese spiritual traditions, experience the peaceful surroundings, enjoy the natural scenery and observe local religious culture. Visitors should dress respectfully and follow local guidance.",

        address:
            "Yangneer area, Trashiyangtse Dzongkhag, Bhutan"
    },

    "Aja Ney": {
        location: "Mongar Dzongkhag | Sherimuhung Gewog",

        images: [
            "../assest/image/tour.img/aja ney 1.jpg",
            "../assest/image/tour.img/aja ney 2.jpg",
            "../assest/image/tour.img/aja ney 3.jpg"
        ],

        description:
            "Aja Ney is a sacred pilgrimage destination in eastern Bhutan associated with Guru Rinpoche. Its forests, mountain trails and sacred natural features make it an important destination for pilgrims and visitors interested in Bhutanese spiritual heritage.",

        history:
            "Aja Ney is connected with local Buddhist traditions and stories about Guru Rinpoche. The sacred syllable AJA is an important feature associated with the site and its religious identity.",

        whyVisit:
            "Visitors can explore the sacred natural landscape, appreciate the mountain environment and learn about Bhutan's spiritual heritage. The journey may include walking on mountain trails, so suitable footwear and local guidance are recommended.",

        address:
            "Sherimuhung Gewog, Mongar Dzongkhag, Bhutan"
    },

    "Gasa Hot Springs": {
        location: "Gasa Dzongkhag | Gasa Area",

        images: [
            "../assest/image/tour.img/gasa menchu 1.jpg",
            "../assest/image/tour.img/gasa mechu 2.jpg",
            "../assest/image/tour.img/gasa menchu 3.jpg"
        ],

        description:
            "Gasa Hot Springs, also known as Gasa Menchu, are natural hot springs surrounded by the mountains of northern Bhutan. They are a popular natural attraction for people seeking a relaxing stop while exploring Gasa.",

        history:
            "The hot springs have long been visited by local residents and travellers. They remain a well-known natural attraction connected with local life and traditions in Gasa.",

        whyVisit:
            "Visitors can enjoy the hot springs, admire the mountain scenery and experience the peaceful environment. Follow local safety instructions, check the water temperature before entering and respect the facilities.",

        address:
            "Gasa area, Gasa Dzongkhag, Bhutan"
    },

    "Mebar Tsho": {
        location: "Bumthang Dzongkhag | Tang Gewog",

        images: [
            "../assest/image/tour.img/mebar tsho 1.jpg",
            "../assest/image/tour.img/mebar tsho 2.jpg",
            "../assest/image/tour.img/mebar tsho 3.jpg"
        ],

        description:
            "Mebar Tsho, meaning Burning Lake, is a sacred lake in Bumthang. Surrounded by rocky cliffs and flowing water, it is one of Bhutan's well-known pilgrimage destinations and a place of deep religious significance.",

        history:
            "According to Bhutanese tradition, the revered treasure revealer Terton Pema Lingpa entered the lake holding a burning lamp and discovered sacred treasures. The story is closely associated with the name Burning Lake.",

        whyVisit:
            "Visitors can learn about the story of Pema Lingpa, experience the sacred atmosphere and admire the natural beauty of Bumthang. Please respect the sacred site and take care around the water and rocky edges.",

        address:
            "Tang Gewog, Bumthang Dzongkhag, Bhutan"
    },

    "Omba Ney": {
        location: "Trashiyangtse Dzongkhag | Toedtsho Gewog",

        images: [
            "../assest/image/tour.img/omba ney 1.jpg",
            "../assest/image/tour.img/omba nye 2.jpg",
            "../assest/image/tour.img/omba nye 3.jpg"
        ],

        description:
            "Omba Ney is a sacred pilgrimage site in eastern Bhutan known for a natural rock formation resembling the syllable OM. The area features cliffs, caves, forests and dramatic mountain scenery.",

        history:
            "Omba Ney is associated with Guru Rinpoche and Bhutanese Buddhist pilgrimage traditions. Its sacred rock formations and caves contribute to its spiritual importance and make it a notable destination in eastern Bhutan.",

        whyVisit:
            "Visitors can discover the natural OM formation, appreciate the mountain scenery and learn about local spiritual traditions. The walk may be challenging, so suitable footwear, preparation and local guidance are recommended.",

        address:
            "Toedtsho Gewog, Trashiyangtse Dzongkhag, Bhutan"
    }
};


/* =========================================
   SEARCH BAR
   ========================================= */

const searchInput = document.getElementById("tour-search");
const tourCards = document.querySelectorAll(".tour-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    tourCards.forEach(function (card) {

        const placeName =
            card.querySelector("h2").textContent.toLowerCase();

        const location =
            card.querySelector(".tour-location").textContent.toLowerCase();

        const matches =
            placeName.includes(searchValue) ||
            location.includes(searchValue);

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
});


/* =========================================
   OPEN PLACE DETAILS POPUP
   ========================================= */

let currentPlace = "";
let currentImages = [];
let currentImageIndex = 0;

function showPlace(placeName) {

    const place = places[placeName];

    if (!place) {
        alert("Place information not found: " + placeName);
        return;
    }

    currentPlace = placeName;
    currentImages = place.images;
    currentImageIndex = 0;

    document.getElementById("placeTitle").textContent =
        placeName;

    document.getElementById("placeLocation").textContent =
        place.location;

    document.getElementById("placeDescription").textContent =
        place.description;

    document.getElementById("placeHistory").textContent =
        place.history;

    document.getElementById("placeImportance").textContent =
        place.whyVisit;

    document.getElementById("placeAddress").textContent =
        place.address;

    showImage();

    const overlay =
        document.getElementById("detailsOverlay");

    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


/* =========================================
   DISPLAY CAROUSEL IMAGE
   ========================================= */

function showImage() {

    if (currentImages.length === 0) {
        return;
    }

    const image =
        document.getElementById("detailImage");

    image.onerror = function () {

        console.error(
            "Image not found. Check this path:",
            currentImages[currentImageIndex]
        );

        image.alt =
            "Image could not load. Check the filename in tour.js.";
    };

    image.onload = function () {

        image.alt =
            currentPlace + " image " + (currentImageIndex + 1);
    };

    image.src = currentImages[currentImageIndex];

    document.getElementById("imageCounter").textContent =
        (currentImageIndex + 1) + " / " + currentImages.length;
}


/* =========================================
   NEXT AND PREVIOUS IMAGE BUTTONS
   ========================================= */

function changeImage(direction) {

    if (currentImages.length === 0) {
        return;
    }

    currentImageIndex =
        (currentImageIndex + direction + currentImages.length)
        % currentImages.length;

    showImage();
}


/* =========================================
   CLOSE DETAILS POPUP
   ========================================= */

function closePlace() {

    const overlay =
        document.getElementById("detailsOverlay");

    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* CLOSE WHEN CLICKING OUTSIDE THE POPUP */

function overlayClick(event) {

    if (event.target.id === "detailsOverlay") {
        closePlace();
    }
}


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closePlace();
    }
});

function openChat() {

    document.getElementById("chatbot").style.display =
        "block";

    document.getElementById("userInput").focus();
}


function closeChat() {

    document.getElementById("chatbot").style.display =
        "none";
}


function sendMessage() {

    const input =
        document.getElementById("userInput");

    const messages =
        document.getElementById("messages");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    /* DISPLAY USER MESSAGE */

    const userMessage =
        document.createElement("div");

    userMessage.className = "user-message";
    userMessage.textContent = message;

    messages.appendChild(userMessage);

    input.value = "";

    /* CREATE BOT REPLY */

    const botMessage =
        document.createElement("div");

    botMessage.className = "bot-message";

    const question = message.toLowerCase();

    if (question.includes("gom kora")) {

        botMessage.textContent =
            "Gom Kora is a sacred pilgrimage site in Trashiyangtse, Bhutan.";

    } else if (question.includes("aja ney")) {

        botMessage.textContent =
            "Aja Ney is a sacred pilgrimage destination associated with Guru Rinpoche in eastern Bhutan.";

    } else if (
        question.includes("gasa") ||
        question.includes("menchu") ||
        question.includes("hot spring")
    ) {

        botMessage.textContent =
            "Gasa Menchu is a natural hot spring in Gasa Dzongkhag.";

    } else if (
        question.includes("mebar") ||
        question.includes("burning lake")
    ) {

        botMessage.textContent =
            "Mebar Tsho is a sacred lake in Bumthang associated with the story of Terton Pema Lingpa.";

    } else if (question.includes("omba")) {

        botMessage.textContent =
            "Omba Ney is a sacred site in eastern Bhutan known for its natural OM rock formation.";

    } else if (
        question.includes("hello") ||
        question.includes("hi")
    ) {

        botMessage.textContent =
            "Hello! Welcome to Yul-Go-Ri. Ask me about Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho or Omba Ney.";

    } else if (
        question.includes("book") ||
        question.includes("booking")
    ) {

        botMessage.textContent =
            "Choose a place and press its Book Now button. This demo displays a message; a real booking form can be added later.";

    } else {

        botMessage.textContent =
            "I can help with Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho and Omba Ney. Which place would you like to know about?";
    }

    messages.appendChild(botMessage);

    messages.scrollTop = messages.scrollHeight;
}


//    SEND CHAT MESSAGE USING BUTTON OR ENTER

document.getElementById("chatForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();
        sendMessage();

    }
);