document.addEventListener('DOMContentLoaded', function () {
    // URL de la API de cotización de dólar
    const apiUrl = 'https://dolarapi.com/v1/dolares';

    // Realizar una solicitud GET a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la respuesta de la API');
            }
            return response.json(); // Convierte la respuesta en un objeto JSON
        })
        .then(data => {
            // Tipo de cotización deseado
            const tipoCotizacion = "Oficial";

            // Busca la cotización basada en el tipo deseado
            const cotizacionDeseada = data.find(item => item.nombre === tipoCotizacion);

            // Verifica si se encontró la cotización deseada
            if (cotizacionDeseada) {
                const usdExchangeRate = cotizacionDeseada.venta;
                document.getElementById('cotizacion').textContent = `1 USD (${tipoCotizacion}) = ${usdExchangeRate} unidades de la moneda base`;
            } else {
                document.getElementById('cotizacion').textContent = `Cotización "${tipoCotizacion}" no encontrada`;
            }
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
});
