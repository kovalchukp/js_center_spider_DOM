'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const leftPosition = (wall.offsetWidth - spider.offsetWidth) / 2;

  const topPosition = (wall.offsetHeight - spider.offsetHeight) / 2;

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
