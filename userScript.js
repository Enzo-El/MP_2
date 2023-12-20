//  Student Name: Iverson Craig Gonzales Guno
//  Student Name: Roy Icaranom Manaog
//  Student Name: Lorenzo Laurel Reyes
//  Class Batch: WD92P (ZetoRo)
//  MP2 Group No.: Group 3 KonohaGakure
//  Schedule: 7:00pm to 10:00pm
//  Instructor: Ma'am Jamie Delina
//  Coordinator: Sir Ben De Leon

// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

var userName = localStorage.getItem("name");
document.getElementById("UsersName").textContent =
  capitalizeFirstLetter(userName) + "!";

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
