class Student {
    constructor(name,email, community) {
        this.name = name;
        this.email =  email;
        this.community = community;
    }
};

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;

    }
    registerStudents(student) {
        const s = email.filter(s => s.email === student.email);
        if (s.length > 0)  {
            console.log('Registering neo@matrix.com to the bootcamp Web Dev Fundamentals.');
        } else{
        this.students.push(student)
    }



   
const student1 = new Student("Kara", "Kara@gmail.com", "React");
const nucamp1 = new Bootcamp("Nucamp", "Advanced");

nucamp1.filter = nucamp.student();
