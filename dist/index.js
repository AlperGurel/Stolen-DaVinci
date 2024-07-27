var characters = ":#><`$|{[]}@.,;!^+&/()=?_%-* ~abcdefghijklmnopqrstwyzuvxUABCDEFGHIJKLMNOQPRSTWXVYZ1234567890'";
var cipher = function (text, key) {
    var last = "";
    var i = 0;
    for (var _i = 0, _a = text.split(""); _i < _a.length; _i++) {
        var character = _a[_i];
        if (i >= key.length) {
            i = 0;
        }
        if (characters.indexOf(character) + character.indexOf(key.split[i]) + 1 >= characters.length) {
            last = last + characters[characters.indexOf(character) + characters.indexOf(key.split[i]) - characters.length];
        }
        else {
            last = last + characters[characters.indexOf(character) + characters.indexOf(key.split[i])];
        }
    }
    return last;
};
var decipher = function (text, key) {
    var last = "";
    var i = 0;
    for (var _i = 0, _a = text.split(""); _i < _a.length; _i++) {
        var character = _a[_i];
        if (i >= key.length) {
            i = 0;
        }
        if (characters.indexOf(character) - character.indexOf(key.split[i]) + 1 < 0) {
            last = last + characters[characters.indexOf(character) - characters.indexOf(key.split[i]) + characters.length];
        }
        else {
            last = last + characters[characters.indexOf(character) - characters.indexOf(key.split[i])];
        }
    }
    return last;
};
console.log(cipher("hello world!", "alper"));
console.log(decipher("gdkkn*tnqkc;", "alper"));
