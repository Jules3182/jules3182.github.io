const categoryButtons = document.querySelectorAll('.category-buttons button');
const gridItems = document.querySelectorAll('.grid-item');
const categoryTexts = document.querySelectorAll('.category-text');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    categoryTexts.forEach((text) => {
      const textCategory = text.getAttribute('data-category');

      if (textCategory === selectedCategory) {
        text.classList.add('active')
      } else {
        text.classList.remove('active');
      }
    });

    gridItems.forEach((item) => {
      const itemCategories = item
        .getAttribute('data-category')
        .split(' ');

      item.style.display =
        selectedCategory === 'all' ||
        itemCategories.includes(selectedCategory)
          ? 'block'
          : 'none';
    });
  });
});
