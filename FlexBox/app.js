const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const firstFlex = document.querySelector('.flex_end');


        if (entry.isIntersecting) {
            firstFlex.classList.add('flex_end_animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        firstFlex.classList.remove('flex_end_animation');
    });
});

observer.observe(document.querySelector('.initial'));


const secondObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const secondFlex = document.querySelector('.center');


        if (entry.isIntersecting) {
            secondFlex.classList.add('flex_center_animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        secondFlex.classList.remove('flex_center_animation');
    });
});

secondObserver.observe(document.querySelector('.initial'));