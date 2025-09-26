const express = require("express");
const router = express.Router();
const { sendEmail } = require("./mailer");

router.post("/send", async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    if (!to || !subject) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await sendEmail({ to, subject, text, html });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
