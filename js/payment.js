document.addEventListener("DOMContentLoaded", () => {
    // Get the total price from local storage or URL query parameters
    let totalPrice = localStorage.getItem('totalPrice') || new URLSearchParams(window.location.search).get('totalPrice');
    
    // Display the total price on the payment page
    document.getElementById('total-amount').textContent = parseFloat(totalPrice).toFixed(2);

    // Simulate the payment process
    document.getElementById('pay-btn').addEventListener('click', () => {
        // Simulate a payment gateway (you could replace this with an actual gateway integration)
        simulatePayment()
            .then((success) => {
                if (success) {
                    window.location.href = 'paymentsuccess.html';
                } else {
                    window.location.href = 'paymenterror.html';
                }
            });
    });
});

// Function to simulate a payment process (can replace this with real payment gateway)
function simulatePayment() {
    return new Promise((resolve) => {
        // Simulate success or failure after a short delay (for demo purposes)
        setTimeout(() => {
            const paymentSuccess = Math.random() > 0.5; // 50% chance of success
            resolve(paymentSuccess);
        }, 2000);
    });
}
