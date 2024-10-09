interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const st1: Student = {
  firstName: "Ade",
  lastName: "Hassan",
  age: 19,
  location: "Abuja"
};

const st2: Student = {
  firstName: "Edoho",
  lastName: "Ekette",
  age: 25,
  location: "Lagos"
};

const studentsList: Student[] = [st1, st2];

const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  headerRow.insertCell(0).textContent = "First Name";
  headerRow.insertCell(0).textContent = "Location";

  const body = table.createTBody();

  students.forEach(student => {
    const row = body.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.location;
  });

  document.body.appendChild(table);
};

renderTable(studentsList);

