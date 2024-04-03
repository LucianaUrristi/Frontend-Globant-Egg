/* /src/views/Home.tsx */
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";
import ProductCard from "../components/Product/ProductCard";
import db from "../db";


function Home() {

    return (
        <>
            <NavBar />
            <Hero />
            <div className={styles.generalContainer}>        
                <div className={styles.productsContainer}>
                    {db.map((articules) => (
                        <ProductCard
                            key={articules.id}
                            id={articules.id}
                            title={articules.title}
                            price={articules.price}
                            color={articules.colors[0]}
                            image={articules.images[0]}
                        />
                    ))}
                </div>
            </div>

            < Footer />
        </>
    );
}

export default Home;
