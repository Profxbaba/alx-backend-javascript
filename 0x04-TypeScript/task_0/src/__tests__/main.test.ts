// src/__tests__/main.test.ts
import { Student } from '../main';

describe('Student interface', () => {
    it('should create a student object', () => {
        const student: Student = {
            firstName: 'John',
            lastName: 'Doe',
            age: 20,
            location: 'New York'
        };
        expect(student.firstName).toBe('John');
        expect(student.lastName).toBe('Doe');
        expect(student.age).toBe(20);
        expect(student.location).toBe('New York');
    });
});

