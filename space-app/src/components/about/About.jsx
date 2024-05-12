import Typography from '@mui/material/Typography';
import "./About.css";

function Card() {
    return <Info name="Giselle" apodo="Gis" formacion="Química de Alimentos" />  
}

function Info(props) {
    return (
        <>
        <div className="card-info">
             <Typography variant="h2"> About me </Typography>
            <p>Nombre: {props.name}</p>
            <p>Apodo: {props.apodo}</p>
            <p>Educación: {props.formacion}</p>

        </div>
        </>
       
    )
};


export default Card;



 

    



