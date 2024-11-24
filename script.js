document.getElementById("searchHotels").addEventListener("click", function () {
    const location = document.getElementById("location").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!location || !checkin || !checkout) {
        alert("Please fill out all fields!");
        return;
    }

    // Simulate hotel search results
    const hotelList = [
        { id: 1, name: "Hotel Sunshine", location: "ooty", price_per_night: 2 },
        { id: 2, name: "Lakeview Inn", location: "kodaikanal", price_per_night: 1500 },
        { id: 3, name: "Tea Valley Resort", location: "munnar", price_per_night: 2500 },
    ];

    // Filter hotels based on location
    const availableHotels = hotelList.filter(hotel => hotel.location === location);

    if (availableHotels.length === 0) {
        alert("No hotels available for the selected location!");
        return;
    }

    // Display hotels in the results section
    const hotelListElement = document.getElementById("hotelList");
    hotelListElement.innerHTML = ""; // Clear previous results
    availableHotels.forEach(hotel => {
        const listItem = document.createElement("li");
        listItem.textContent = `${hotel.name} - ₹${hotel.price_per_night}/night`;
        hotelListElement.appendChild(listItem);
    });

    // Show the results section
    document.getElementById("results").style.display = "block";
});

document.getElementById("payNow").addEventListener("click", function () {
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (paymentMethod === "gpay") {
        const upiId = "ganesh442006@okicici"; // Replace with your UPI ID
        const amount = 2000; // Replace with dynamically calculated amount if needed
        const transactionNote = "Hotel Booking Payment";

        // Construct UPI link
        const upiLink = `upi://pay?pa=${upiId}&pn=HotelBooking&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

        // Redirect to the UPI payment app (Google Pay, PhonePe, etc.)
        window.location.href = upiLink;
    } else {
        alert("Currently, only Google Pay is supported for payment in this demo.");
    }
});
