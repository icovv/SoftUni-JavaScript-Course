class User{
    private _username!:string;

    constructor(username:string){
        this.username = username;
    }

    get username(){
        return this._username;
    }

    set username(newUsername: string) {
        if(newUsername.length < 3){
            throw new Error();
        }
        this._username = newUsername;
    }
}

const user = new User("Martin");

user.username = "johnDoe";

console.log(user.username);

const user2 = new User("jo");

const user3 = new User("Martin");

user.username = "Do";