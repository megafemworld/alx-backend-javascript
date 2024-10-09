import getListStudents from "./0-get_list_students.js";

test("getListStudents is implemented correctly", () => {
  expect(getListStudents()).toEqual([
    { firstName: "Guillaume", id: 1, location: 'San Francisco' },
    { firstName: "James", id: 2, location: 'Columbia' },
    { firstName: "Serena", id: 5, location: 'San Francisco' }
  ]);
});

