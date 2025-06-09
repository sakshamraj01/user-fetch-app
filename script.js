const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = ""; // clear existing data

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'userCard';

        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;

        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p id="errorMsg">Failed to fetch user data: ${error.message}</p>`;
    });
}

// Fetch on load
fetchUserData();

// Reload on button click
reloadBtn.addEventListener('click', fetchUserData);
