// ==========================================
// 1. FITUR INTERAKTIF: Ganti Tema (Dark/Light Mode)
// ==========================================
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Cek apakah pengguna pernah memilih mode malam sebelumnya (disimpan di browser)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Mode Siang';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Ubah teks tombol dan simpan preferensi pengguna
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Mode Siang';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙 Mode Malam';
        localStorage.setItem('theme', 'light');
    }
});

// ==========================================
// 2. FITUR INTERAKTIF: Tombol Pesan Roti
// ==========================================
function pesanRoti(namaRoti) {
    // Tampilkan notifikasi sederhana
    alert(`Terima kasih! Anda telah memilih:\n🍞 "${namaRoti}"\n\nAnda akan diarahkan ke WhatsApp untuk menyelesaikan pemesanan.`);
    
    // GANTI NOMOR INI dengan nomor WhatsApp kamu (format: 628xxx, tanpa + atau 0 di depan)
    const nomorWA = "6285189921103"; 
    
    // Buat pesan otomatis yang rapi
    const pesan = `Halo, saya ingin memesan *${namaRoti}*. Apakah stok masih tersedia?`;
    
    // Ubah pesan menjadi format URL agar bisa dikirim via link
    const pesanEncoded = encodeURIComponent(pesan);
    
    // Buka WhatsApp di tab baru
    const urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
    window.open(urlWA, '_blank');
}