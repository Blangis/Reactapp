import "./Navbar.css"
import { Link } from "react-router-dom"
import RocketIcon from "@mui/icons-material/Rocket";


function Navbar({header, links}){
    return(
        <nav>
            <div>
                <RocketIcon/>
                <h2>{header}</h2>
            </div>

            <div>
                {links.map((link)=>(
                    <Link className="link-style" to={link.link} key={link.id}>
                       {link.text}
                </Link>
                ))}
            </div>
        </nav>
    );
}
export default Navbar;
/**
 * style={{backgroundColor: "grey"}}>Logo</h2>
<h2 style={{backgroundColor: "purple"}}
 */

/**
 * 
function Navbar() {
    const iconStyles = {
        padding: "5px",
        color: "aqua",
    }
    return (
        <nav className="navbar">
        <div>
            Comento comentario*
            <h2 >Space-app</h2>
        </div>
        <div>
            <p style={iconStyle}>icon</p>
            <p style={iconStyles}>icon</p>
            <p style={iconStyles}>icon</p>
        </div>
        </nav>
    );
 */