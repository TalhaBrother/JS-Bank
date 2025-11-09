setTimeout(()=>{
 Swal.fire({
    icon: 'info',
    title: 'DISCLAIMER',
    text: 'THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This is NOT the official site of the company or brand identified on the page. The creator of this page is NOT affiliated with the company or brand in any way. This page is a personal project made in connection with an educational exercise.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6'
  });
},1000)


// Check if screen width is greater than 480px (only desktop/tablet)
if (window.innerWidth > 480) {
  // GSAP animations
  gsap.set(".image img", { opacity: 0, x: 100 });
  gsap.set(".a", { opacity: 0, x: -100 });

  gsap.to(".image img", { x: -40, opacity: 1, duration: 1 });
  gsap.to(".a", { x: 40, opacity: 1, duration: 1 });
}


