setTimeout(()=>{
    alert("DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is NOT the official site of the company or brand identified on the page. The creator of this page is NOT affiliated with the company or brand in any way. This page is a personal project made in connection with an educational exercise.");

},1000)


gsap.set(".image img", { opacity: 0, x: 100 });
gsap.set(".a", { opacity: 0, x: -100 });
gsap.to(".image img", {  x: -40,opacity:1, duration: 1 });
gsap.to(".a", {  x:40,opacity:1, duration: 1 });

// gsap.to(".right", {  x: -60, duration: 1 });
// gsap.to(".left", {  x: 60, duration: 1 });