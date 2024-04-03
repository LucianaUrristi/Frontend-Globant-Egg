/* /src/components/NavButton.tsx */
import styles from "./NavButton.module.css"
import { Link } from "react-router-dom";

function NavButton(props){
    const {title, href} = props;
    return(
        
            <Link className={styles.link} to={href}>
            {title}
            </Link>
        
        
    );
}
export default NavButton;