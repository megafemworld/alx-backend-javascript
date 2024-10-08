/**
 * update the grade of a specific student
 * id: number
 * firstName: string
 * location: string
 * grade: string
 * @param {Array} getListStudents - array of students
 * @param {String} city - city to filter students
 * @param {Array} newGrades - array of grades
 * @returns {Array} - array of students with updated grade
 */

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents) || !Array.isArray(newGrades)) {
    return [];
  }
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: newGrades.filter(grade => grade.studentId === student.id)
      .pop()?.grade || 'N/A',
      }));
}
