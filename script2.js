let student = {
    name: "Tom",
    age: 20,
    isAdmin: false,
    courses: [
        {
        title: "HTML",
        teacher: "Serhii Ruban",
        semester: 4
    },
    {
        title: "JS",
        teacher: "Vadym Kharlamenko",
        semester: 5
    }
]
}
let studentStr = JSON.stringify(student);
document.write(studentStr);
let stud2 = JSON.parse(studentStr);
let coursesInfo = stud2.courses.map(elem=>{return {title: elem.title, semester: elem.semester};});
console.log(coursesInfo);