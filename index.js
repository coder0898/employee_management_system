// Modal
const NewEmployeeButton = document.getElementById("newEmpBtn");
const ModalContainer = document.getElementById("modalContainer");
const CloseButton = document.getElementById("closeBtn");

// Form inputs
const EmployeeName = document.getElementById("empName");
const EmployeeAge = document.getElementById("empAge");
const EmployeeEmail = document.getElementById("empEmail");
const EmployeeContact = document.getElementById("empContact");
const EmployeeDepartment = document.getElementById("empDepartment");
const EmployeePosition = document.getElementById("empPosition");

// Form control
const ResetButton = document.getElementById("resetBtn");
const SubmitButton = document.getElementById("submitBtn");

// Table
const DataTable = document.getElementById("dataTable");

// LocalStorage key for employee data
const STORAGE_KEY = "tableList";

// Retrieve stored table list from localStorage or initialize as an empty array
let TableList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Employee details object
let EmployeeDetails = {
  fullname: "",
  age: "",
  email: "",
  contact: "",
  dept: "",
  position: "",
};

// Validate and submit employee details
function SubmitEmployeeDetails() {
  // Input validation
  if (!EmployeeName.value) {
    alert("Please enter employee name");
    return;
  } else if (isNaN(EmployeeAge.value) || !EmployeeAge.value) {
    alert("Please enter a valid employee age");
    return;
  } else if (!EmployeeEmail.value || !EmployeeEmail.value.includes("@")) {
    alert("Please enter a valid employee email");
    return;
  } else if (isNaN(EmployeeContact.value) || !EmployeeContact.value) {
    alert("Please enter a valid employee contact");
    return;
  } else if (!EmployeeDepartment.value) {
    alert("Please enter employee department");
    return;
  } else if (!EmployeePosition.value) {
    alert("Please enter employee position");
    return;
  }

  // Set the employee details object
  EmployeeDetails = {
    fullname: EmployeeName.value,
    age: EmployeeAge.value,
    email: EmployeeEmail.value,
    contact: EmployeeContact.value,
    dept: EmployeeDepartment.value,
    position: EmployeePosition.value,
  };

  // Check if the employee already exists in the table list (based on email or contact)
  const existingEmployee = TableList.find(
    (employee) => employee.email === EmployeeDetails.email
  );

  if (existingEmployee) {
    alert("This employee already exists in the list.");
    return;
  }

  // Add new employee data to the table list and store in localStorage
  TableList.push(EmployeeDetails);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(TableList));

  alert("Employee data added successfully");

  ResetForm();
  closeModal();
}

// Reset the form fields
function ResetForm() {
  EmployeeName.value = "";
  EmployeeAge.value = "";
  EmployeeEmail.value = "";
  EmployeeContact.value = "";
  EmployeeDepartment.value = "";
  EmployeePosition.value = "";
}

// Show modal to add a new employee
function showModal() {
  ModalContainer.classList.remove("out");
  ModalContainer.classList.add("newEmpBtn");
  document.body.classList.add("modal-active");
}

// Close the modal
function closeModal() {
  ModalContainer.classList.add("out");
  document.body.classList.remove("modal-active");
}

// Event listeners for form actions
SubmitButton.addEventListener("click", SubmitEmployeeDetails);
ResetButton.addEventListener("click", ResetForm);
NewEmployeeButton.addEventListener("click", showModal);
CloseButton.addEventListener("click", closeModal);

window.addEventListener("DOMContentLoaded", () => {
  // Check if TableList is empty
  if (TableList.length === 0) {
    DataTable.innerHTML = `<tr><td colspan="6">No data</td></tr>`;
  } else {
    DisplayList();
  }
});

// Display data in table functionality
function DisplayList() {
  // Clear the table first
  DataTable.innerHTML = "";

  // Iterate through TableList using forEach
  TableList.forEach((list, index) => {
    const { fullname, email, dept, position } = list;

    // Set the row ID
    let id = index + 1;

    // Append a new row to the DataTable with the employee data
    DataTable.innerHTML += `<tr>
      <td>${id}</td>
      <td>${fullname}</td>
      <td>${email}</td>
      <td>${dept.toUpperCase()}</td>
      <td>${position.toUpperCase()}</td>
      <td>
        <div class="action-group">
          <button id="editBtn" data-id="${id}"><i class="fa-solid fa-pen-to-square"></i><span class="tooltiptext">Edit Button</span></button>
          <button id="viewBtn" data-id="${id}"><i class="fa-solid fa-eye"></i><span class="tooltiptext">View Button</span></button>
        </div>
      </td>
    </tr>`;
  });
}
