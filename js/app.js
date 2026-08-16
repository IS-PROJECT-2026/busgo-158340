console.log("BusGo application loaded successfully.");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const searchForm = document.getElementById("bus-search-form");

const busCards = document.querySelectorAll(".bus-card");
const seatSelection =
    document.getElementById("seat-selection");

const selectedBusInfo =
    document.getElementById("selected-bus-info");

const summaryBus =
    document.getElementById("summary-bus");

const summaryRoute =
    document.getElementById("summary-route");

const summaryPrice =
    document.getElementById("summary-price");
    const selectBusButtons =
    document.querySelectorAll(".select-bus-button");


selectBusButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const busCard =
            button.closest(".bus-card");


        const busName =
            busCard.querySelector("h3").textContent;


        const routePoints =
            busCard.querySelectorAll(".route-point span");


        const from =
            routePoints[0].textContent;

        const to =
            routePoints[1].textContent;


        const price =
            busCard.querySelector(
                ".bus-details div:last-child strong"
            ).textContent;


        // Update seat selection information

        selectedBusInfo.textContent =
            `${busName} — ${from} to ${to}`;


        summaryBus.textContent =
            busName;

        summaryRoute.textContent =
            `${from} → ${to}`;

        summaryPrice.textContent =
            price;


        // Show seat selection

        seatSelection.style.display = "block";


        seatSelection.scrollIntoView({
            behavior: "smooth"
        });

    });

});

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
/* =========================================
   Seat Selection
   ========================================= */

const seats = document.querySelectorAll(".seat.available");

const summarySeat =
    document.getElementById("summary-seat");

const continueButton =
    document.getElementById("continue-booking");

let selectedSeat = null;


seats.forEach(function (seat) {

    seat.addEventListener("click", function () {

        const clickedSeat = seat.dataset.seat;

        // If the selected seat is clicked again, deselect it
        if (selectedSeat === clickedSeat) {

            seat.classList.remove("selected");

            selectedSeat = null;

            summarySeat.textContent =
                "Not selected";

            continueButton.disabled = true;

            return;
        }

        // Remove previous selection
        seats.forEach(function (otherSeat) {
            otherSeat.classList.remove("selected");
        });

        // Select the new seat
        seat.classList.add("selected");

        selectedSeat = clickedSeat;

        // Update booking summary
        summarySeat.textContent =
            `Seat ${selectedSeat}`;

        // Enable Continue button
        continueButton.disabled = false;

    });

});
continueButton.addEventListener("click", function () {

    if (!selectedSeat) {
        return;
    }

    const busName = summaryBus.textContent;
    const route = summaryRoute.textContent;
    const price = summaryPrice.textContent;

    showConfirmation(
        busName,
        route,
        selectedSeat,
        price
    );

});