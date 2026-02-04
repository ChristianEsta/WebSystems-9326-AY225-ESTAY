// PAGE SWITCH
function showPage(id) {
  document.querySelectorAll("section")
    .forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// HOME
document.getElementById("welcome").textContent =
  "Welcome to the College of Computer Studies";

// ACCORDION
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});

// PROGRAMS
function showProgram(id) {
  document.querySelectorAll(".program")
    .forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// FACULTY FILTER
const faculty = [
  { name: "Dr. Maria Cruz", field: "Programming" },
  { name: "Prof. Juan Santos", field: "Networking" },
  { name: "Engr. Ana Reyes", field: "Web Development" },
  { name: "Prof. Leo Mendoza", field: "Database Systems" }
];

const facultyList = document.getElementById("facultyList");
const search = document.getElementById("search");

function renderFaculty(data) {
  facultyList.innerHTML = data.map(f =>
    `<li><strong>${f.name}</strong> – ${f.field}</li>`
  ).join("");
}

search.addEventListener("input", e => {
  renderFaculty(
    faculty.filter(f =>
      f.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
});

renderFaculty(faculty);

// ANNOUNCEMENTS (LocalStorage)
const events = JSON.parse(localStorage.getItem("events")) || [
  "CCS Orientation Program",
  "IT Week Celebration",
  "Student Hackathon 2026",
  "Faculty Development Seminar"
];

localStorage.setItem("events", JSON.stringify(events));

const eventList = document.getElementById("eventList");
events.forEach(e => {
  const li = document.createElement("li");
  li.textContent = e;
  eventList.appendChild(li);
});

// CONTACT FORM
document.getElementById("contactForm")
  .addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please complete all fields.");
      return;
    }

    alert("Thank you! Your inquiry has been submitted.");
    e.target.reset();
});
