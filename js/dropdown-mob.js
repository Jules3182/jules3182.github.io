document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.parentElement.classList.toggle('open');
  });
});