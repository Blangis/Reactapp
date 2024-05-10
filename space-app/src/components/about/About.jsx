



const conoceme =[
    {
        name: "Giselle",
        color_fav: "red",
        interest: ["música"],

    }
];

function createElements() {
    const cardobj ={
        card : document.createElement("div"),
        name_section: document.createElement("h1"),
        color_section: document.createElement("p"),
        interest_section: document.createElement("p"),
    }
    return cardobj;
    
}



function tarjeta (props) {
    return(
    name_section.textContent = conoceme.name,
    color_section.textContent = conoceme.color_fav,
    interest_section = conoceme.interest,
    card.append(name_section, color_section, interest_section ))
   
     
    }

export default tarjeta;

    
/**
 * 
 * card_container.appendChild(card);
 * 
 * function Astro (props) {
   
    return (
        <div className="card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
        </div>
    );
}
 */


