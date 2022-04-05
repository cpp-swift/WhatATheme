function expand(card) {
    card.classList.toggle('testimonial--expanded');

    // If card is not expanded after toggle, add 'unexpanded' class
    if (!card.classList.contains('testimonial--expanded')) card.classList.toggle('testimonial--unexpanded');
    // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
    else if (card.classList.contains('testimonial--expanded') && card.classList.contains('testimonial--unexpanded')) card.classList.toggle('testimonial--unexpanded');
}
