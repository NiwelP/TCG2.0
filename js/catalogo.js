
document.getElementById('applyDiscountBtn').addEventListener('click', function () {

        Swal.fire({
            icon: 'success',
            title: 'Descuento aplicado!',
            text: '¡Gracias por suscribirte! Tu código de descuento se enviará a ' + document.getElementById('emailInput').value,
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "catalogo.html";
                $('#exampleModal').modal('hide');
            }
        });
    });

