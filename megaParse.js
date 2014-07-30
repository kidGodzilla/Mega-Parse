var megaParse;

megaParse = function(s) {
    var key, obj, value;
    obj = JSON.parse(s);
    console.log("Length: " + Object.keys(obj).length);
    for (key in obj) {
        value = obj[key];
        console.log("The name " + key + " has the value of " + obj[key]);
    }
    return obj;
};