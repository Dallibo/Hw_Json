let room = {
    number: 345,
    toJSON(){
        return this.number;
    }
}
let meetup = {
    title: "COnference",
    date: new Date(Date.UTC(2023, 7, 14)),
    room
}
let meetupStr = JSON.stringify(meetup);
alert(meetupStr);