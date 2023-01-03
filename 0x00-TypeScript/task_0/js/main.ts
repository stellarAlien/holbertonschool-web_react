interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'Marty',
    lastName: 'McFly',
    age: 17,
    location: 'Hill Valley', 
};

let student2: Student = {
    firstName: 'Emett',
    lastName: 'Brown',
    age: 65,
    location: 'Hill Valley',
};

let studentsList: Array<Student> = [student1, student2];

let body: HTMLBodyElement = document.getElementsByTagName('body')[0];
//getElementsByClassName needs more throws error
let table: HTMLTableElement = document.createElement("table");
// setting table header
let header: HTMLTableSectionElement = table.createTHead();
let tbody: HTMLTableSectionElement = table.createTBody();

const header_row: HTMLTableRowElement = header.insertRow(0);
let col_1: HTMLTableCellElement = header_row.insertCell(0);
let col_2: HTMLTableCellElement = header_row.insertCell(1);
col_1.innerHTML = "firs name";
col_2.innerHTML = "location";

table.append(header);

// iterating over student records to render them in table
studentsList.forEach(element => {
    let row: HTMLTableRowElement = tbody.insertRow(-1);
    let name_cell: HTMLTableCellElement = row.insertCell(0);
    let location_cell: HTMLTableCellElement = row.insertCell(1);
    name_cell.innerHTML = element.firstName;
    location_cell.innerHTML = element.location;
});

table.append(tbody);
body.append(table);