'use strict';

//gediminas start
// div 2 --- "Why choose us?" section --- start
const div2Option1 = document.querySelector('.slections-option-1');
const div2Option2 = document.querySelector('.slections-option-2');
const div2Option3 = document.querySelector('.slections-option-3');
const div2Option4 = document.querySelector('.slections-option-4');

const div2Div1 = document.querySelector('.selected-div-1');
const div2Div2 = document.querySelector('.selected-div-2');
const div2Div3 = document.querySelector('.selected-div-3');
const div2Div4 = document.querySelector('.selected-div-4');

const allOptions = [div2Option1, div2Option2, div2Option3, div2Option4];

function clearForDiv2() {
  allOptions.forEach(el => {
    el.querySelector('.sel-indicator').style.background = 'transparent';
    el.style.color = '#2F353F4D';
  });
}

div2Option1.addEventListener('click', () => {
  clearForDiv2();
  div2Option1.querySelector('.sel-indicator').style.background = '#2E2BD0';
  div2Option1.style.color = '#2E2BD0';
  div2Div1.style.display = 'block';
  div2Div2.style.display = 'none';
  div2Div3.style.display = 'none';
  div2Div4.style.display = 'none';
});

div2Option2.addEventListener('click', () => {
  clearForDiv2();
  div2Option2.querySelector('.sel-indicator').style.background = '#2E2BD0';
  div2Option2.style.color = '#2E2BD0';
  div2Div1.style.display = 'none';
  div2Div2.style.display = 'block';
  div2Div3.style.display = 'none';
  div2Div4.style.display = 'none';
});

div2Option3.addEventListener('click', () => {
  clearForDiv2();
  div2Option3.querySelector('.sel-indicator').style.background = '#2E2BD0';
  div2Option3.style.color = '#2E2BD0';
  div2Div1.style.display = 'none';
  div2Div2.style.display = 'none';
  div2Div3.style.display = 'block';
  div2Div4.style.display = 'none';
});

div2Option4.addEventListener('click', () => {
  clearForDiv2();
  div2Option4.querySelector('.sel-indicator').style.background = '#2E2BD0';
  div2Option4.style.color = '#2E2BD0';
  div2Div1.style.display = 'none';
  div2Div2.style.display = 'none';
  div2Div3.style.display = 'none';
  div2Div4.style.display = 'block';
});
// div 2 --- "Why choose us?" section --- end
//gediminas end