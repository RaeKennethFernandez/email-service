const nodemailer = require("nodemailer");
const { getAvailableAccount, incrementSent } = require("./accounts");

async function sendEmail({ to, subject, text, html }) {
  const account = getAvailableAccount();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: account.email,
      pass: account.pass,
    },
  });

  const info = await transporter.sendMail({
    from: account.email,
    to,
    subject,
    text,
    html,
  });

  incrementSent(account);

  return {
    success: true,
    messageId: info.messageId,
    account: account.email,
    sentCount: account.sent,
  };
}

module.exports = { sendEmail };
