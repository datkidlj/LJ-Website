document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        addUser(name, email, phone);
        userForm.reset();
    });

    function addUser(name, email, phone) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td><button class="action-button" onclick="deleteUser(this)">Delete</button></td>
        `;

        userList.appendChild(row);
    }
});

function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
