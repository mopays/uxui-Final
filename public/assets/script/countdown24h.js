$(document).ready(function () {
  $('[id^=button]').click(function () {
    $("#cookieConsent").hide();
  });
});

//10. กฎพาร์กินสัน (Parkinson’s Law)
Swal.fire({
  title: "ลงทะเบียนด่วน!",
  text: "(เงื่อนไขเป็นไปตามกำหนด)",
  html: `<a href="register.html">คลิกที่นี่เพื่อลงทะเบียน</a>`,
  imageUrl: "assets/image/save50.png",
  imageWidth: 500,
  imageHeight: 300,
  html: ``,
  backdrop: `
    rgba(255,255,255,0.75)
    url("/assets/images/nyan-cat.gif")
    left top
    no-repeat
  `,
  showCancelButton: true,
  cancelButtonText: "ยังไม่สนใจ",
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "ลงทะเบียนทันที"
}).then((result) => {
  if (result.isConfirmed) {
    window.location.href = 'register.html';
  }
});

// กำหนดเวลาเริ่มต้นและเวลาสิ้นสุด
const startTime = new Date().getTime();
const endTime = startTime + (24 * 60 * 60 * 1000); // 24 ชั่วโมงใน milliseconds

// สร้างฟังก์ชันสำหรับอัปเดต countdown และแสดงใน Swal.fire
function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;

  // คำนวณเวลาที่เหลือ
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // แสดง countdown ใน Swal.fire
  Swal.update({
    title: "ลงทะเบียนด่วน!",
    text: "(เงื่อนไขเป็นไปตามกำหนด)",
    html: `<a href="register.html">คลิกที่นี่เพื่อลงทะเบียน</a>`,
    imageUrl: "assets/image/save50.png",
    imageWidth: 500,
    imageHeight: 300,
    html: `<div id="countdown">${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที</div>`,
    backdrop: `
      rgba(255,255,255,0.75)
      url("/assets/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    showCancelButton: true,
    cancelButtonText: "ยังไม่สนใจ",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ลงทะเบียนทันที"
  });

  // ถ้าเวลาสิ้นสุดแล้ว ให้ redirect ไปยังหน้า register.html
  if (distance <= 0) {
    window.location.href = 'register.html';
  }
}

// เริ่ม countdown และอัปเดตทุกๆ 1 วินาที
setInterval(updateCountdown, 1000);
updateCountdown(); // เรียกใช้ฟังก์ชันเพื่อแสดง countdown ครั้งแรก
//10. กฎพาร์กินสัน (Parkinson’s Law)