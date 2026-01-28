const categoryButtons = document.querySelectorAll('.category-buttons button');
const gridItems = document.querySelectorAll('.grid-item');
const categoryTexts = document.querySelectorAll('.category-text');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    categoryTexts.forEach((text) => {
      text.classList.toggle(
        'active',
        text.getAttribute('data-category') === selectedCategory
      );
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
