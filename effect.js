let text = document.getElementById('text');
let hill4 = document.getElementById('h4');
let leaf = document.getElementById('leaf');
let hill5 = document.getElementById('h5');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginBottom = value * 0.9 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px'; 
    hill4.style.left = value *  -1.05 + 'px';
    hill5.style.left = value * +1.05 + 'px';
});