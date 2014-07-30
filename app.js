var prop, string;

prop = {
    title: "Shadow of the Colossus",
    developer: "Sony Japan",
    publisher: "SCEA",
    platform: "Playstation 2",
    players: 1,
    online_access: false,
    released: 2005,
    esrb_rating: "T"
};

string = JSON.stringify(prop);
megaParse(string);