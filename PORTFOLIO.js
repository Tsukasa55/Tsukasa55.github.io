function lazyLoad() {
    const images = document.querySelectorAll('img');
    const viewHeight = window.innerHeight;
    images.forEach((image) => {
      const rect = image.getBoundingClientRect();
      if (rect.top <= viewHeight && rect.bottom >= 0 && !image.src) {
        image.src = image.dataset.src;
      }
    });
  }
  
  window.addEventListener('scroll', lazyLoad);
  