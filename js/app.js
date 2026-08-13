console.log("BusGo application loaded successfully.");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const searchForm = document.getElementById("bus-search-form");

const busCards = document.querySelectorAll(".bus-card");

const resultsMessage = document.getElementById(
    "search-results-message"
);


searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    const travelDate =
        document.getElementById("travel-date").value;


    // Validate the route

    if (!from || !to || !travelDate) {

        resultsMessage.textContent =
            "Please select your departure, destination, and travel date.";

        return;
    }


    // Prevent the user from selecting the same location

    if (from === to) {

        resultsMessage.textContent =
            "Departure and destination cannot be the same.";

        return;
    }


    let matchingBuses = 0;


    // Check every bus card

    busCards.forEach(function (card) {

        const busFrom = card.dataset.from;

        const busTo = card.dataset.to;


        if (busFrom === from && busTo === to) {

            card.style.display = "block";

            matchingBuses++;

        } else {

            card.style.display = "none";

        }

    });


    // Display result message

    if (matchingBuses > 0) {

        resultsMessage.textContent =
            `${matchingBuses} bus service(s) found for your journey.`;

    } else {

        resultsMessage.textContent =
            "No buses are currently available for this route.";

    }


    // Scroll to the results

    document.getElementById("buses").scrollIntoView({
        behavior: "smooth"
    });

});
const resetButton =
    document.getElementById("reset-search");


resetButton.addEventListener("click", function () {

    searchForm.reset();

    busCards.forEach(function (card) {

        card.style.display = "block";

    });

    resultsMessage.textContent = "";

});