const categoryButtons = document.querySelectorAll('.category-buttons button');
const gridItems = document.querySelectorAll('.grid-item');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    gridItems.forEach((item) => {
      const itemCategories = item.getAttribute('data-category').split(' ');

      if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
