import NavBar from '../components/Nav/NavBar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import styles from '../components/Cart/Cart.module.css'

function Cart() {

    return (
        <>
            <NavBar / >
            <Hero / > 
            
            <main>
                <button id="btn-discount" className={styles.btnPrimary}>
                    10% OFF
                </button>
                <div className={styles.cartContainer}>
                    <div className={styles.cardResume}>
                        <div>
                            <h2>Resumen del pedido</h2>
                            <div className={styles.subtotal}>
                                <h3>Subtotal</h3>
                                <strong className={styles.price}></strong>
                            </div>
                            <small>Incluye impuesto PAIS y percepción AFIP.</small>
                        </div>
                        <button className={styles.btnPrimary}>Finaliza tu compra</button>
                    </div>
                </div>
            </main>
            
            <Footer / >
                
            <script src="cart.js"></script>
        </>
    );
}

export default Cart;
