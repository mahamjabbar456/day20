// Question 58
function AverageGrade(...g) {
    let average = g.reduce((total, grade) => total + grade, 0) / g.length;
    return average;
}
console.log(AverageGrade(90, 95, 85, 65, 100, 55, 70, 75, 60, 50, 45));
// Question 59
function makeAdder(ValuetoAdd) {
    return function (number) {
        return ValuetoAdd + number;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));

// Question 60
let User1 = {
    name: "Maham",
    age: 45
};
console.log(`First User Profile is \n User name is ${User1.name} \n User age is ${User1.age}`);
export {};
