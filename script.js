const $=id=>document.getElementById(id);
const cards=(id,arr,fn)=>$(id).innerHTML=arr.map(fn).join("");
const c=([t,d],i)=>`<div class="card"><div class="ic">${t[0]}</div><h4>${t}</h4><p>${d}</p></div>`;
cards("why",[["Keterampilan nyata","Kemampuan siswa dipakai untuk kebutuhan orang lain, bukan hanya tugas."],["Portofolio","Setiap proyek tercatat sebagai pengalaman dan rekam jejak."],["Belajar wirausaha","Siswa merasakan langsung cara sebuah usaha bekerja."],["Mendukung UMKM","UMKM mendapat jasa desain, video, dan teknologi sesuai kebutuhan."]],c);
cards("feat",[["Profil siswa","Bidang keahlian, keterampilan, contoh karya, dan jenis jasa tersedia."],["Portofolio proyek","Hasil pekerjaan yang boleh ditampilkan masuk ke portofolio siswa."],["Cari jasa","Masyarakat dan UMKM memilih jasa sesuai kebutuhan."],["Kesepakatan proyek","Kebutuhan, batas waktu, dan biaya jasa dibicarakan langsung."],["Pendampingan sekolah","Proyek disesuaikan dengan kemampuan agar risiko terjaga."],["Pembekalan","Etika komunikasi, manajemen waktu, dan keamanan data."]],c);
cards("skills",[["Komunikasi","Memahami kebutuhan pengguna jasa."],["Tanggung jawab","Menyelesaikan sesuai kesepakatan."],["Manajemen waktu","Membagi waktu sekolah dan proyek."],["Pemecahan masalah","Mencari solusi saat ada kendala."],["Pemasaran diri","Mengenalkan kemampuan lewat portofolio."]],c);
cards("impact",[["Siswa","Pengalaman proyek dan portofolio sejak masih sekolah."],["Sekolah","Penghubung pembelajaran dengan kebutuhan masyarakat."],["UMKM","Alternatif memperoleh jasa sesuai kebutuhan usaha."],["Masyarakat","Akses ke beragam keterampilan siswa SMK."]],c);
$("flow").innerHTML=[["Pendataan","Sekolah mengidentifikasi keterampilan siswa per jurusan."],["Portofolio","Siswa mengumpulkan hasil karya."],["Uji coba","Dimulai di sekolah dan UMKM sekitar."],["Evaluasi","Melihat jasa paling dibutuhkan dan kendala."],["Pengembangan","Jangkauan diperluas ke lebih banyak UMKM."]].map(([t,d])=>`<div><b>${t}</b><p>${d}</p></div>`).join("");
const S=[["TKJ","Instalasi Wi-Fi","Pasang jaringan untuk warung, rumah, atau kantor kecil."],["TKJ","Konfigurasi perangkat","Atur perangkat dan atasi masalah jaringan."],["TKJ","Perawatan komputer","Servis dan perawatan komputer untuk UMKM."],["Desain","Logo dan poster","Materi promosi untuk usaha."],["Desain","Katalog produk","Katalog digital yang rapi untuk UMKM."],["Multimedia","Foto dan video produk","Fotografi, videografi, dan penyuntingan video promosi."]];
function render(k){
 $("filter").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.textContent===k));
 cards("svc",S.filter(s=>k==="Semua"||s[0]===k),s=>`<div class="card"><div class="ic">${s[1][0]}</div><h4>${s[1]}</h4><p>${s[2]}</p><div class="meta">${s[0]}</div></div>`);
}
["Semua","TKJ","Desain","Multimedia"].forEach(k=>{const b=document.createElement("button");b.textContent=k;b.onclick=()=>render(k);$("filter").appendChild(b)});
render("Semua");
const bg=$("bg"),m=$("menu");
bg.onclick=()=>{const o=m.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
m.querySelectorAll("a").forEach(a=>a.onclick=()=>{m.classList.remove("open");bg.setAttribute("aria-expanded","false")});