/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,
  

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

  navigation: {
    nextEl: ".swiper-button-next",
   //  prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  },
});



// button mencar
document.addEventListener("DOMContentLoaded", function () {
   const gamauBtn = document.getElementById('gamauBtn');
   const modalContent = document.querySelector('.modal-content'); // Get the modal content container

   const moveButtonWithinModal = () => {
      // const randomPosition = (min, max) => Math.random() * (max - min) + min;

      const modalRect = modalContent.getBoundingClientRect(); // Dimensi modal
      const btnRect = gamauBtn.getBoundingClientRect(); // Dimensi tombol

      // Hitung posisi acak untuk top dan left agar tidak keluar dari modal
      const maxTop = modalRect.height - btnRect.height;  // Modal height minus button height
      const maxLeft = modalRect.width - btnRect.width;   // Modal width minus button width

      const newTop = Math.max(0, Math.random() * maxTop);        // Tidak lebih rendah dari 0
      const newLeft = Math.max(0, Math.random() * maxLeft);      // Tidak lebih rendah dari 0

      // Apply the new top and left positions within modal
      gamauBtn.style.position = 'absolute'; // Ensure button is positioned absolutely within modal
      gamauBtn.style.transition = 'top 500ms ease, left 500ms ease'; // Menambahkan transisi CSS
      gamauBtn.style.top =  `${newTop}px`;
      gamauBtn.style.left = `${newLeft}px`;
   };

   if (gamauBtn) {
      // Move on hover
      gamauBtn.addEventListener('mouseover', moveButtonWithinModal);

      // Move on click
      gamauBtn.addEventListener('click', moveButtonWithinModal);
   }
});

// if else card hidden
document.addEventListener('DOMContentLoaded', function() {
   // Dapatkan tombol di modal kedua
   const lanjutBtnInModal2 = document.querySelector('#exampleModalToggle2 .lanjut-btn');
   
   // Dapatkan elemen lastcard dan cardslide
   const lastCardSection = document.getElementById('lastcard');
   const cardSlideSection = document.getElementById('cardslide');
   const bgimage = document.getElementById('bgimageanimation');
   const audioControlsection = document.getElementById('audioControl');
   const audio = document.getElementById('myAudio'); // Ambil elemen audio
   const bodyElement = document.querySelector('body');


 
   // Pastikan tombol di modal kedua ada
   if (lanjutBtnInModal2) {
     lanjutBtnInModal2.addEventListener('click', function() {
       // Sembunyikan cardslide
       cardSlideSection.style.display = 'none';
       
       // Tampilkan lastcard
       lastCardSection.style.display = 'block';
       bgimage.style.display = 'block';
       audioControlsection.style.display = 'block';

       audio.play(); // Memutar audio

       if (bodyElement.classList.contains('zoom-bgawal')) {
        bodyElement.classList.remove('zoom-bgawal');
        bodyElement.classList.add('zoom-bgakhir');
    }

       // Tutup modal (jika diinginkan)
       const modalInstance = bootstrap.Modal.getInstance(document.getElementById('exampleModalToggle2'));
       modalInstance.hide();


       // Jalankan kode JS untuk lastcard setelah tombol diklik
       initializeLastCardFeatures();
     });
   }
 });


 // Script untuk menampilkan span saat "See more" diklik
document.querySelector('.card__description a').addEventListener('click', function(event) {
   event.preventDefault(); // Mencegah link default behavior
   const tambahan = document.querySelector('.card__description .tambahan');
   tambahan.style.display = (tambahan.style.display === 'none' || tambahan.style.display === '') ? 'inline' : 'none';
   
   // Ganti teks "See more" menjadi "See less" ketika di-klik
   if (this.textContent === 'See more') {
     this.textContent = 'See less';
   } else {
     this.textContent = 'See more';
   }
 });
 
 

