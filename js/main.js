const links = document.querySelectorAll('.navListItem');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => link.classList.remove('listActive'));
    this.classList.add('listActive');
  });
});