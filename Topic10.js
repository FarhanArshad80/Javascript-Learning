function withdrawFunds(accountBalance, amount) {
  try {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > accountBalance) {
      throw new Error("Insufficient funds in your account.");
    }

    // If checks pass:
    accountBalance -= amount;
    console.log(`✅ Success! New balance: $${accountBalance}`);
    return accountBalance;
  } 
  catch (error) {
    // Catches the specific Error object thrown above
    console.error(`⚠️ Transaction Rejected: ${error.message}`);
  }
}

withdrawFunds(500, 600);  // Triggers "Insufficient funds"
withdrawFunds(500, -50);  // Triggers "Must be greater than zero"