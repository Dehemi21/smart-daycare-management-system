
/* Smart Daycare Management System */ 

/* Demo Login */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (username !== "" && password !== "") {
            message.textContent = "Login successful! Opening dashboard...";

            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Please enter your username and password.";
        }
    });
}


/* Add Child Records */
const childForm = document.getElementById("childForm");

if (childForm) {
    childForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const childName = document.getElementById("childName").value.trim();
        const childAge = document.getElementById("childAge").value;
        const guardianName = document.getElementById("guardianName").value.trim();
        const guardianContact = document.getElementById("guardianContact").value.trim();

        const childrenTable = document.getElementById("childrenTable");

        if (!childName || !childAge || !guardianName || !guardianContact) {
            alert("Please fill in all fields.");
            return;
        }

        const row = document.createElement("tr");

        const values = [
            childName,
            childAge,
            guardianName,
            guardianContact
        ];

        values.forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        childrenTable.appendChild(row);

        childForm.reset();

        document.getElementById("childMessage").textContent =
            "Child record added successfully!";
    });
}

