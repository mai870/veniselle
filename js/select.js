const selectInputs = document.querySelectorAll('.form__input--select');

function handleSelectChange(selectElement) {
    let selectedValue = selectElement.value;
    let selectClass = 'international';

    if (selectedValue === 'MX') {
        selectClass = 'local';
    } else {
        selectClass = 'international';
    }

    selectElement.classList.remove('local', 'international');
    selectElement.classList.add(selectClass);
}

selectInputs.forEach(selectInput => {
    selectInput.addEventListener('change', function () {
        handleSelectChange(this);
    });

    setTimeout(function () {
        handleSelectChange(selectInput);
    }, 3000);
});