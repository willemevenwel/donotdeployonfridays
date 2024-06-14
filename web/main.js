function startCountdown(seconds, url) {
    const intervalId = setInterval(() => {
        seconds--;
        const countdownElement = document.getElementById('medium');
        countdownElement.textContent = "Medium Blog Link, navigating to it in: " + seconds + " seconds...";

        // Check if countdown has ended
        if (seconds <= 0) {
            clearInterval(intervalId);
            window.location.href = url; // Redirect to the specified URL
        }
    }, 1000);
}

// Start the countdown
startCountdown(5, 'https://medium.com/@willemevenwelnl'); 