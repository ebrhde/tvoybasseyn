if(document.querySelector('.product')&&document.querySelector('.open_modelsDropdown')) {
    document.querySelector('.open_modelsDropdown').onclick = function(evt) {
        evt.preventDefault();
        document.querySelector('.product__modelDropdowns').classList.toggle('opened');
    }
}

if (document.querySelector('.product__power-list')) {
    let produc = document.querySelectorAll('.product__power-list .product__power-item');
    for (var i = 0; i < produc.length; i++) {
        produc[i].addEventListener('click', function () {
            document.querySelector('.product__power-item--active').classList.remove('product__power-item--active');
            this.classList.add('product__power-item--active');
        })
    }
};