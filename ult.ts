let namePerson: string = "john doe";

console.log(namePerson.toLowerCase()); // john doe
console.log(namePerson.toUpperCase()); // JOHN DOE
console.log(namePerson.replace(/\b\w/g, (l) => l.toUpperCase())); // John Doe
