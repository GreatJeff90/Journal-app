// Sample data for entries
const entries = [
    {
        title: "Entry 1",
        content: "This is the content of Entry 1.",
        date: "2023-09-07",
    },
    {
        title: "Entry 2",
        content: "This is the content of Entry 2.",
        date: "2023-09-06",
    },
    // Add more entries as needed
];

// Function to display the entry list
function displayEntryList() {
    const entryList = document.getElementById("entry-list");
    entryList.innerHTML = ""; // Clear existing entries

    entries.forEach((entry, index) => {
        const listItem = document.createElement("div");
        listItem.classList.add("entry-item");
        listItem.textContent = entry.title;

        listItem.addEventListener("click", () => {
            displayEntryDetails(index);
        });

        entryList.appendChild(listItem);
    });
}

// Function to display entry details
function displayEntryDetails(index) {
    const entryDetails = document.getElementById("entry-details");
    entryDetails.innerHTML = ""; // Clear existing details

    const selectedEntry = entries[index];

    const entryHTML = `
        <h2>${selectedEntry.title}</h2>
        <p>Date: ${selectedEntry.date}</p>
        <p>${selectedEntry.content}</p>
    `;

    entryDetails.innerHTML = entryHTML;
}

// Function to handle entry submission
document.getElementById("entry-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const entryTitle = document.getElementById("entry-title").value;
    const entryContent = document.getElementById("entry-content").value;
    const currentDate = new Date();
    const entryDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // Create a new entry object
    const newEntry = {
        title: entryTitle,
        content: entryContent,
        date: entryDate,
    };

    // Add the new entry to the entries array
    entries.push(newEntry);

    // Clear form fields
    document.getElementById("entry-title").value = "";
    document.getElementById("entry-content").value = "";

    // Update the entry list to show the newly added entry
    displayEntryList();
});

// Initial page load
window.onload = () => {
    displayEntryList();
};

