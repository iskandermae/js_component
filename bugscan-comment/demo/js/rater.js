export function Rater(ratingElement){
    const stars = ratingElement.querySelectorAll('.star');

    const resetRating = ev => {
        const currentRating = ratingElement.getAttribute('data-rating');
        highlightRating(currentRating);
    }

    const highlightRating = (rating) => {
        stars.forEach(star => {
            star.style.color =
                rating >= star.getAttribute('data-value')
                    ?  'yellow'
                    :  'gray';            
        });
    }

    resetRating();

    const ratingOver = ev => {
        const currentRating = ev.currentTarget.getAttribute('data-value');
        highlightRating(currentRating);
    }
    const setRating = ev => {
        const currentRating = ev.currentTarget.getAttribute('data-value');
        ratingElement.setAttribute('data-rating', currentRating);
    }
    stars.forEach(star => {
        star.addEventListener('click', setRating)
        star.addEventListener('mouseover', ratingOver)
    });
    stars.forEach(star => {
        star.addEventListener('mouseout', resetRating)
    });
}