import java.util.ArrayList;
import java.util.List;

class Wallet {
    private double balance;
    private List<Double> transactions;

    public Wallet() {
        balance = 0.0;
        transactions = new ArrayList<>();
    }

    public void addTransaction(double amount) {
        if (amount >= 0) {
            balance += amount;
            transactions.add(amount);
            System.out.println("Transaction added: " + amount);
        } else {
            System.out.println("Cannot add negative transaction amount.");
        }
    }

    public double getBalance() {
        return balance;
    }

    public List<Double> getTransactionHistory() {
        return transactions;
    }

    public void deleteTransaction(double amount) {
        if (amount <= 0) {
            balance += amount;
            transactions.add(amount);
            System.out.println("Transaction deleted: " + amount);
        } else {
            System.out.println("Cannot delete positive transaction amount.");
        }
    }

    public double getTotalExpenses() {
        double total = 0.0;
        for (double amount : transactions) {
            if (amount < 0) {
                total += amount;
            }
        }
        return Math.abs(total);
    }

    public static void main(String[] args) {
        Wallet myWallet = new Wallet();

        myWallet.addTransaction(1000);
        myWallet.addTransaction(1500);
        myWallet.addTransaction(150);

        System.out.println("Balance: " + myWallet.getBalance());
        System.out.println("Transaction History: " + myWallet.getTransactionHistory());

        myWallet.deleteTransaction(-150);
        myWallet.deleteTransaction(0);
        myWallet.deleteTransaction(0);

        System.out.println("Total Expenses: " + myWallet.getTotalExpenses());
        System.out.println("Balance after deletion: " + myWallet.getBalance());
        System.out.println("Transaction History: " + myWallet.getTransactionHistory());
    }
}
