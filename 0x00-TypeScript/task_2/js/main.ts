interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorsTasks(): string;
}

class Director implements DirectorInterface {
    workDirectorTasks(): string {
        return `Getting to director tasks`;
    }
    workFromHome() {
        return `Working from home`;
    }
    getCoffeBreak() {
        return `Getting a coffe Break`;
    }

}
class Teacher implements  TeacherInterface {
    workFromHome() {
        return `Cannot work from home`;
    }
    getCoffeBreak(){
        
        return `Cannot have a break`;
    }
    workDirectorsTasks(){
       return `Getting to work`;
    }

}

function createEmployee(salary: number | string): Teacher | Director {
    if(typeof salary == 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
} 

function isDirector(employee: TeacherInterface | DirectorInterface){
    //comparing directly caused 'no overlap' error
    return (employee as DirectorInterface).workDirectorTasks() !== 'undefined';
}

export function executeWork(employee):void {
    let msg = '';
    if(isDirector(employee)) { msg = employee.workDirectorTasks(); }
    else { msg = employee.workTeacherTasks();}
    console.log(msg);
}

const Subjects = "Math | History";
export function teachClass(todayClass):string {
    if (todayClass == 'Math') { return `Teaching Math`; }
    if( todayClass == 'History' ) { return `Teaching History`;}
    return '';
}