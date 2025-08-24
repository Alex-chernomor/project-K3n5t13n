import coversImg1 from '../img/imgJPEG/coversImg/coversImg1.jpg';
import coversImg1x2 from '../img/imgJPEG/coversImg/coversImg1@2x.jpg';

import coversImg2 from '../img/imgJPEG/coversImg/coversImg2.jpg';
import coversImg2x2 from '../img/imgJPEG/coversImg/coversImg2@2x.jpg';

import coversImg3 from '../img/imgJPEG/coversImg/coversImg3.jpg';
import coversImg3x2 from '../img/imgJPEG/coversImg/coversImg3@2x.jpg';

import coversImg4 from '../img/imgJPEG/coversImg/coversImg4.jpg';
import coversImg4x2 from '../img/imgJPEG/coversImg/coversImg4@2x.jpg';

import coversImg5 from '../img/imgJPEG/coversImg/coversImg5.jpg';
import coversImg5x2 from '../img/imgJPEG/coversImg/coversImg5@2x.jpg';

import coversImg6 from '../img/imgJPEG/coversImg/coversImg6.jpg';
import coversImg6x2 from '../img/imgJPEG/coversImg/coversImg6@2x.jpg';

import coversImg7 from '../img/imgJPEG/coversImg/coversImg7.jpg';
import coversImg7x2 from '../img/imgJPEG/coversImg/coversImg7@2x.jpg';

import coversImg8 from '../img/imgJPEG/coversImg/coversImg8.jpg';
import coversImg8x2 from '../img/imgJPEG/coversImg/coversImg8@2x.jpg';

import coversImg9 from '../img/imgJPEG/coversImg/coversImg9.jpg';
import coversImg9x2 from '../img/imgJPEG/coversImg/coversImg9@2x.jpg';

import coversImg10 from '../img/imgJPEG/coversImg/coversImg10.jpg';
import coversImg10x2 from '../img/imgJPEG/coversImg/coversImg10@2x.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [
    { src: coversImg1, src2x: coversImg1x2, alt: 'PowerPulse' },
    { src: coversImg2, src2x: coversImg2x2, alt: 'MIMINO' },
    { src: coversImg3, src2x: coversImg3x2, alt: 'Ukrainian Art' },
    { src: coversImg4, src2x: coversImg4x2, alt: 'GREEN.HARVEST' },
    { src: coversImg5, src2x: coversImg5x2, alt: 'WALLET' },
    { src: coversImg6, src2x: coversImg6x2, alt: 'chego jewelry' },
    { src: coversImg7, src2x: coversImg7x2, alt: 'energy.flow' },
    { src: coversImg8, src2x: coversImg8x2, alt: 'fruitbox' },
    { src: coversImg9, src2x: coversImg9x2, alt: 'englishexcellence' },
    { src: coversImg10, src2x: coversImg10x2, alt: 'StarlightStudio' },
  ];

  const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

  function createCoverItem({ src, src2x, alt }) {
    return `
      <li class="covers-item">
        <a class="covers-link" href="${src}">
          <img class="covers-image"
               src="${src}"
               srcset="${src} 1x, ${src2x} 2x"
               alt="${alt}"
               loading="lazy">
        </a>
      </li>
    `;
  }

  function addImagesToRow(row, images, isOrdered) {
    let usedImages = [];
    let rowContent = '';

    if (isOrdered) {
      images.forEach(image => {
        rowContent += createCoverItem(image);
      });
    } else {
      const shuffledImages = [...images].sort(() => 0.5 - Math.random());
      shuffledImages.forEach(image => {
        if (usedImages.includes(image.src)) return;
        rowContent += createCoverItem(image);
        usedImages.push(image.src);
      });
    }

    row.innerHTML = rowContent;

    row.querySelectorAll('.covers-item').forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 100);
    });
  }

  rows.forEach((row, index) => {
    addImagesToRow(row, coversImages, index === 0);
  });

  const coversSection = document.querySelector('.covers-gallery');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rows.forEach(row => row.classList.add('active'));
      } else {
        rows.forEach(row => row.classList.remove('active'));
      }
    });
  });

  observer.observe(coversSection);
});
