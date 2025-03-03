# TTG-Overview-Test
<h1 align="center">TTG Overview Test</h1>

<p style='text-align: justify;'>Repositori ini merupakan project yang dibuat untuk menyelesaikan tugas Overview Test oleh PT Tim Teknologi Global sebagai tes tahap ketiga perekrutan Fullstack Developer.</p>

## 📂 Struktur Folder

```
📂 Soal 1
├── index.html
├── style.css
└── script.js

📂 Soal 2
├── 📂 src
│   ├── 📂 config
│   │   └── db.js
│   ├── 📂 controllers
│   │   └── c_user.js
│   ├── 📂 models
│   │   └── m_user.js
│   ├── 📂 routes
│   │   └── r_user.js
│   └── server.js
├── package.json
└── ttg-test.sql

📂 Soal 3
└── main.js

📂 Soal 4
└── main.js
```

## 🚀 Cara Menggunakan

### :one: Soal 1 (Frontend)

#### 🛠 Teknologi yang Digunakan

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- Buka `index.html`
- Masukkan email, nama, dan password
- Tekan tombol `Daftar`
- Jika semua validasi berhasil, maka akan muncul pesan `Pendaftaran Berhasil!`

### :two: Soal 2 (Backend)

#### 🛠 Teknologi yang Digunakan

![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/express-222222?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

- Import Database SQL yang telah disediakan dengan nama Database `ttg-test`
- Nyalakan Local Server
- Install Dependencies

```
npm install
```

- Jalankan Program

```
npm start
```

- Jika menggunakan Postman, buat collection berisi 4 request

```
📂 Backend Test Collection
├── [POST] Input User
├── [GET] View All
├── [GET] View by ID
└── [DELETE] Delete by ID
```

- Pada `Input User` masukkan link dibawah

```
http://localhost:3000/user/register
```

- Masukkan data json pada Body lalu tekan `Send`

```
{
    "username": "usernamemu",
    "email": "emailmu@gmail.com",
    "password": "passwordmu123"
}
```

- Pada `View All` masukkan link dibawah lalu tekan `Send`

```
http://localhost:3000/user/view
```

- Pada `View by ID` masukkan link dibawah, tentukan `id` yang ingin diambil lalu tekan `Send`

```
http://localhost:3000/user/view/1
```

- Pada `Delete by ID` masukkan link dibawah, tentukan `id` yang ingin dihapus lalu tekan `Send`

```
http://localhost:3000/user/delete/1
```

#### 📌 Dokumentasi Lengkap API di Postman

[Postman API Documentation](https://documenter.getpostman.com/view/28557830/2sAYdimoek)

### :three: Soal 3 (Angka yang Hilang)

#### 🛠 Teknologi yang Digunakan

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- Masukkan deretan angka
- Jalankan file `main.js`

### :four: Soal 4 (Formula Perhitungan)

#### 🛠 Teknologi yang Digunakan

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- Jalankan file `main.js`
