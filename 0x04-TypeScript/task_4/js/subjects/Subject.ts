// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    private _teacher: Teacher | null = null;

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    get teacher(): Teacher | null {
      return this._teacher;
    }
  }
}
