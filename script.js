// ==========================================================================
// FILE: script.js
// TUJUAN: Menambahkan fitur interaktif (Memenuhi Bobot 15% UTS)
// ==========================================================================

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
    
    // Ubah teks tombol dan simpan preferensi pengguna agar tetap sama saat di-refresh
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Mode Siang';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙 Mode Malam';
        localStorage.setItem('theme', 'light');
    }
});

// ==========================================
// 2. FITUR INTERAKTIF: Tombol Pesan Roti (Optimized for Mobile)
// ==========================================
function pesanRoti(namaRoti) {
    // 1. Tampilkan notifikasi sederhana
    alert(`Terima kasih! Anda telah memilih:\n🍞 "${namaRoti}"\n\nAnda akan diarahkan ke WhatsApp untuk menyelesaikan pemesanan.`);
    
    // 2. Nomor WhatsApp tujuan (Ganti jika perlu, format: 628xxx tanpa + atau 0)
    const nomorWA = "6285189921103"; 
    
    // 3. Buat pesan otomatis yang rapi
    const pesan = `Halo, saya ingin memesan *${namaRoti}*. Apakah stok masih tersedia?`;
    
    // 4. Ubah pesan menjadi format URL (mengubah spasi jadi %20, dll)
    const pesanEncoded = encodeURIComponent(pesan);
    
    // 5. DETEKSI DEVICE: Apakah pengguna memakai HP atau Laptop?
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    let urlWA;
    if (isMobile) {
        // Jika HP: Gunakan protocol 'whatsapp://' untuk membuka APLIKASI langsung
        urlWA = `whatsapp://send?phone=${nomorWA}&text=${pesanEncoded}`;
    } else {
        // Jika Laptop/PC: Gunakan 'https://wa.me/' untuk membuka WHATSAPP WEB
        urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
    }
    
    // 6. Buka link WhatsApp
    window.open(urlWA, '_blank');
}
