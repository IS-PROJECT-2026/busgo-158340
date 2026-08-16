function showConfirmation(busName, route, seat, price, travelDate) {

    const booking = {
        id: Date.now(),
        busName: busName,
        route: route,
        seat: seat,
        price: price,
        travelDate: travelDate
    };

    // Get existing bookings
    const bookings =
        JSON.parse(localStorage.getItem("busgoBookings")) || [];

    // Add the new booking
    bookings.push(booking);

    // Save updated bookings
    localStorage.setItem(
        "busgoBookings",
        JSON.stringify(bookings)
    );

    alert(
        `Booking confirmed!\n\n` +
        `Bus: ${busName}\n` +
        `Route: ${route}\n` +
        `Travel Date: ${travelDate}\n` +
        `Seat: ${seat}\n` +
        `Price: ${price}`
    );
}