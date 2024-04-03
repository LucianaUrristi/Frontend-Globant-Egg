import styles from "./Hero.module.css";


function Hero() {
    
    return(
        
        <section className={styles.hero}>
            <div className={styles.heroGeneralContainer}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroTitleContainer}>
                        <span className={styles.span}> tecnología</span>
                        <span className={styles.span}> renovada</span>
                    </div>
                </div>
            </div>
        </section>        
    );
}
export default Hero;