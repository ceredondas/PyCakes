let buttons = document.querySelectorAll('button');
let products = document.querySelectorAll('.product');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    products.forEach(product => {
      product.style.display = product.id === e.target.dataset.product ? 'block' : 'none';
    });
  }); 
});