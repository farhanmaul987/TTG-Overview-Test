const m_user = require("../models/m_user");
const bcrypt = require("bcryptjs");

const err500 = {
  error: "Terjadi kesalahan pada server!",
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const duplicate = await m_user.getEmail(email);
    if (duplicate) {
      return res.status(400).json({
        error: "Email sudah digunakan!",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    await m_user.register({
      username,
      email,
      password: hash,
    });

    res.status(201).json({
      message: "Pendaftaran berhasil!",
    });
  } catch (error) {
    res.status(500).json(err500);
  }
};

const view = async (req, res) => {
  try {
    const users = await m_user.getUser();

    const data = users.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
    }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(err500);
  }
};

const viewID = async (req, res) => {
  const userID = req.params.id;

  try {
    const user = await m_user.getUserID(userID);

    if (!user) {
      return res.status(404).json({
        error: "Data Pengguna tidak ditemukan!",
      });
    }

    const data = {
      username: user.username,
      email: user.email,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(err500);
  }
};

const remove = async (req, res) => {
  const userID = req.params.id;

  try {
    const user = await m_user.getUserID(userID);

    if (!user) {
      return res.status(404).json({
        error: "Data Pengguna tidak ditemukan!",
      });
    }

    await m_user.remove(userID);

    res.status(200).json({
      message: "Pengguna berhasil dihapus!",
    });
  } catch (error) {
    res.status(500).json(err500);
  }
};

module.exports = {
  register,
  view,
  viewID,
  remove,
};
