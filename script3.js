let meetup = {
    title: "JavaScript Annual Conference",
    speakers: [
        {
            name: "Denis Abramov",
            speech: "React Hooks: last advantages"
        },
        {
            name: "Serhii Ruban",
            speech: "WEB31 JS progress"
        }
    ]
}
let room = {
    number: 345
}
meetup.place = room;
room.occupiedBy = meetup;
let meetupStr = JSON.stringify(meetup, ["title", "speakers", "name", "speech", "place", "number"]);
// document.write(meetupStr);
let meetupStr2 = JSON.stringify(meetup, function(key, value){
    console.log(`Key: ${key}, value: ${value}`);
    return key==="occupiedBy" ? undefined : value
});
document.write(meetupStr2);
console.log(room.occupiedBy);