// Variabel Form Nama
const fullname = document.getElementById("name");
const input_invalid = document.getElementById("input_invalid");

// Variabel Form Email
const email = document.getElementById("email");
const email_invalid = document.getElementById("email_invalid");
const email_check = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;

// Variabel Form Password
const password = document.getElementById("password");
const password_invalid = document.getElementById("password_invalid");

// Variabel Form Konfirmasi Password
const confirm_password = document.getElementById("confirm_password");
const confirm_password_invalid = document.getElementById(
  "confirm_password_invalid"
);

// Variabel Pesan
const success_message = document.getElementById("success_message");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let isValid = true;

  // Reset Error Message
  input_invalid.innerHTML = "";
  email_invalid.innerHTML = "";
  password_invalid.innerHTML = "";
  confirm_password_invalid.innerHTML = "";
  success_message.style.display = "none";

  // Validasi Nama Lengkap
  if (fullname.value === "" || fullname.value == null) {
    e.preventDefault();
    fullname.style.border = "1px solid red";
    input_invalid.innerHTML = "Masukkan Nama Lengkap!";
    isValid = false;
  } else {
    fullname.style.border = "";
    console.log("✅ Nama:", fullname.value);
  }

  // Validasi Email
  if (!email.value.match(email_check)) {
    e.preventDefault();
    email.style.border = "1px solid red";
    email_invalid.innerHTML = "Email Tidak Valid!";
    isValid = false;
  } else {
    email.style.border = "";
    console.log("✅ Email:", email.value);
  }

  // Validasi Password
  if (password.value.length < 8) {
    e.preventDefault();
    password.style.border = "1px solid red";
    password_invalid.innerHTML = "Password Minimal 8 Karakter!";
    console.log("❌ Password:", password.value);
    isValid = false;
  } else {
    password.style.border = "";
    console.log("✅ Password:", password.value);
  }

  // Validasi Konfirmasi Password
  if (
    password.value !== confirm_password.value ||
    confirm_password.value === ""
  ) {
    e.preventDefault();
    confirm_password.style.border = "1px solid red";
    confirm_password_invalid.innerHTML = "Password Tidak Sama!";
    console.log("❌ Password Salah:", confirm_password.value);
    isValid = false;
  } else {
    confirm_password.style.border = "";
    console.log("✅ Konfirmasi Password:", confirm_password.value);
  }

  // Pesan Sukses
  if (isValid) {
    e.preventDefault();
    success_message.innerHTML = "Pendaftaran Berhasil!";
    success_message.style.display = "block";
    form.reset();
  }
});
