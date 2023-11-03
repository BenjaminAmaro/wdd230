document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("visits");
    const storageKey = "lastVisitTimestamp";

    if (localStorage.getItem(storageKey)) {
        const lastVisitTimestamp = parseInt(localStorage.getItem(storageKey));
        const currentTime = Date.now();
        const timeDifference = currentTime - lastVisitTimestamp;
        const oneDayInMilliseconds = 84600000; 
        const daysSinceLastVisit = Math.floor(timeDifference / oneDayInMilliseconds);

        if (daysSinceLastVisit < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            const pluralize = daysSinceLastVisit === 1 ? "day" : "days";
            sidebar.textContent = `You last visited ${daysSinceLastVisit} ${pluralize} ago.`;
        }
    } else {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update the last visit timestamp in local storage
    localStorage.setItem(storageKey, Date.now().toString());
});