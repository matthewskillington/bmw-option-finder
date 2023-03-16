let url = window.location.href;
const optionCodes = [
    {name: 'Heated Seats', code: '494'}, 
    {name: 'Folding rear seats', code: '465'},
    {name: 'Pro Nav', code: '609'}, 
    {name: 'Harman Kardon sound system', code: '688'},
    {name: 'Led Headlights', code: '5A2'}, 
    {name: 'Heated steering wheel', code: '248'}, 
    {name: 'Sport brake calipers', code: '2NH'},
    {name: '19 inch alloys', code: '2PF'},
    {name: '5 Spoke 19 inch alloys', code: '21C'},
    {name: 'M Sport package', code: '337'}, 
    {name: 'Shadow edition', code: '7B3'},
    {name: 'Lights package', code: '563'}, 
    {name: '6wa (Extended) Instrument Cluster', code: '6WA'}, 
    {name: '6wb (Digital) Instrument Cluster', code: '6WB'}, 
    
    
]

if(url.startsWith('https://bimmer.work/vin') && url.endsWith('options/')){

    var rows = document.getElementsByTagName("b");
    const rowArray = Array.from(rows);
    const codes = rowArray.map(x => x.innerHTML);

    const topContainer = document.querySelectorAll('.container-fluid')[0];

    // Create the DOM elements
    const div = document.createElement('div');
    div.classList = ['col-lg-12 container'];
    optionCodes.map((x) => {
        const text = document.createElement("p");
        if(codes.includes(x.code)){
            text.textContent = `${x.name} ✅`
        } else {
            text.textContent = `${x.name} ❌`
        }
        div.appendChild(text);
    })
    
    //Append the dom elements to the site
    topContainer.insertAdjacentElement('afterend', div);
} 


if(url.startsWith('https://chipex.co.uk/pages/registration-lookup')){

    const startIndexOfVin = url.indexOf('VIN=') + 4;
    const endIndexOfVin = url.indexOf('&type');

    const vin = url.substring(startIndexOfVin, endIndexOfVin);

    const unorderedList = document.querySelector('.car-lookup-info');

    // Create the DOM elements
    const listItem = document.createElement('li');
    listItem.innerText = `VIN: ${vin}`;
    unorderedList.insertAdjacentElement('afterend', listItem);
}
