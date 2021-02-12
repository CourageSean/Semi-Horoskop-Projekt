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

let leoTxt = `<h1 class='animate__animated animate__fadeInLeft' >LEO</h1>
<p  class='para animate__animated animate__fadeInRight'>
Today you may be asked to choose between the old and the new, Leo. It's as if people are protesting in some manner and you're being asked to join in the ranks of those wishing to see change. </p>  `;

let leoImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__bounceIn"
  src="assets/images/leo.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">22.07 - 22.08</p>
</div> `;

let ariesImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__bounceInDown"
  src="assets/images/capricorn-goat-animal-shape-of-zodiac-sign.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">22.12 - 19.01</p>
</div> `;

let ariesTxt = `<h1 class='animate__animated animate__fadeInLeft' >ARIES</h1>
<p  class='para animate__animated animate__fadeInRight'>
  Aggressive people may interfere with your plans today, Aries, so don't get too upset if things don't work out the way you want them to. </p>  `;

let aquariusImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__rotateIn"
  src="assets/images/aquarius-water-container-symbol.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">20.02 - 18.02</p>
</div> `;

let aquariusTxt = `<h1 class='animate__animated animate__fadeInLeft' >AQUARIUS</h1>
<p  class='para animate__animated animate__fadeInRight'>
You may feel a bit lonely today, Aquarius, even if there are people all around you. It may seem like everyone's on a different plane. </p>  `;

let piscesImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__swing"
  src="assets/images/pisces-astrological-sign-symbol.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">19.02 - 20.03</p>
</div> `;

let piscesTxt = `<h1 class='animate__animated animate__fadeInLeft' >PISCES</h1>
<p  class='para animate__animated animate__fadeInRight'>
This is a climactic time for you, Pisces. All your yearly cycles have reached a critical juncture. You may feel as if you're at a point of tremendous victory or terrible failure. </p>  `;

let capricornTxt = `<h1 class='animate__animated animate__fadeInLeft' >ARIES</h1>
<p  class='para animate__animated animate__fadeInRight'>
This is a climactic time for you, Pisces. All your yearly cycles have reached a critical juncture. You may feel as if you're at a point of tremendous victory or terrible failure. </p>  `;

let capricornImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__bounceInLeft"
  src="assets/images/aries-symbol.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">21.03 - 19.04</p>
</div> `;

let taurusTxt = `<h1 class='animate__animated animate__fadeInLeft' >TAURUS</h1>
<p  class='para animate__animated animate__fadeInRight'>
It's hard to keep your balance when a big rock suddenly falls on one side of the scale, Taurus. Resolving the matter isn't as hard as you think, because this rock has been dropped there as a gift. </p>  `;

let taurusImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__pulse"
  src="assets/images/taurus-zodiac-symbol-of-bull-head-front.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">20.04 - 20.05</p>
</div> `;

let geminiTxt = `<h1 class='animate__animated animate__fadeInLeft' >GEMINI</h1>
<p  class='para animate__animated animate__fadeInRight'>
Like a team of pickpockets in a crowd, a group may have its eyes on you and secretly scheme to take advantage of your innocence, Gemini.  </p>  `;

let geminiImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__jello"
  src="assets/images/gemini-female-twins-couple-symbol (1).png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">20.05 - 20.06</p>
</div> `;

let virgoTxt = `<h1 class='animate__animated animate__fadeInLeft' >VIRGO</h1>
<p  class='para animate__animated animate__fadeInRight'>
Your inner strength and courage are tremendous today. You will find that people naturally gravitate toward you, Virgo.  </p>  `;

let virgoImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__fadeInDown"
  src="assets/images/virgo-female-silhouette.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">23.08 - 22.09</p>
</div> `;

let libraTxt = `<h1 class='animate__animated animate__fadeInLeft' >LIBRA</h1>
<p  class='para animate__animated animate__fadeInRight'>
Wear the striped shirt and polka-dot pants today, Libra. The more you clash with the outside world the better. </p>  `;

let libraImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__rotateInDownRight"
  src="assets/images/Waage.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">23.09 - 22.10</p>
</div> `;

let scorpioTxt = `<h1 class='animate__animated animate__fadeInLeft' >SCORPIO</h1>
<p  class='para animate__animated animate__fadeInRight'>
If you don't understand something, ask, Scorpio. If it looks different to you, ask why that is.  </p>  `;

let scorpioImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__bounceInUp"
  src="assets/images/scorpio-vertical-animal-shape-of-zodiac-symbol.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">23.10 - 21.11</p>
</div> `;

let sagittariusTxt = `<h1 class='animate__animated animate__fadeInLeft' >SAGITTARIUS</h1>
<p  class='para animate__animated animate__fadeInRight'>
You may be shaken to the core today by someone of great personal magnetism, Sagittarius.  </p>  `;

let sagittariusImg = ` <div id="cancerWrapper" class="animate__animated animate__flipInY">
<img
  id="cancer"
  class="animate__animated animate__fadeInTopLeft"
  src="assets/images/sagittarius-sign.png"
  alt=""
/>
<p id="date"  class="animate__animated animate__fadeIn">22.11 - 21.12</p>
</div> `;

let defaultTxt = `<h1 id="required">birth month required!</h1>`;

function bello() {
  switch (month.value.toLowerCase()) {
    case "june":
    case "juni":
    case "jun":
      txt.innerHTML = geminiTxt;
      art.innerHTML = geminiImg;

      break;

    case "august":
    case "aug":
      txt.innerHTML = leoTxt;
      art.innerHTML = leoImg;

      break;

    case "january":
    case "jan":
    case "januar":
      txt.innerHTML = ariesTxt;
      art.innerHTML = ariesImg;

      break;

    case "february":
    case "feb":
    case "februar":
      txt.innerHTML = aquariusTxt;
      art.innerHTML = aquariusImg;

      break;
    case "march":
    case "mar":
    case "märz":
      txt.innerHTML = piscesTxt;
      art.innerHTML = piscesImg;

      break;
    case "april":
    case "apr":
      txt.innerHTML = capricornTxt;
      art.innerHTML = capricornImg;

      break;
    case "may":
    case "mai":
      txt.innerHTML = taurusTxt;
      art.innerHTML = taurusImg;

      break;
    case "july":
    case "jul":
      txt.innerHTML = cancerTxt;
      art.innerHTML = cancerImg;

      break;
    case "september":
    case "sep":
    case "sept":
      txt.innerHTML = virgoTxt;
      art.innerHTML = virgoImg;

      break;
    case "october":
    case "oct":
    case "oktober":
      txt.innerHTML = libraTxt;
      art.innerHTML = libraImg;

      break;
    case "november":
    case "nov":
      txt.innerHTML = scorpioTxt;
      art.innerHTML = scorpioImg;

      break;

    case "december":
    case "dec":
    case "dezember":
    case "dec":
      txt.innerHTML = sagittariusTxt;
      art.innerHTML = sagittariusImg;

      break;

    default:
      txt.innerHTML = defaultTxt;
  }
}
