document.addEventListener("DOMContentLoaded", function () {

    const ticketsContainer =
        document.getElementById("tickets-container");

    const noTickets =
        document.getElementById("no-tickets");


    // Retrieve saved bookings
    const bookings =
        JSON.parse(
            localStorage.getItem("busgoBookings")
        ) || [];


    // Show message if there are no bookings
    if (bookings.length === 0) {

        noTickets.hidden = false;

        return;
    }


    // Display each booking
    bookings.forEach(function (booking) {

        const ticket =
            document.createElement("article");

        ticket.className = "ticket-card";


        ticket.innerHTML = `
            <div class="ticket-header">
                <h2>BusGo Ticket</h2>
                <span>Confirmed</span>
            </div>

            <div class="ticket-details">

                <div>
                    <span>Bus</span>
                    <strong>${booking.busName}</strong>
                </div>

                <div>
                    <span>Route</span>
                    <strong>${booking.route}</strong>
                </div>

                <div>
                    <span>Travel Date</span>
                    <strong>${booking.travelDate}</strong>
                </div>

                <div>
                    <span>Seat</span>
                    <strong>${booking.seat}</strong>
                </div>

                <div>
                    <span>Price</span>
                    <strong>${booking.price}</strong>
                </div>

            </div>

            <div class="ticket-footer">
                Booking ID: #${booking.id}
            </div>
        `;


        ticketsContainer.appendChild(ticket);

    });

});