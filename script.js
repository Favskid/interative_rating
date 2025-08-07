let selectedRatings = null;

const hideRating = document.getElementById('hide-ratings');
const showRating = document.getElementById('show-ratings');
const submit = document.getElementById('btn');
const items = document.querySelectorAll('.item');
const selectedNumber = document.getElementById('selected-number');

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        selectedRatings = item.textContent;
    })
})

submit.addEventListener('click', () => {
    if (selectedRatings !== null ) {
        selectedNumber.textContent = selectedRatings;
        hideRating.style.display = 'none';
        showRating.style.display = 'block';
    } else {
        alert('please enter a number')
    }
});
