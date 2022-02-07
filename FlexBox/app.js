const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.flex_end');

        if (entry.isIntersecting) {
            square.classList.add('flex_end_transform');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('flex_end_transform');
    });
});

observer.observe(document.querySelector('.initial'));


/* // Remove the transition class
const square = document.querySelector('.flex_end');
square.classList.remove('flex_end_transform');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('flex_end_transform');
            return;
        }

        square.classList.remove('flex_end_transform');
    });
});

observer.observe(document.querySelector('.initial')); */