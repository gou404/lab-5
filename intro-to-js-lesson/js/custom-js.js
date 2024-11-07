// 1. Send a welcome message to the console
console.log("Welcome to our web application!");

// 2. Add a new row of content to the main element
document.addEventListener("DOMContentLoaded", function() {
    // Create a new div element to act as the row
    const newRow = document.createElement("div");
    newRow.classList.add("new-row");

    // 3. The new row of content should contain an h element, a new paragraph, and an image
    const heading = document.createElement("h2");
    heading.textContent = "Welcome to the New Section";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph added to the main element.";

    const image = document.createElement("img");
    image.src = "https://via.placeholder.com/150";
    image.alt = "Placeholder Image";

    // Append the heading, paragraph, and image to the new row
    newRow.appendChild(heading);
    newRow.appendChild(paragraph);
    newRow.appendChild(image);

    // Append the new row to the main element
    const mainElement = document.querySelector("main");
    if (mainElement) {
        mainElement.appendChild(newRow);
    } else {
        console.error("Main element not found");
    }

    // 4. Add some styling to the new content using JavaScript
    newRow.style.border = "2px solid #000";
    newRow.style.padding = "10px";
    newRow.style.margin = "10px 0";
    newRow.style.backgroundColor = "#f9f9f9";

    heading.style.color = "#333";
    paragraph.style.fontSize = "16px";
    image.style.display = "block";
    image.style.marginTop = "10px";
});