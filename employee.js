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

const employee1 = new Employee();

function addEmployee() {
  let firstName = document.querySelector('#first-name').value;
  let lastName = document.querySelector('#last-name').value;
  let designation = document.querySelector('#designation').value;
  let dateOfJoining = document.querySelector('#date-of-joining').value;
  let salary = document.querySelector('#salary').value;
  let email = document.querySelector('#email').value;
  let mobile = document.querySelector('#mobile').value;

  employee1.firstName = firstName;
  employee1.lastName = lastName;
  employee1.designation = designation;
  employee1.dateOfJoining = dateOfJoining;
  employee1.salary = salary;
  employee1.email = email;
  employee1.mobile = mobile;
}

function showEmployee() {
  let view = `<table border="1">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Designation</th>
      <th>Date of Joining</th>
      <th>Salary</th>
      <th>Email</th>
      <th>Mobile</th>
    </tr>
    <tr>
      <td>${employee1.firstName}</td>
      <td>${employee1.lastName}</td>
      <td>${employee1.designation}</td>
      <td>${employee1.dateOfJoining}</td>
      <td>${employee1.salary}</td>
      <td>${employee1.email}</td>
      <td>${employee1.mobile}</td>
    </tr>
</table>`;

  document.querySelector('#view').innerHTML = view;
}
