
const employee	={name:"Sara",manager:null};
console.log(employee.manager?.name); // undefined


const settings = {};
const theme = settings.theme ?? "light"; // default light

console.log(theme);

const discount = 0;

const usingOR = discount || 10;
const usingNullish = discount ?? 10;

console.log(usingOR);      // 10
console.log(usingNullish); // 0