// image slider
 
 document.addEventListener("DOMContentLoaded", function () {
   const images = document.querySelectorAll(".background-image-slider img");
 
   function setRandomPositions() {
     images.forEach((image) => {
       // Tentukan posisi acak untuk setiap gambar
       const randomTop = Math.random() * 100; // Nilai acak untuk top
       const randomLeft = Math.random() * 100; // Nilai acak untuk left
 
       // Terapkan posisi acak
       image.style.top = `${randomTop}%`;
       image.style.left = `${randomLeft}%`;
     });
   }
 
   // Set posisi acak saat pertama kali halaman dimuat
   setRandomPositions();
 
  //  // Ulangi setiap kali animasi slide selesai
  //  setInterval(setRandomPositions, 10000); // Sesuaikan dengan durasi animasi slide (10s)
 });
 



//  LOVE COUNTER
document.addEventListener("DOMContentLoaded", function () {
  const loveBtn = document.getElementById("love-btn");
  const loveContainer = document.getElementById("love-container");
  const loveCounter = document.getElementById("love-counter");
  
  let counter = 0; // Variable untuk menyimpan jumlah klik

  // Fungsi untuk membuat love kecil
  function createLoveIcon(x, y) {
    const loveIcon = document.createElement("span");
    loveIcon.classList.add("love-icon");
    loveIcon.textContent = "❤";

    // Menempatkan ikon di posisi acak dekat tombol
    const randomX = Math.random() * 100 - 50; // Posisi X acak
    const randomY = Math.random() * 100 - 50; // Posisi Y acak

    
    loveIcon.style.left = `${x + randomX}px`;
    loveIcon.style.top = `${y + randomY}px`;

    loveContainer.appendChild(loveIcon);

    // Menghapus ikon setelah animasi selesai
    setTimeout(() => {
      loveIcon.remove();
    }, 1000); // Durasi animasi sesuai dengan CSS @keyframes
  }

  // Event listener saat tombol diklik
  loveBtn.addEventListener("click", function (e) {
    // Update counter
    counter++;
    loveCounter.textContent = counter;

    // Dapatkan posisi tombol
    const btnRect = loveBtn.getBoundingClientRect();
    const x = btnRect.left + btnRect.width / 2;
    const y = btnRect.top + btnRect.height / 2;

    // Buat beberapa love kecil setiap kali tombol diklik
    for (let i = 0; i < 5; i++) {
      createLoveIcon(x, y);
    }
  });
});


// animation text
document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("typedText");
  const typedAdditionalText = document.getElementById("typedAdditionalText");
  const seeMoreLink = document.getElementById("seeMoreLink");

  // Fungsi animasi teks seperti mengetik
  function typeWriterEffect(element, text, delay = 100) {
    let i = 0;
    const typingCursor = document.createElement("span");
    typingCursor.classList.add("typing-cursor");
    element.innerHTML = "";  // Kosongkan elemen terlebih dahulu
    element.appendChild(typingCursor);

    function typeChar() {
      if (i < text.length) {
        typingCursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(typeChar, delay);
      } else {
        typingCursor.remove(); // Hapus kursor setelah selesai
      }
    }

    typeChar();
  }

  // Jalankan animasi pengetikan untuk teks pertama
  const text1 = "Semoga di ulang tahun ke 23 ini, kamu diberi banyak kebahagiaan, kesehatan, dan kesuksesan. May all your wishes come true, dan semoga setiap harinya penuh dengan berkah. Enjoy your special day!";
  typeWriterEffect(typedText, text1, 100);

  // Event listener untuk "See more"
  seeMoreLink.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default
  
    // Pengecekan menggunakan computed style
    const isHidden = window.getComputedStyle(typedAdditionalText).display === "none";
  
    if (isHidden) {
      // Tampilkan teks tambahan dan jalankan animasi
      typedAdditionalText.style.display = "inline";
      seeMoreLink.textContent = "See less"; // Ganti teks tautan  
      const text2 = "Thank you for always being my source of joy and strength. I’m so lucky to have you in my life, dan semoga hari ini penuh dengan kebahagiaan seperti kamu selalu bikin aku happy. I love you to the moon and back! ❤";
      typeWriterEffect(typedAdditionalText, text2, 70);
    } else {
      // Sembunyikan teks tambahan
      typedAdditionalText.style.display = "none";
      seeMoreLink.textContent = "See more";
    }
  });
});



