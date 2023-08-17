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
let meetupStr = JSON.stringify(meetup, null, 2);
let meetupStr2 = JSON.stringify(meetup, null, 6);
alert(meetupStr);
alert(meetupStr2);