// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/data');
        const data = await response.json();
        updateList(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to update the item list and total price
function updateList(data) {
    const itemList = document.getElementById('item-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear the current list
    itemList.innerHTML = '';

    // Iterate through the data and add each item to the list
    data.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
            <div>
                <span class="d-block font-weight-bold">${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
            </div>
            <span class="text-center">₹${item.price.toFixed(2)}</span>
            <span class="badge badge-primary badge-pill">₹${(item.quantity * item.price).toFixed(2)}</span>
        `;
        itemList.appendChild(li);

        // Calculate total price
        totalPrice += item.quantity * item.price;
    });

    // Update the total price
    totalPriceElement.innerText = totalPrice.toFixed(2);
}


// Fetch data every 500ms
setInterval(fetchData, 500);
