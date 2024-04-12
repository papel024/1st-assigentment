class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`
        Account Number: ${this.accountNumber}
        Owner Name: ${this.ownerName}
        Balance: $${this.balance}
      `);
    }
  }
  
 
  const account1 = new BankAccount(50032501, "Papel Sarker", 1000);
  const account2 = new BankAccount(50005242, "Rikto Sarker", 2000);
  
 
  account1.displayAccountInfo();
  account1.deposit(500);
  account1.withdraw(200);
  account1.withdraw(1500); 
  account1.displayAccountInfo();
  
  account2.displayAccountInfo();
  account2.deposit(1000);
  account2.withdraw(500);
  account2.displayAccountInfo();
  