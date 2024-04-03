import styles from "./ColumnFooter.module.css"

function ColumnFooter(props){
    const {title, href} = props;
    return(
        
            <a className={styles.items} href={href}>
            {title}
            </a>
        
        
    );
}
export default ColumnFooter;