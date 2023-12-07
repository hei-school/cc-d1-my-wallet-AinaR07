class Wallet:
    def __init__(self):
        self.balance = 0.0
        self.transactions = []

    def add_transaction(self, amount):
        if amount >= 0:
            self.balance += amount
            self.transactions.append(amount)
            print(f"Transaction added: {amount}")
        else:
            print("Cannot add negative transaction amount.")

    def get_balance(self):
        return self.balance

    def get_transaction_history(self):
        return self.transactions

    def delete_transaction(self, amount):
        if amount <= 0:
            self.balance += amount
            self.transactions.append(amount)
            print(f"Transaction deleted: {amount}")
        else:
            print("Cannot delete positive transaction amount.")

    def get_total_expenses(self):
        total = sum(amount for amount in self.transactions if amount < 0)
        return abs(total)

# Exemple d'utilisation de la classe Wallet
my_wallet = Wallet()

my_wallet.add_transaction(1000)
my_wallet.add_transaction(1500)
my_wallet.add_transaction(150)

print("Balance:", my_wallet.get_balance())
print("Transaction History:", my_wallet.get_transaction_history())

my_wallet.delete_transaction(-150)
my_wallet.delete_transaction(0)
my_wallet.delete_transaction(0)

print("Total Expenses:", my_wallet.get_total_expenses())
print("Balance after deletion:", my_wallet.get_balance())
print("Transaction History:", my_wallet.get_transaction_history())
