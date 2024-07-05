// main.ts

// Interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the class
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Class definition
class Student implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(data: StudentConstructor) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Testing the class
const student1 = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName());   // Output: John

export { Student, StudentConstructor, StudentClass }; // Exporting for testing purposes
