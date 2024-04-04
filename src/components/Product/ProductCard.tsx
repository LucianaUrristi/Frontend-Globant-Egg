import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";


function ProductCard(props) {
    const {id, title, color, price, image } = props
    return (
        <>
            
                <Link to={"/product/"+id} className={styles.pCProductCard}>
                    <img className={styles.pCImg} src={ image } alt={ id } />
                    <div className={styles.pCInfo}>
                        <span className={styles.pCTitle}>{ title }</span>
                        <span className={styles.pCDescription}>{ color }</span>
                        <div className={styles.pCPriceBlock}>
                            <span className={styles.pCPrice}> ${ price }</span>
                            {/* <span className={styles.pCDiscount}>50% Off</span> */}
                        </div>
                        <div className={styles.pCTaxPolicy}>
                            Incluye impuesto País y percepción AFIP
                        </div>
                    </div>
                </Link>
            
        </>
    );
}

export default ProductCard;
