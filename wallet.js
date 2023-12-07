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
        const deletedTransactions = this.transactions.filter(amount => amount < 0);
        const total = deletedTransactions.reduce((total, amount) => total + amount, 0);
        return Math.abs(total); // Obtient la valeur absolue du total des dépenses
    }
}

// Exemple d'utilisation de la classe Wallet

// Création d'une instance de Wallet
const myWallet = new Wallet();

// Ajout de quelques transactions
myWallet.addTransaction(1000);
myWallet.addTransaction(1500);
myWallet.addTransaction(150);

// Affichage du solde actuel
console.log("Balance:", myWallet.getBalance());

// Affichage de l'historique des transactions
console.log("Transaction History:", myWallet.getTransactionHistory());

// Suppression de quelques transactions
myWallet.deleteTransaction(-150);
myWallet.deleteTransaction(0);
myWallet.deleteTransaction(0);

// Affichage du total des dépenses
console.log("Total Expenses:", myWallet.getTotalExpenses());

// Affichage du solde mis à jour après suppression
console.log("Balance after deletion:", myWallet.getBalance());

// Affichage de l'historique mis à jour des transactions
console.log("Transaction History:", myWallet.getTransactionHistory());


