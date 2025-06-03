var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance <= 0 || ((this.balance - amount) < 0)) {
            return;
        }
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(100);
account.withdraw(101);
console.log(account.getBalance());
var account2 = new BankAccount(20);
account2.withdraw(20);
console.log(account2.getBalance());
