let selectedRatings = null;

const hideRating = document.getElementById('hide-ratings');
const showRating = document.getElementById('show-ratings');
const submit = document.getElementById('btn');
const items = document.querySelectorAll('.item');
const selectedNumber = document.getElementById('selected-number');


items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(itemz => {
            itemz.style.backgroundColor = 'hsla(217, 12%, 63%, 0.3)';
            itemz.style.color = 'hsl(0, 100%, 100%)';
        })
        item.style.backgroundColor = 'hsl(0, 100%, 100%)';
        item.style.color = 'hsl(216, 12%, 8%)';

        selectedRatings = item.textContent;
    });
});


submit.addEventListener('click', () => {
    if (selectedRatings !== null ) {
        selectedNumber.textContent = selectedRatings;
        hideRating.style.display = 'none';
        showRating.style.display = 'block';
    } else {
        alert('please enter a number')
    }
});
