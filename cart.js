function updateCart() {
            var subtotal = 0;
            var items = document.querySelectorAll('.cart-page table tr:not(:first-child)');
            items.forEach(function (item) {
                var price = parseFloat(item.querySelector('.cart-info small').innerText.replace('Price: $', ''));
                var quantity = parseInt(item.querySelector('.quantity').value);
                var itemSubtotal = price * quantity;
                item.querySelector('.item-subtotal').innerText = '$' + itemSubtotal.toFixed(2);
                subtotal += itemSubtotal;
            });
            document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(2);
            document.getElementById('total').innerText = '$' + (subtotal + 35).toFixed(2);
        }

        function removeItem(event) {
            event.preventDefault();
            var row = event.target.closest('tr');
            row.remove();
            updateCart();
        }

        var removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(function (button) {
            button.addEventListener('click', removeItem);
        });

        var quantityInputs = document.querySelectorAll('.quantity');
        quantityInputs.forEach(function (input) {
            input.addEventListener('change', updateCart);
            input.addEventListener('input', updateCart);
        });

        updateCart();
