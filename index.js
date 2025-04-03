// form inputs
const EmployeeName = document.getElementById("empName");
const EmployeeAge = document.getElementById("empAge");
const EmployeeEmail = document.getElementById("empEmail");
const EmployeeContact = document.getElementById("empContact");
const EmployeeDepartment = document.getElementById("empDepartment");
const EmployeePosition = document.getElementById("empPosition");

// form control
const ResetButton = document.getElementById("resetBtn");
const SubmitButton = document.getElementById("submitBtn");

let EmployeeDetails = {
  fullname: "",
  age: "",
  email: "",
  contact: "",
  dept: "",
  position: "",
};

function SubmitEmployeeDetails() {
  if (EmployeeName.value == "") {
    console.log("Please enter employee name");
  } else if (isNaN(EmployeeAge.value) || EmployeeAge.value == "") {
    console.log("Please enter employee Age");
  } else if (EmployeeEmail.value == "" || !EmployeeEmail.value.includes("@")) {
    console.log("Please enter employee email in proper");
  } else if (isNaN(EmployeeContact.value) || EmployeeContact.value == "") {
    console.log("Please enter employee contact");
  } else if (EmployeeDepartment.value == "") {
    console.log("Please enter employee department");
  } else if (EmployeePosition.value == "") {
    console.log("Please enter employee position");
  } else {
    EmployeeDetails = {
      fullname: EmployeeName.value,
      age: EmployeeAge.value,
      email: EmployeeEmail.value,
      contact: EmployeeContact.value,
      dept: EmployeeDepartment.value,
      position: EmployeePosition.value,
    };
    console.log(EmployeeDetails);
  }
}

SubmitButton.addEventListener("click", () => {
  SubmitEmployeeDetails();
});

ResetButton.addEventListener("click", () => {
  EmployeeName.value = "";
  EmployeeAge.value = "";
  EmployeeEmail.value = "";
  EmployeeContact.value = "";
  EmployeeDepartment.value = "";
  EmployeePosition.value = "";
});
