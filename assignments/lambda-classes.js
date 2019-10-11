// CODE here for your Lambda Classes

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructor){
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }

    score(student, subject){
        let scorePoints = getRandomInt(0,101); // point difference
        let plusMinus = getRandomInt(0,2); // 0 means they add on points, 1 means they lose points 

        if ((plusMinus === 1) && (student.grade < scorePoints)){
            student.grade = 0;
            return `${student.name} lost points on their ${subject} assignment and got a zero!`;
        }
        else if ((plusMinus === 0) && (student.grade + scorePoints >= 100)){
            student.grade = 100;
            return `${student.name} got a perfect 100 on their ${subject} assignment after grading!`;
        }
        else if (plusMinus === 1){
            student.grade -= scorePoints;
            return `${student.name} lost ${scorePoints} on their ${subject} assignment after grading. ${student.name}'s grade is now ${student.grade}.`;
        }
        else{
            student.grade += scorePoints;
            return `${student.name} gained ${scorePoints} on their ${subject} assignment after grading. ${student.name}'s grade is now ${student.grade}. Nice!`
        }
    }
}

class Student extends Instructor{
    constructor(student){
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.grade = student.grade;
    }

    listsSubjects(){
        for (i=0; i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup times!​​​​​`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`

    }

    graduate(student){
        if (student.grade >= 70){
            return `Congratulations, ${student.name} has graduated Lambda School with a grade of ${student.grade}/100 .`;
        }
        else{
            return `Uh oh, time to go back to the drawing board ${student.name}. You did not graduate with a grade of ${student.grade}/100 .`;
        }
    }
}

// Test Objects 
const christine = new Student({
    name: 'Christine',
    location: 'San Francisco',
    age: 99,
    favLanguage: 'English',
    specialty: 'slacking',
    catchPhrase: `Work harder, not smarter!`,
    previousBackground: "Google",
    className: "WebPT11",
    favSubjects: ['Math', 'Reading', 'Drawing'],
    grade: getRandomInt(0,101)
  });

const noel = new Instructor({
name: 'Noel',
location: 'Omaha',
age: 29,
favLanguage: 'R',
specialty: 'Back-end',
catchPhrase: `Bros before...other ladies`
});

const fred = new ProjectManager({
    name: 'Fred',
    location: 'Cincinnati',
    age: 20,
    favLanguage: 'C++',
    specialty: 'Front-end',
    catchPhrase: `Oops I did it again`,
    gradClassName: "WEB2",
    favInstructor: "Frank Martinez"
  });


console.log(christine.listsSubjects());
console.log(christine.PRAssignment("Javascript-IV"));
console.log(christine.sprintChallenge("Python-I"));

console.log(noel.demo("Python-I"));
console.log(noel.grade(christine,"Python-I"));

console.log(fred.standUp("WEBPT11"));
console.log(fred.debugsCode(christine,"Ruby-I"));

console.log(noel.score(christine,"Python-II"));
console.log(fred.graduate(christine));