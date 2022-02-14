const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const flexEnd = document.querySelector('.flex_end');
        const flexCenter = document.querySelector('.center');
        const flexSpaceBetween = document.querySelector('.space_between');
        const flexSpaceAround = document.querySelector('.space_around');
        const flexSpaceEvenly = document.querySelector('.space_evenly');
        const flexAlignEnd = document.querySelector('.flex_align_end');
        const flexAlignCenter = document.querySelector('.flex_align_center');
        const flexAlignStretch = document.querySelector('.flex_align_stretch');
        const flexAlignBaseline = document.querySelector('.flex_align_baseline');

        if (entry.isIntersecting) {
            flexEnd.classList.add('flex_end_animation');
            flexCenter.classList.add('flex_center_animation');
            flexSpaceBetween.classList.add('flex_space_between_animation');
            flexSpaceAround.classList.add('flex_space_around_animation');
            flexSpaceEvenly.classList.add('flex_space_evenly_animation');
            flexAlignEnd.classList.add('flex_align_end_animation');
            flexAlignCenter.classList.add('flex_align_center_animation');
            flexAlignStretch.classList.add('flex_align_stretch_animation');
            flexAlignBaseline.classList.add('flex_align_baseline_animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        flexEnd.classList.remove('flex_end_animation');
        flexCenter.classList.remove('flex_center_animation');
        flexSpaceBetween.classList.remove('flex_space_between_animation');
        flexSpaceAround.classList.remove('flex_space_around_animation');
        flexSpaceEvenly.classList.remove('flex_space_evenly_animation');
        flexAlignEnd.classList.remove('flex_align_end_animation');
        flexAlignCenter.classList.remove('flex_align_center_animation');
        flexAlignStretch.classList.remove('flex_align_stretch_animation');
        flexAlignBaseline.classList.remove('flex_align_baseline_animation');
    });
});

observer.observe(document.querySelector('.justify_content'));
















/* const observer = new IntersectionObserver(entries => {
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

secondObserver.observe(document.querySelector('.initial')); */

