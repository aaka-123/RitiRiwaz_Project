
const wrapper = document.querySelector('.wrapper' );
const loginLink = document.querySelector('.male');
const registerLink = document.querySelector('.female');

registerLink.addEventListener('click', ()=> {
 wrapper.classList.add('active');

});

loginLink.addEventListener('click',()=> {
wrapper.classList.remove('active');

});