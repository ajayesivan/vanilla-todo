function toggleLeftNav() {
  const leftNav = document.getElementById('leftNav');

  if(leftNav.classList.contains('open')) {
    leftNav.classList.remove('open');
  } else {
    leftNav.classList.add('open');
  }
}