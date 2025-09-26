const { accounts, limit } = require("./config");

accounts.forEach(acc => acc.sent = 0);

function getAvailableAccount() {
  const account = accounts.find(acc => acc.sent < limit);
  if (!account) throw new Error("All accounts have reached their daily limit!");
  return account;
}

function incrementSent(account) {
  account.sent++;
}

module.exports = { getAvailableAccount, incrementSent };
