function toggleRSVP() {
    const form = document.getElementById('rsvp-form');
    form.classList.toggle('hidden');
}

document.getElementById('rsvp').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    alert(`Thank you, ${name}! Your RSVP has been received. Attendance: ${attendance}`);
    this.reset();
    toggleRSVP();
});