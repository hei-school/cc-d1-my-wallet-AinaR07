using System;
using System.Collections.Generic;

class Wallet
{
    private double balance;
    private List<double> transactions;

    public Wallet()
    {
        balance = 0.0;
        transactions = new List<double>();
    }

    public void AddTransaction(double amount)
    {
        if (amount >= 0)
        {
            balance += amount;
            transactions.Add(amount);
            Console.WriteLine($"Transaction added: {amount}");
        }
        else
        {
            Console.WriteLine("Cannot add negative transaction amount.");
        }
    }

    public double GetBalance()
    {
        return balance;
    }

    public List<double> GetTransactionHistory()
    {
        return transactions;
    }

    public void DeleteTransaction(double amount)
    {
        if (amount <= 0)
        {
            balance += amount;
            transactions.Add(amount);
            Console.WriteLine($"Transaction deleted: {amount}");
        }
        else
        {
            Console.WriteLine("Cannot delete positive transaction amount.");
        }
    }

    public double GetTotalExpenses()
    {
        double total = 0.0;
        foreach (var amount in transactions)
        {
            if (amount < 0)
            {
                total += amount;
            }
        }
        return Math.Abs(total);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Wallet myWallet = new Wallet();

        myWallet.AddTransaction(1000);
        myWallet.AddTransaction(1500);
        myWallet.AddTransaction(150);

        Console.WriteLine("Balance: " + myWallet.GetBalance());
        Console.WriteLine("Transaction History: " + string.Join(", ", myWallet.GetTransactionHistory()));

        myWallet.DeleteTransaction(-150);
        myWallet.DeleteTransaction(0);
        myWallet.DeleteTransaction(0);

        Console.WriteLine("Total Expenses: " + myWallet.GetTotalExpenses());
        Console.WriteLine("Balance after deletion: " + myWallet.GetBalance());
        Console.WriteLine("Transaction History: " + string.Join(", ", myWallet.GetTransactionHistory()));
    }
}
