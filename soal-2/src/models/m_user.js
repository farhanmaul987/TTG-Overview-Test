const connection = require("../config/db");

// Mendapatkan data user berdasarkan email
const getEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = ?";
  const [rows] = await connection.promise().query(query, [email]);
  return rows[0];
};

// Mendapatkan data user berdasarkan ID
const getUserID = async (id) => {
  const query = "SELECT * FROM users WHERE id = ?";
  const [rows] = await connection.promise().query(query, [id]);
  return rows[0];
};

// Mendapatkan semua data user
const getUser = async () => {
  const query = "SELECT * FROM users"; // Ambil semua user
  const [rows] = await connection.promise().query(query);
  return rows;
};

// Mendaftarkan user
const register = async (user) => {
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  const { username, email, password } = user;
  await connection.promise().query(query, [username, email, password]);
};

// Menghapus data user berdasarkan ID
const remove = async (id) => {
  const query = "DELETE FROM users WHERE id = ?";
  await connection.promise().query(query, [id]);
};

module.exports = {
  getEmail,
  getUserID,
  getUser,
  register,
  remove,
};
