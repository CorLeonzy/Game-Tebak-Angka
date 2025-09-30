let angkaBenar = Math.floor(Math.random() * 100) + 1;
let kesempatan = 10;

function cekTebakan() {
    const input = document.getElementById("inputTebakan");
    const hasil = document.getElementById("hasil");
    const sisa = document.getElementById("kesempatan");
    const ulangBtn = document.getElementById("ulangBtn");

    let tebakan = parseInt(input.value);

    if (isNaN(tebakan)) {
        hasil.textContent = "Masukkan angka yang valid!";
        return;
    }

    if (tebakan < 1 || tebakan > 100) {
        hasil.textContent = "Angka harus antara 1 dan 100!";
        return;
    }

    kesempatan--;

    if (tebakan === angkaBenar) {
        hasil.textContent = `🎉 Selamat! Tebakan kamu benar: ${angkaBenar}`;
        input.disabled = true;
        ulangBtn.style.display = "inline-block";
    } else if (kesempatan === 0) {
        hasil.textContent = `💥 Kesempatan habis! Angka yang benar adalah ${angkaBenar}`;
        input.disabled = true;
        ulangBtn.style.display = "inline-block";
    } else if (tebakan < angkaBenar) {
        hasil.textContent = "📈 Terlalu kecil!";
    } else {
        hasil.textContent = "📉 Terlalu besar!";
    }

    sisa.textContent = `Sisa kesempatan: ${kesempatan}`;
    input.value = "";
    input.focus();
}

function mulaiUlang() {
    angkaBenar = Math.floor(Math.random() * 100) + 1;
    kesempatan = 10;
    document.getElementById("inputTebakan").disabled = false;
    document.getElementById("hasil").textContent = "";
    document.getElementById("kesempatan").textContent = "";
    document.getElementById("inputTebakan").value = "";
    document.getElementById("ulangBtn").style.display = "none";
    document.getElementById("inputTebakan").focus();
}
