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
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateAdminTable();
});

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

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
