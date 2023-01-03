interface Teacher {
    firstName: string;
    lastName: string;
    FullTimeEmployee: boolean;
    yearsOfExperience?:  number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunc {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunc = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
// By using this language feature, you can create more
//composable objects that don’t rely on inheritance to share code.
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
    firstName: string;
    lastName: string;
}
interface Studentclass{
    new(firstName: string, lastName: string): StudentClassInterface;
}
export class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework():string {
        return `Currently working`;
    }
    displayName(): string {
        return this.firstName;
    }

}


