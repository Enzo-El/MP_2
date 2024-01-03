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
  const userForm = document.getElementById('userForm');

  userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Generate Case No.
    const caseNo = generateCaseNo();

    // Get user input
    const completeName = document.getElementById('completeName').value;
    const residence = document.getElementById('residence').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const blotter = document.getElementById('blotter').value;
    const narrative = document.getElementById('narrative').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const incidentPicture = document.getElementById('incidentPicture');

    if (incidentPicture.files.length > 0) {
      const photo = URL.createObjectURL(incidentPicture.files[0]);
    } else {
      alert("Please upload a photo before submitting.");
    }

    // Update local storage
    const userData = { caseNo, completeName, residence, email, phone, blotter, narrative, incidentDate, incidentPicture, status: 'Pending' };
    localStorage.setItem(caseNo, JSON.stringify(userData));

    // Update index.html table
    updateIndexTable();

    // Update admin.html table
    updateAdminTable();

    // Reset form
    userForm.reset();

    // Redirect to index.html
    window.location.href = "userPage.html";
  });
});

function generateCaseNo() {
    // Retrieve the current case number from localStorage
    let currentCaseNo = parseInt(localStorage.getItem("currentCaseNo")) || 0;

    // Increment the case number for the new entry
    currentCaseNo += 1;

    // Save the updated case number to localStorage
    localStorage.setItem("currentCaseNo", currentCaseNo);

    // Return the generated case number
    return "Case No. " + currentCaseNo;
}

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

function updateAdminTable() {
  const adminTableBody = document.getElementById('adminTableBody');
  adminTableBody.innerHTML = '';

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
        <td>
          <select onchange="updateStatus(this.value, '${userData.caseNo}')">
            <option value="Pending" ${userData.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="For Verification" ${userData.status === 'For Verification' ? 'selected' : ''}>For Verification</option>
            <option value="Under Investigation" ${userData.status === 'Under Investigation' ? 'selected' : ''}>Under Investigation</option>
            <option value="For Mediation" ${userData.status === 'For Mediation' ? 'selected' : ''}>For Mediation</option>
            <option value="Resolved" ${userData.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
          </select>
        </td>
      `;
      adminTableBody.appendChild(row);
  }
}

function updateStatus(newStatus, caseNo) {
  const userData = JSON.parse(localStorage.getItem(caseNo));
  userData.status = newStatus;
  localStorage.setItem(caseNo, JSON.stringify(userData));

  // Update index.html table
  updateIndexTable();
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}