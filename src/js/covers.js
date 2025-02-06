export const messageFunctionCov = function(){
    console.log("this is covers");
};

    document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [
      { href: '../img/imgJPEG/coversImg/coversImg1.jpg', alt: 'PowerPulse' },
      { href: '../img/imgJPEG/coversImg/coversImg2.jpg', alt: 'MIMINO' },
      { href: '../img/imgJPEG/coversImg/coversImg3.jpg', alt: 'Ukrainian Art' },
      { href: '../img/imgJPEG/coversImg/coversImg4.jpg', alt: 'GREEN.HARVEST' },
      { href: '../img/imgJPEG/coversImg/coversImg5.jpg', alt: 'WALLET' },
      { href: '../img/imgJPEG/coversImg/coversImg6.jpg', alt: 'chego jewelry' },
      { href: '../img/imgJPEG/coversImg/coversImg7.jpg', alt: 'energy.flow' },
      { href: '../img/imgJPEG/coversImg/coversImg8.jpg', alt: 'fruitbox' },
      { href: '../img/imgJPEG/coversImg/coversImg9.jpg', alt: 'englishexcellence' }
  ];

    const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

    coversImages.forEach(({ href, alt }) => {
    rows.forEach(row => {
      const coverItem = document.createElement('li');
      coverItem.className = 'covers-item';

      const coverLink = document.createElement('a');
      coverLink.className = 'covers-link';
      coverLink.href = href;

      const coverImage = document.createElement('img');
      coverImage.className = 'covers-image';
      coverImage.src = href;
      coverImage.alt = alt;

      coverLink.appendChild(coverImage);
      coverItem.appendChild(coverLink);
      row.appendChild(coverItem.cloneNode(true));
    });
  });
});
