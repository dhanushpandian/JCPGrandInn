// HERO slider
(function(){
  const slides = document.getElementById('heroSlides');
  const total = slides.children.length;
  let i=0;
  function show(idx){
    slides.style.transform = `translateX(${-idx*100}%)`;
  }
  function next(){ i = (i+1) % total; show(i); }
  let t = setInterval(next,2000);
  slides.parentElement.addEventListener('mouseenter', ()=> clearInterval(t));
  slides.parentElement.addEventListener('mouseleave', ()=> t = setInterval(next,3000));
})();

// LIGHTBOX
(function(){
  const masonry = document.getElementById('masonry');
  const light = document.getElementById('lightbox');
  const lightImg = document.getElementById('lightboxImg');
  const thumbs = document.getElementById('lightThumbs');
  const closeBtn = document.getElementById('closeLight');

  const imgs = Array.from(masonry.querySelectorAll('img')).map(img=>img.src);

  imgs.forEach((src, idx)=>{
    const t = document.createElement('img');
    t.src = src; t.loading='lazy'; t.dataset.index = idx;
    t.addEventListener('click', ()=> showIndex(idx) );
    thumbs.appendChild(t);
  });

  function showIndex(idx){
    lightImg.src = imgs[idx];
    light.classList.add('open');
  }

  masonry.addEventListener('click', e=>{
    if(e.target.tagName==='IMG'){
      const idx = imgs.indexOf(e.target.src);
      showIndex(idx);
    }
  });

  closeBtn.addEventListener('click', ()=> light.classList.remove('open'));
})();
