// main.test.ts

import { Student } from '../main';

describe('Student class', () => {
    it('should return "Currently working" from workOnHomework method', () => {
        const student = new Student({ firstName: 'John', lastName: 'Doe' });
        expect(student.workOnHomework()).toEqual("Currently working");
    });

    it('should return firstName from displayName method', () => {
        const student = new Student({ firstName: 'John', lastName: 'Doe' });
        expect(student.displayName()).toEqual("John");
    });
});
