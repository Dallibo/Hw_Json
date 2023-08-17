let str = "[         1, 5, 8]";
let arr = JSON.parse(str);
console.log(arr);
console.log(arr[1]);
let str2 = `[{"name":     "Serhii Ruban", "age": 42, "isAdmin": true}, 
    {"name": "Tom Snider", "age": 41, "isAdmin": false}]`;
let arr2 = JSON.parse(str2);
console.log(arr2);
console.log(arr2[0].name);
let str3 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let obj = JSON.parse(str3);
console.log(obj.date);
console.log(typeof obj.date);
let obj2 = JSON.parse(str3, (key, value)=>{
    if(key==="date")
    return new Date(value);
    return value;
});
console.log(obj2.date);
console.log(typeof obj2.date)
console.log(obj2.date.getDate());