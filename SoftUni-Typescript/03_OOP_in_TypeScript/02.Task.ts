class BankAccount{
    private balance: number;
    
    constructor(balance:number){
        this.balance = balance;
    }

    public deposit(amount:number):void{
        this.balance += amount;
    }

    public withdraw(amount:number):void{
        if(this.balance <= 0 || ((this.balance - amount) < 0)){
            return
        }

        this.balance -= amount;
    }

    public getBalance():number{
        return this.balance;
    }
}

const account = new BankAccount(100);

account.withdraw(101);

console.log(account.getBalance());


const account2 = new BankAccount(20);

account2.withdraw(20);

console.log(account2.getBalance());