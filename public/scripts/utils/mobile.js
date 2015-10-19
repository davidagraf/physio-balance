function isMobile() {
  return /iPhone|iPad|iPod|Android|IEMobile/i.test(navigator.userAgent);
}

if (isMobile()) {
  document.getElementByTagName('body').className = 'touch';
}
