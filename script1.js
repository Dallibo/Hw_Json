let user = {
    name: "Serhii",
    age: 42,
    house: null,
    isAdmin: false,
    sayHi: function(){
        alert("Hello!");
    },
    toString(){
        return `Name: ${this.name}, courses: ${this.courses}`;
    },
    courses: ['HTML', `CSS`, "JS"]
}
let serializedUser = JSON.stringify(user);
console.log(typeof serializedUser);
// alert(serializedUser);
document.write(serializedUser);
let userText = user.toString();
alert(userText);
document.write(`<br>${user}`);
let deserializedUser = JSON.parse(serializedUser);
console.log(deserializedUser);
console.log(deserializedUser.courses);
console.log(`Name: ${deserializedUser.name}, courses: ${deserializedUser.courses}`);