// show delay last card
document.addEventListener("DOMContentLoaded", function () {
  const lastCardSection = document.getElementById('lastcard');

  // Tambahkan delay sebelum menampilkan elemen
  setTimeout(function() {
    lastCardSection.classList.add('show');
  }, 5000); // Delay 2 detik
});



// ======================================================================= test

// Fungsi untuk menjalankan JS pada lastcard
function initializeLastCardFeatures() {

  // Script untuk menampilkan span saat "See more" diklik
  const typedText = document.getElementById("typedText");
  const typedAdditionalText = document.getElementById("typedAdditionalText");
  const seeMoreLink = document.getElementById("seeMoreLink");

  // Fungsi animasi teks seperti mengetik
  function typeWriterEffect(element, text, delay = 100) {
    let i = 0;
    const typingCursor = document.createElement("span");
    typingCursor.classList.add("typing-cursor");
    element.innerHTML = "";  // Kosongkan elemen terlebih dahulu
    element.appendChild(typingCursor);

    function typeChar() {
      if (i < text.length) {
        typingCursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(typeChar, delay);
      } else {
        typingCursor.remove(); // Hapus kursor setelah selesai
      }
    }

    typeChar();
  }

  // Jalankan animasi pengetikan untuk teks pertama
  const text1 = "Semoga di ulang tahun ke 23 ini, kamu diberi banyak kebahagiaan, kesehatan, dan kesuksesan. May all your wishes come true, dan semoga setiap harinya penuh dengan berkah. Enjoy your special day!";
  typeWriterEffect(typedText, text1, 100);

  // Event listener untuk "See more"
  seeMoreLink.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default
  
    // Pengecekan menggunakan computed style
    const isHidden = window.getComputedStyle(typedAdditionalText).display === "none";
  
    if (isHidden) {
      // Tampilkan teks tambahan dan jalankan animasi
      typedAdditionalText.style.display = "inline";
      typedAdditionalText.style.fontStyle = 'italic';
      seeMoreLink.textContent = "See less"; // Ganti teks tautan
      const text2 = "Thank you for always being my source of joy and strength. I’m so lucky to have you in my life, dan semoga hari ini penuh dengan kebahagiaan seperti kamu selalu bikin aku happy. I love you to the moon and back! ❤";
      typeWriterEffect(typedAdditionalText, text2, 70);
    } else {
      // Sembunyikan teks tambahan
      typedAdditionalText.style.display = "none";
      seeMoreLink.textContent = "See more";
    }
  });
}

// Fungsi animasi teks seperti mengetik
function typeWriterEffect(element, text, delay = 100) {
  let i = 0;
  const typingCursor = document.createElement("span");
  typingCursor.classList.add("typing-cursor");
  element.innerHTML = "";  // Kosongkan elemen terlebih dahulu
  element.appendChild(typingCursor);

  function typeChar() {
    if (i < text.length) {
      typingCursor.insertAdjacentText("beforebegin", text.charAt(i));
      i++;
      setTimeout(typeChar, delay);
    } else {
      typingCursor.remove(); // Hapus kursor setelah selesai
    }
  }

  typeChar();
}





// ============================ AUDIO





// CONTROL LAGU
document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('myAudio');
  const playPauseBtn = document.getElementById('playPauseBtn');
  
  // Mengontrol tombol play/pause
  playPauseBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play(); // Memulai lagu
      playPauseBtn.textContent = '❚❚'; // Ubah teks tombol jadi "Pause"
    } else {
      audio.pause(); // Menjeda lagu
      playPauseBtn.textContent = '▷'; // Ubah teks tombol jadi "Play"
    }
  });
  
  // Mulai audio saat tombol lanjut-btn di klik
  const lanjutBtnInModal2 = document.querySelector('#exampleModalToggle2 .lanjut-btn');
  if (lanjutBtnInModal2) {
    lanjutBtnInModal2.addEventListener('click', function () {
      audio.play(); // Memulai lagu saat lanjut-btn diklik
      playPauseBtn.textContent = '❚❚'; // Ubah teks tombol jadi "Pause"
    });
  }
});


