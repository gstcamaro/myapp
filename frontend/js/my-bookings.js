// my-bookings.js
//
// Renders the list of bookings on my-bookings.html and lets the
// user cancel a booking. Use rooms.js as your reference.

async function renderBookings() {
  const container = document.getElementById("bookings-list");

  // TODO:
  // 1. Call getBookings() from api.js
  // 2. If there are no bookings, show a friendly message
  // 3. Otherwise, build one .booking-item div per booking, each with:
  //    - room name / id, club name, date, start-end time, purpose
  //    - a "Cancel" button with a data-id attribute set to the booking id
  // 4. Set container.innerHTML to the joined HTML
  // 5. Attach click listeners to each "Cancel" button that call
  //    handleCancelClick(bookingId)

  const bookings = MOCK_BOOKINGS;

  if (bookings.length === 0) {
    container.innerHTML = "<p>You have no current bookings.</p>";
    return;
  }

  container.innerHTML = bookings.map((booking) => `
    <div class="booking-item">
      <h3>${booking.roomId}</h3>
      <p><strong>Club:</strong> ${booking.clubName}</p>
      <p><strong>Date:</strong> ${booking.date}</p>
      <p><strong>Time:</strong> ${booking.startTime} - ${booking.endTime}</p>
      <p><strong>Purpose:</strong> ${booking.purpose}</p>
      <button data-id="${booking.id}">Cancel</button>
    </div>
  `).join("");

  container.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", () => {
      handleCancelClick(button.dataset.id);
    });
  });
}

async function handleCancelClick(bookingId) {
  // TODO:
  // 1. Call deleteBooking(bookingId) from api.js
  // 2. Re-render the bookings list (call renderBookings() again)
  MOCK_BOOKINGS = MOCK_BOOKINGS.filter((booking) => booking.id !== bookingId);
  await renderBookings();
}

document.addEventListener("DOMContentLoaded", renderBookings);
