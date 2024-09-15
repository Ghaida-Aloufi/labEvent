
  let width = document.getElementById('width');
  let height= document.getElementById('height');
  let color = document.getElementById('color');
  let borderRadius = document.getElementById('border');
  let squa = document.getElementById('squ');
  let reset = document.getElementById('res');

document.addEventListener('click', () => {

let defaultWidth = 40;
let defaultHeight = 30;
let defaultColor = 'blue';
let defaultRadius = 0;

function reset() {
  width.value = defaultWidth;
  height.value = defaultHeight;
  color.value = defaultColor;
  borderRadius.value = defaultRadius;

}

width.addEventListener('input', squa.style.width = width.value);
height.addEventListener('input', squa.style.height = height.value);
color.addEventListener('input', squa.style.backgroundColor = color.value);
borderRadius.addEventListener('input', squa.style.borderRadius = borderRadius.value);
reset.addEventListener('click', reset);


});


