// employee

class Employee {
  constructor(
    firstName = 'John',
    lastName = 'Doe',
    designation = 'Trainee',
    dateOfJoining = null,
    salary = 0,
    email,
    mobile
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.designation = designation;
    this.dateOfJoining = dateOfJoining;
    this.salary = salary;
    this.email = email;
    this.mobile = mobile;
  }
}

var employees = [];

function addEmployee() {
  let firstName = document.querySelector('#first-name').value;
  let lastName = document.querySelector('#last-name').value;
  let designation = document.querySelector('#designation').value;
  let dateOfJoining = document.querySelector('#date-of-joining').value;
  let salary = document.querySelector('#salary').value;
  let email = document.querySelector('#email').value;
  let mobile = document.querySelector('#mobile').value;

  const emp = new Employee(
    firstName,
    lastName,
    designation,
    dateOfJoining,
    salary,
    email,
    mobile
  );

  employees.push(emp);
}

function showEmployee() {
  var view = document.querySelector('#view');
  var eTable = '';
  var i = 0,
    j = 0;
  for (let employee of employees) {
    eTable += `<table>
      <caption>Employee #${++i}</caption>
      <tr>
        <th>Full Name</th>
        <td>${employee.firstName + ' ' + employee.lastName}</td>
      </tr>
      <tr>
        <th>Designation</th>
        <td>${employee.designation}</td>
      </tr>
      <tr>
        <th>Date of Joining</th>
        <td>${employee.dateOfJoining}</td>
      </tr>
      <tr>
        <th>Salary</th>
        <td>${employee.salary}</td>
      </tr>
        <th>Email</th>
        <td>${employee.email}</td>
      </tr>
      <tr>
        <th>Mobile</th>
        <td>${employee.mobile}</td>
      </tr>
      `;
  }

  view.innerHTML = eTable;
}
