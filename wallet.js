class Wallet {
    constructor() {
        this.balance = 0.0;
        this.transactions = [];
    }

    addTransaction(amount) {
        if (amount >= 0) {
            this.balance += amount;
            this.transactions.push(amount);
            console.log(`Transaction added: ${amount}`);
        } else {
            console.log("Cannot add negative transaction amount.");
        }
    }

    getBalance() {
        return this.balance;
    }

    getTransactionHistory() {
        return this.transactions;
    }

    deleteTransaction(amount) {
        if (amount <= 0) {
            this.balance += amount;
            this.transactions.push(amount);
            console.log(`Transaction deleted: ${amount}`);
        } else {
            console.log("Cannot delete positive transaction amount.");
        }
    }

    getTotalExpenses() {
        let total = 0;
        for (const amount of this.transactions) {
            if (amount < 0) {
                total += amount;
            }
        }
        return Math.abs(total);
    }
}

// Exemple d'utilisation de la classe Wallet
const myWallet = new Wallet();

myWallet.addTransaction(1000);
myWallet.addTransaction(1500);
myWallet.addTransaction(150);

console.log("Balance:", myWallet.getBalance());
console.log("Transaction History:", myWallet.getTransactionHistory());

myWallet.deleteTransaction(-150);
myWallet.deleteTransaction(0);
myWallet.deleteTransaction(0);

console.log("Total Expenses:", myWallet.getTotalExpenses());
console.log("Balance after deletion:", myWallet.getBalance());
console.log("Transaction History:", myWallet.getTransactionHistory());
