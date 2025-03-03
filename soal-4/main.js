function findFormula(source, target) {
  const operators = ["+", "-", "*"];

  // Menyimpan panjang array source
  const sourceData = source.length;

  // Algo Backtracking untuk mencari kombinasi angka
  function backtrack(index, currentExpression, currentValue, used) {
    // Jika semua angka telah digunakan, cek apakah hasilnya sama dengan target
    if (index === sourceData) {
      if (currentValue === target) {
        return currentExpression;
      }
      return null;
    }

    // Loop melalui setiap angka
    for (let i = 0; i < sourceData; i++) {
      if (!used[i]) {
        // Tandai angka sudah digunakan
        used[i] = true;
        // Simpan angka yg sedang diproses saat ini ke num
        const num = source[i];

        // Loop melalui setiap operator
        for (const op of operators) {
          let newExpression, newValue;

          if (op === "+") {
            newExpression = `(${currentExpression} + ${num})`;
            newValue = currentValue + num;
          } else if (op === "-") {
            newExpression = `(${currentExpression} - ${num})`;
            newValue = currentValue - num;
          } else if (op === "*") {
            newExpression = `(${currentExpression} * ${num})`;
            newValue = currentValue * num;
          }

          const result = backtrack(index + 1, newExpression, newValue, used);
          if (result) {
            return result;
          }
        }

        used[i] = false;
      }
    }

    return null;
  }

  // Memulai Backtracking dari tiap angka
  for (let i = 0; i < sourceData; i++) {
    const used = new Array(sourceData).fill(false);
    used[i] = true;
    const result = backtrack(1, source[i].toString(), source[i], used);
    if (result) {
      return result;
    }
  }

  return "Tidak dapat menemukan formula perhitungan";
}

// Eksekusi soal
const source = [1, 4, 5, 6];
const target = 18;
console.log(findFormula(source, target));
