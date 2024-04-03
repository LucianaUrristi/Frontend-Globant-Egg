/* /src/components/NavBar.tsx */
import styles from "./NavBar.module.css"
import NavButton from "./NavButton";


function NavBar(){
    const renderNav = (items) => {
        return (
            <div className={styles.nav}>
                <ul>
                    {items.map((item) => {
                        return (
                            <li>
                                <NavButton title={item.title} href={item.href} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );}
return (
    <>
        <header className={styles.header}>
            <div className={styles.navGeneralContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.search}>
                        {/* <!-- logo y formulario de busqueda --> */}
                        <div className={styles.logo}>
                            <a href="/">
                            <img
                                src="/tiendamia-logo.svg"
                                width="218"
                                alt="Logo store"
                            /></a>
                                                        
                        </div>
                        <div className={styles.form}>
                            <form>
                                <input type="text" placeholder="Search" />
                            </form>
                        </div>
                        <div className={styles.social}>
                            <ul>
                                <li><a href="https://facebook.com"><img src="/facebook.png" alt="Logo social"/></a></li>
                                <li><a href="https://instagram.com"><img src="/instagram.png" alt="Logo social"/></a></li>
                                <li><a href="/cart"><img src="/cart.png" alt="Carrito"/></a></li>
                            </ul>
                        </div>
                    </div>
                    {renderNav([{ title: "Ofertas de la semana", href: "/ofertas.html" },
                                { title: "Cómo comprar", href: "/como-comprar.html" },
                                { title: "Costos y tarifas", href: "/costos.html" },
                                { title: "Mis pedidos", href: "/pedidos.html" },
                                { title: "Invita y gana", href: "/invita-y-gana.html" },
                                { title: "Garantía de Entrega", href: "/garantia-de-antrega.html" },
                            ])}
                    {/* <div className={styles.nav}>
                        <ul>
                            <li><NavButton title="Ofertas de la semana" href="/ofertas.html" /></li>
                            <li><NavButton title="Cómo comprar" href="/como-comprar.html" /></li>
                            <li><NavButton title="Costos y tarifas" href="/costos.html" /></li>
                            <li><NavButton title="Mis pedidos" href="/pedidos.html" /></li>
                            <li><NavButton title="Invita y gana" href="/invita-y-gana.html" /></li>
                            <li><NavButton title="Garantía de Entrega" href="/garantia-de-antrega.html" /></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            </header>
        </>
    );
}
export default NavBar;