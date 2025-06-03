var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (newUsername) {
            if (newUsername.length < 3) {
                throw new Error();
            }
            this._username = newUsername;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
var user2 = new User("jo");
var user3 = new User("Martin");
user.username = "Do";
