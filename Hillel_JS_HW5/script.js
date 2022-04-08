const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9],
  },
];

averageStudentMark(students[2]);
averageGroupMark(students);

// выведет средний бал студента, который передан в аргументе

function averageStudentMark(student) {
  let averageMark = 0;
  const currentAveStudMark = student.marks.reduce((acc, mark) => {
    return acc + mark;
  });
  return currentAveStudMark / student.marks.length;
}

// сумма всех оценок

function sumAllMarks(students) {
  const allMarks = [];
  const sumAllMarks = students.map((val) => {
    return allMarks.push(val.marks);
  });
  return allMarks.flat();
}

//выведет средний бал по всем студентам

function averageGroupMark(students) {
  const allMarks = sumAllMarks(students);
  const averageGroupMark = allMarks.reduce((acc, val) => {
    return acc + val;
  });
  return averageGroupMark / allMarks.length;
}
