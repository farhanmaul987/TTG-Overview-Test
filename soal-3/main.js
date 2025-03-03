const findMissing = (num) => {
  const max = Math.max(...num);
  const min = Math.min(...num);

  // Simpan array angka yang hilang
  const missing = [];

  for (let i = min; i <= max; i++) {
    // Jika angka tidak ada di array = angka hilang
    if (!num.includes(i)) {
      // Tambahkan angka ke array missing
      missing.push(i);
    }
  }
  return missing;
};

console.log(findMissing([1, 5, 7, 9, 14, 15]));
