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

document.addEventListener('DOMContentLoaded', function () {
  updateIndexTable();
});

function updateIndexTable() {
  const indexTableBody = document.getElementById('indexTableBody');
  indexTableBody.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const userData = JSON.parse(localStorage.getItem(key));
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${userData.caseNo}</td>
      <td>${userData.completeName}</td>
      <td>${userData.residence}</td>
      <td>${userData.email}</td>
      <td>${userData.phone}</td>
      <td>${userData.blotter}</td>
      <td>${userData.narrative}</td>
      <td>${userData.incidentDate}</td>
      <td>${userData.incidentPicture}</td>
      <td>${userData.status}</td>
    `;
    indexTableBody.appendChild(row);
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
