var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  console.log('Button has been clicked');

  let productArr = [...document.getElementsByClassName('products')];
  
  productArr.forEach(product => {
    let qty = product.children[2].children[0].children[0].value;
    console.log("Quatity ", qty);
    let prdct = product.children[1].children[0].children[0].innerHTML;
    console.log("Price ", prdct);

    let sub = product.children[3].innerHTML;
    console.log('Subtotal ', sub);

    sub = qty * prdct;
    product.children[3].innerHTML = sub;
    console.log('New Subtotal ', sub);
  });
}

function calcAll() {

}

$calc.onclick = calcAll;

