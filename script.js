// Swift Fix - Fake Drive Scan and Organizer

// Fake drive files
const fakeDrive = [
  "Vacation.jpg",
  "Taxes2023.pdf",
  "FamilyPhotos.zip",
  "Resume.docx",
  "GroceryList.txt",
  "Song.mp3",
  "SchoolProject.pptx",
  "RecipeCollection.pdf",
  "WorkoutPlan.xlsx"
];

// Function to scan and display files
function scanFiles() {
  const fileList = fakeDrive.map(file => `<li>${file}</li>`).join("");
  document.getElementById("fileResults").innerHTML = `<ul>${fileList}</ul>`;
}

// Function to organize by name
function organizeByName() {
  const sortedDrive = [...fakeDrive].sort();
  const fileList = sortedDrive.map(file => `<li>${file}</li>`).join("");
  document.getElementById("fileResults").innerHTML = `<ul>${fileList}</ul>`;
}

// Function to organize by format
function organizeByFormat() {
  const formats = {};
  fakeDrive.forEach(file => {
    const extension = file.split(".").pop();
    if (!formats[extension]) {
      formats[extension] = [];
    }
    formats[extension].push(file);
  });

  let organizedHTML = "";
  for (const format in formats) {
    organizedHTML += `<h4>.${format} Files</h4><ul>`;
    organizedHTML += formats[format].map(file => `<li>${file}</li>`).join("");
    organizedHTML += `</ul>`;
  }

  document.getElementById("fileResults").innerHTML = organizedHTML;
}
function buttonClicked() {
  alert("Boss Rave runs this world!");
}
