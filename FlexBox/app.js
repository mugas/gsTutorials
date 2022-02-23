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

const anima = document.querySelector('.anima');
const animaBem = document.querySelector('.animabem')

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



anima.addEventListener('click', e => {
    console.log("hello")
    animaBem.classList.add('flex_align_content_space_evenly')
})









