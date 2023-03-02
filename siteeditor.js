let url = window.location.href;
const optionCodes = [
    {name: 'Pro Nav', code: '609'}, 
    {name: 'Heated Seats', code: '494'}, 
    {name: 'Folding rear seats', code: '465'}, 
    {name: 'Harman Kardon sound system', code: '688'}, 
    {name: 'Heated steering wheel', code: '248'}, 
    {name: 'M Sport package', code: '337'}, 
    {name: 'Lights package', code: '563'}, 
]

if(url.startsWith('https://bimmer.work/vin') && url.endsWith('options/')){

    var rows = document.getElementsByTagName("b");
    const rowArray = Array.from(rows);
    const codes = rowArray.map(x => x.innerHTML);

    const topContainer = document.querySelectorAll('.container-fluid')[0];

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
    
    
    topContainer.insertAdjacentElement('afterend', div);
} else {
    console.log('Im not on bimmerwork vin options')
}