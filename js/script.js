// script.js – Interaktivitas dasar untuk ReCheck

document.addEventListener('DOMContentLoaded', () => {
  const cekForm = document.getElementById('cekProdukForm');
  const hasil = document.getElementById('hasilCek');

  if (cekForm && hasil) {
    cekForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const reg = document.getElementById('reg').value.trim();

      if (!nama || !reg) {
        hasil.textContent = 'Mohon lengkapi semua data.';
        hasil.className = 'text-red-600 mt-4';
        return;
      }

      // Dummy logic pengecekan
      const dataAman = [
        { nama: 'GlowWhite', reg: 'NA18210123456' },
        { nama: 'SkinPure', reg: 'NA18201234567' },
      ];

      const valid = dataAman.some(item =>
        item.nama.toLowerCase() === nama.toLowerCase() && item.reg === reg
      );

      if (valid) {
        hasil.textContent = `✅ Produk "${nama}" terdaftar resmi dan aman.`;
        hasil.className = 'text-green-600 mt-4';
      } else {
        hasil.textContent = `⚠️ Produk "${nama}" belum terdaftar atau mencurigakan.`;
        hasil.className = 'text-yellow-600 mt-4';
      }
    });
  }
});