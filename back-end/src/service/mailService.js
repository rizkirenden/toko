const nodemailer = require("nodemailer");

async function sendVerificationEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rizkirenden@gmail.com",
      pass: "vnes dbgd peri bicg",
    },
  });

  const verificationLink = `http://localhost:3000/verify-email?token=${token}`;

  await transporter.sendMail({
    from: '"Aplikasi Toko Anda 🛒" <rizkirenden@gmail.com>',
    to: email,
    subject: "🛍️ Verifikasi Email Anda - Aplikasi Toko",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fefefe;">
      <h2 style="color: #2e2e2e;">Selamat Datang di <span style="color:#007bff;">Aplikasi Toko</span>!</h2>
      <p style="color: #333;">Terima kasih telah bergabung. Untuk mulai menggunakan layanan kami, silakan verifikasi email Anda dengan mengklik tombol di bawah ini:</p>
      <a href="${verificationLink}" 
         style="display: inline-block; padding: 12px 24px; margin: 20px 0; background-color: #28a745; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
         Verifikasi Email
      </a>
      <p style="color: #555;">Jika tombol tidak bisa diklik, silakan salin dan tempel link ini ke browser Anda:</p>
      <p style="word-break: break-all;"><a href="${verificationLink}">${verificationLink}</a></p>
      <hr style="margin-top: 30px; border-top: 1px dashed #ccc;">
      <p style="font-size: 12px; color: #888;">Email ini dikirim secara otomatis oleh Aplikasi Toko. Jika Anda tidak merasa mendaftar, silakan abaikan email ini.</p>
    </div>
  `,
  });
}

module.exports = sendVerificationEmail;
