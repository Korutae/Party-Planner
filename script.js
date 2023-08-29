//I got the data to display but was having trouble with the buttons.

let state = [];

const ul = document.querySelector("ul");


function renderParty(){
    const html = state.map(function(product){
        console.log(product);
        return `
        <li>
        <h2>${ product.name }</h2>
        <p>${product.date}</p>
        <p>${product.location}</p>
        <p>${product.description}</p>
        </li>
        `;
    }).join('');
    console.log(html);
    ul.innerHTML = html;
}

async function getParty(){
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
        const json = await response.json();
        state = json.data;
        renderParty();
    } catch (error) {
        console.error(error);
    }
}

async function render(){
    await getParty();
    renderParty();
}

deleteParty.addEventListener("click", () => {
    state.splice(0);
})

renderParty();
getParty();
render();
console.log(ul);