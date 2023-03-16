const url = window.location.href;

const CHIPEX_CAR_LOOKUP_CLASS = '.car-lookup-info';
const VIN_PREFIX = 'VIN=';
const VIN_POSTFIX = '&type';

if(url.startsWith('https://chipex.co.uk/pages/registration-lookup')){

    const startIndexOfVin = url.indexOf(VIN_PREFIX) + 4;
    const endIndexOfVin = url.indexOf(VIN_POSTFIX);

    const vin = url.substring(startIndexOfVin, endIndexOfVin);

    const unorderedList = document.querySelector(CHIPEX_CAR_LOOKUP_CLASS);

    // Create the DOM elements
    const listItem = document.createElement('li');
    listItem.innerText = `Copied ${vin} to clipboard`;
    navigator.clipboard.writeText(vin);
    unorderedList.insertAdjacentElement('afterend', listItem);
}
