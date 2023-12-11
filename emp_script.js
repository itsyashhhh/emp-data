function calculateAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

function calculateExperience(joiningDateString) {
  const today = new Date();
  const joiningDate = new Date(joiningDateString);
  let experience = today.getFullYear() - joiningDate.getFullYear();
  const monthDiff = today.getMonth() - joiningDate.getMonth();
  


  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < joiningDate.getDate())) {
    experience--;
  }
  
  return experience;
}

function addEmployee() {
  const name = document.getElementById('name').value;
  const employeeID = document.getElementById('employeeID').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const designation = document.getElementById('designation').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const joiningDate = document.getElementById('joiningDate').value;
  const adarnumber = document.getElementById('AdarNumber').value;
  const salary = document.getElementById('salary').value;

  const age = calculateAge(dob);

  const experience = calculateExperience(joiningDate);
  
  const tableBody = document.getElementById('employeeTableBody');
  const newRow = tableBody.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  const cell9 = newRow.insertCell(8);
  const cell10 = newRow.insertCell(9);
  const cell11 = newRow.insertCell(10);
  const cell12 = newRow.insertCell(11);

  cell1.innerHTML = name;
  cell2.innerHTML = employeeID;
  cell3.innerHTML = dob;
  cell4.innerHTML = age;
  cell5.innerHTML = gender;
  cell6.innerHTML = designation;
  cell7.innerHTML = phone;
  cell8.innerHTML = address;
  cell9.innerHTML = joiningDate;
  cell10.innerHTML = adarnumber;
  cell11.innerHTML = experience+" Years";
  cell12.innerHTML = salary;

  document.getElementById('name').value = '';
  document.getElementById('employeeID').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('designation').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('joiningDate').value = '';
  document.getElementById('adarnumber').value = '';
  document.getElementById('salary').value = '';


  sortTable();
}

function sortTable() {
  const table = document.getElementById('employeeTable');
  const rows = table.rows;
  let switching = true;

  while (switching) {
    switching = false;
    for (let i = 1; i < rows.length - 1; i++) {
      let shouldSwitch = false;
      const currentSalary = parseFloat(rows[i].getElementsByTagName('td')[10].innerText);
      const nextSalary = parseFloat(rows[i + 1].getElementsByTagName('td')[10].innerText);

      if (currentSalary < nextSalary) {
        shouldSwitch = true;
        break;
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}