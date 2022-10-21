const rowReverse = document.querySelector('.row_reverse_button');
const rowReverseAnimation = document.querySelector('.row_reverse');
const columnButtton = document.querySelector('.column_button');
const columnAnimation = document.querySelector('.column');
const columnRreverseButton = document.querySelector('.column_reverse_button');
const columnReverseAnimation = document.querySelector('.column_reverse');
const justifyFlexEndButton = document.querySelector('.flex_end_button');
const flexEndAnimation = document.querySelector('.flex_end');
const justifyCenterButton = document.querySelector('.justify_center_button');
const justifyCenterAnimation = document.querySelector('.center');
const spaceBetweenButton = document.querySelector('.space_between_button')
const spaceBetweenAnimation = document.querySelector('.space_between')
const spaceAroundButton = document.querySelector('.space_around_button');
const spaceAroundAnimation = document.querySelector('.space_around');
const spaceEvenlyButton = document.querySelector('.space_evenly_button')
const spaceEvenlyAnimation = document.querySelector('.space_evenly')
const alignEndButton = document.querySelector('.align_end_button')
const alignEndAnimation = document.querySelector('.flex_align_end')
const alignCenterButton = document.querySelector('.align_center_button')
const alignCenterAnimation = document.querySelector('.flex_align_center')
const alignStretchButton = document.querySelector('.align_stretch_button')
const alignStretchAnimation = document.querySelector('.flex_align_stretch')
const alignBaselineButton = document.querySelector('.align_baseline_button')
const alignBaselineAnimation = document.querySelector('.flex_align_baseline')
const alignContentEndButton = document.querySelector('.align_content_end_button')
const alignContentEndAnimation = document.querySelector('.flex_align_content_end')
const alignContentCenterButton = document.querySelector('.align_content_center_button')
const alignContentCenterAnimation = document.querySelector('.flex_align_content_center')
const alignContentStretchButton = document.querySelector('.align_content_stretch_button')
const alignContentStretchAnimation = document.querySelector('.flex_align_content_stretch')
const alignContentSpaceBetweenButton = document.querySelector('.align_content_space_between_button')
const alignContentSpaceBetweenAnimation = document.querySelector('.flex_align_content_space_between')
const alignContentSpaceEvenlyButton = document.querySelector('.align_content_space_evenly_button');
const alignContentSpaceEvenlyAnimation = document.querySelector('.flex_align_content_space_evenly')


alignContentEndButton.addEventListener('click', e => {
    alignContentEndAnimation.classList.add('flex_align_content_end_animation')
})
alignContentCenterButton.addEventListener('click', e => {
    alignContentCenterAnimation.classList.add('flex_align_content_center_animation')
})
alignContentStretchButton.addEventListener('click', e => {
    alignContentStretchAnimation.classList.add('flex_align_content_stretch_animation')
})
alignContentSpaceBetweenButton.addEventListener('click', e => {
    alignContentSpaceBetweenAnimation.classList.add('flex_align_content_space_between_animation')
})

alignContentSpaceEvenlyButton.addEventListener('click', e => {
    alignContentSpaceEvenlyAnimation.classList.add('flex_align_content_space_evenly_animation')
})




//Event Listener of Flex Direction
rowReverse.addEventListener('click', e => {
    rowReverseAnimation.classList.add('row_reverse_animation')
    console.log("hello")
});

columnButtton.addEventListener('click', e => {
    columnAnimation.classList.add('column_animation')
})

columnRreverseButton.addEventListener('click', e => {
    columnReverseAnimation.classList.add('column_reverse_animation')
})

rowReverse.addEventListener('click', e => {
    rowReverseAnimation.classList.add('row_reverse_animation')
});

//Event Listeners of Justify Content

justifyFlexEndButton.addEventListener('click', e => {
    flexEndAnimation.classList.add('flex_end_animation')
});


justifyCenterButton.addEventListener('click', e => {
    justifyCenterAnimation.classList.add('flex_center_animation')
});

spaceBetweenButton.addEventListener('click', e => {
    spaceBetweenAnimation.classList.add('flex_space_between_animation')
})

spaceAroundButton.addEventListener('click', e => {
    spaceAroundAnimation.classList.add('flex_space_around_animation')
})

spaceEvenlyButton.addEventListener('click', e => {
    spaceEvenlyAnimation.classList.add('flex_space_evenly_animation')
})



//Event Listeners of Align Items
alignEndButton.addEventListener('click', e => {
    alignEndAnimation.classList.add('flex_align_end_animation')
})

alignCenterButton.addEventListener('click', e => {
    alignCenterAnimation.classList.add('flex_align_center_animation')
})
alignStretchButton.addEventListener('click', e => {
    alignStretchAnimation.classList.add('flex_align_stretch_animation')
})
alignBaselineButton.addEventListener('click', e => {
    alignBaselineAnimation.classList.add('flex_align_baseline_animation')
})


//Event Listeners of Align Content











