document.getElementById('brakingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const brakingDistance = parseFloat(document.getElementById('brakingDistance').value);
    const surface = document.getElementById('surface').value;
    const resultElement = document.getElementById('result');

    if (isNaN(brakingDistance) || brakingDistance <= 0) {
        resultElement.textContent = 'Masukkan panjang rem yang valid!';
        return;
    }

    let coefficient = 0;
    if (surface === 'aspal') {
        coefficient = 7;
    } else if (surface === 'beton') {
        coefficient = 5;
    }

    const result = Math.sqrt(brakingDistance  * 2 * coefficient  )* 3.6 .toFixed(2);
    resultElement.textContent = `Hasil: ${result} km/jam`;
});
