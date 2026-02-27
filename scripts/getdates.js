// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Output the last modified date of the document
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;
