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
  if (typeof city !== 'string') {
    return [];
  }
  if (!getListStudents.every((student) => typeof student.id === 'number' && typeof student.firstName === 'string' && typeof student.location === 'string')) {
    return [];
  }
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (() => {
        const grades = newGrades.filter((grade) => grade.studentId === student.id);
        if (grades.length) {
          return grades[0].grade;
        }
        return 'N/A';
      })(),
    }));
}
