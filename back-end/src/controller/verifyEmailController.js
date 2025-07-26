const { verifyEmail } = require("../service/verifyEmailService");

async function verifyEmailController(req, res) {
  try {
    console.log("Verify Email Endpoint Hit!"); // Add this
    console.log("Query params:", req.query); // Add this

    const { token } = req.query;

    if (!token) {
      console.log("No token provided"); // Add this
      return res.status(400).send("Token diperlukan.");
    }

    await verifyEmail(token);

    return res.redirect("http://localhost:5173/login?verified=1");
  } catch (error) {
    console.error("Verifikasi gagal:", error.message);
    return res.status(400).send("Verifikasi gagal atau token tidak valid.");
  }
}

module.exports = { verifyEmailController };
