function showConfirmation(busName, route, seat, price) {
    const confirmationMessage =
        `Booking confirmed!\n\n` +
        `Bus: ${busName}\n` +
        `Route: ${route}\n` +
        `Seat: ${seat}\n` +
        `Price: ${price}`;

    alert(confirmationMessage);
}