namespace Subjects {
    export interface Teacher{
        experienceTeachingJava?: number;
    }
}
export class Java extends Subject {
    getRrequirements(): string {
        return `Here is the list of requirements for Java`;
    }
    getAvailableTeacher(): string {
        if(this.teacher.experienceTeachingC) { return `Available Teacher: ${this.teacher.firstName}`; }
        else { return `No available teacher`; }
    }

}