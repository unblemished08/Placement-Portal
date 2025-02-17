window.onload = () => {
    gsap.to(".logo", { opacity: 1, scale: 1, duration: 0.5 });
    gsap.to(".title", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
    gsap.to(".description", { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
  
    document.querySelectorAll(".role").forEach((role, index) => {
      gsap.to(role, { opacity: 1, scale: 1, duration: 0.4, delay: 0.6 + index * 0.1 });
    });
  };
  