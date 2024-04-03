import styles from "../components/OnSales/OnSalePage.module.css";
import OnSaleCard from "../components/OnSales/OnSaleCard";
import db from "../db";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";


function OnSalePage() {
    return(
        <>
        <NavBar />
        <Hero />
        <div className={styles.generalContainerOnSalePage}>
            <div className={styles.productsContainerOnSalePage}>
                {db.map((articules) => (
                    <OnSaleCard
                        key={articules.id}
                        title={articules.title}
                        price={articules.price}
                        image={articules.images[0]}
                    />
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
    
}

export default OnSalePage;