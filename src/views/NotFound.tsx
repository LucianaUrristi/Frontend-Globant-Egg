import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import styles from "../components/NotFound.module.css"

function NotFound(){
    return(
        <>
        <NavBar />
        <Hero />
        <main>
            <h1 className={styles.titulo}>NOT FOUND</h1>
        </main>
        <Footer />
        </>
    );
}

export default NotFound;