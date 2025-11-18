// Aseta tavoitepäivämäärä ja -kellonaika tähän (VVVV, KK-1, PP, HH, MM, SS)
// Esimerkki: 1. tammikuuta 2026 kello 14:45:00
const targetDate = new Date("Mar 1, 2026 14:45:00").getTime(); 

const countdownElement = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date().getTime();
    
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownHTML = `
        <div class="time-box">
            <span class="time-value">${days}</span>
            <span class="time-label">Päivää</span>
        </div>
        <div class="time-box">
            <span class="time-value">${hours}</span>
            <span class="time-label">Tuntia</span>
        </div>
        <div class="time-box">
            <span class="time-value">${minutes}</span>
            <span class="time-label">Minuuttia</span>
        </div>
        <div class="time-box">
            <span class="time-value">${seconds}</span>
            <span class="time-label">Sekuntia</span>
        </div>
    `;

    countdownElement.innerHTML = countdownHTML;

    if (distance < 0) {
        clearInterval(interval); 
        countdownElement.innerHTML = "<h2>Loma!!</h2>";
    }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
