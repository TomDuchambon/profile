banner = document.getElementsByClassName('content')[0];


window.addEventListener('scroll', () => {
  if (pageXOffset >= 429) {
    banner.style.opacity = '0';
  } else {
    banner.style.opacity = '1';
  }
});
