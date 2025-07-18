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


const counters = [
  { id: "produk", target: 205133, duration: 2000 },
  { id: "izin", target: 79.9, duration: 1500 },
  { id: "berbahaya", target: 17.4, duration: 1500 },
  { id: "kadaluarsa", target: 2.6, duration: 1500 },
  { id: "injeksi", target: 0.1, duration: 1500 }
];

counters.forEach(counter => {
  let count = 0;
  const step = counter.target / (counter.duration / 10);
  const el = document.getElementById(counter.id);

  const update = () => {
    count += step;
    if (count < counter.target) {
      el.textContent = counter.id === "produk" ? Math.floor(count) : count.toFixed(1);
      setTimeout(update, 10);
    } else {
      el.textContent = counter.id === "produk" ? counter.target.toLocaleString() : counter.target;
    }
  };

  update();
});
