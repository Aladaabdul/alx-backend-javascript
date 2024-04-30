export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudent = students.filter((student) => student.location === city);

  return filteredStudent.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

	  student.grade = studentGrade ? studentGrade.grade : 'N/A';

	  return student;
  });
}
