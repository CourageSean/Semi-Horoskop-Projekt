let txt = document.getElementById("txt");
let month = document.getElementById("month");
let art = document.getElementById("art");

let cancerImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__wobble"
  src="assets/images/cancer1.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">22.06 - 22.07</p>
</div> `;

let cancerTxt = ` <h1 class='animate__animated animate__fadeInLeft' >CANCER</h1>
<p  class='para animate__animated animate__fadeInRight'> 
    A powerful desire for change could have you thinking of traveling, Cancer,
    or perhaps relocating to a distant state or foreign country. Friends who
    live far away could be trying to convince you to join them.</p>`;

let leoTxt = `<p  para class='animate__animated animate__fadeInRight '>Jaymiiii </p>`;

function bello() {
  switch (month.value) {
    case "june":
      txt.innerHTML = cancerTxt;
      art.innerHTML = cancerImg;

      break;

    case "august":
      txt.innerHTML = leoTxt;

      break;
  }
}
