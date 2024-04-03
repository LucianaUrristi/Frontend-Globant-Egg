import ColumnFooter from "./ColumnFooter";
import styles from "./Footer.module.css";
import style from "../../views/Home.module.css";
/* ---objeto plano---


const objeto = {
    key1: value1,
    key2: value2,
    key3: value3
}
objeto.key1  o objeto["key1"] dos formas de acceder a un objeto en js


*/

function Footer() {
    const renderItem = (title, titleRef, items) => {
        return (
            <div className={styles.col}>
                <ul>
                    <li className={styles.colMainItem}>
                        <ColumnFooter title={title} href={titleRef} />
                    </li>
                    {items.map((item) => {
                        return (
                            <li>
                                <ColumnFooter title={item.title} href={item.href} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <>
            <footer className={styles.footer}>
                <div className={style.generalContainer}>
                    <div className={styles.footerContainer}>
                        {/* <!-- Este div va a organizar las columnas del footer --> */}
                        <div className={styles.columnsContainer}>
                            {renderItem("Ofertas", "/ofertas.html", [
                                { title: "Laptops", href: "/laptops.html" },
                                { title: "Audio", href: "/audio.html" },
                                { title: "Auriculares", href: "/auriculares.html" },
                            ])}

                            {renderItem("Cómo comprar", "como-comprar.html", [
                                { title: "Formas de pago", href: "/formas-de-pago.html" },
                                { title: "Envios", href: "/envios.html" },
                                { title: "Devoluciones", href: "/devoluciones.html" },
                            ])}

                            {renderItem("Costos y tarifas", "/costos-y-tarifas.html", [
                                { title: "Impuestos", href: "/impuestos.html" },
                                { title: "Facturación", href: "/facturacion.html" },
                            ])}

                            {renderItem("Mis pedidos", "/mis-pedidos.html", [
                                { title: "Pedir nuevamente", href: "/pedir-nuevamente.html" },
                                { title: "Lista de deseos", href: "/lista-de-deseos.html" },
                            ])}

                            <div className={styles.col}>
                                <ul>
                                    <li className={styles.colMainItem}>
                                        <ColumnFooter
                                            title="Garantía de Entrega"
                                            href="/garantia-de-entrega"
                                        />
                                    </li>
                                </ul>
                            </div>
                        

                            {/* <div className={styles.col}>
                    <ul>
                        <li className={styles.colMainItem}><ColumnFooter title="Ofertas" href="/ofertas.html" /></li>
                        <li><ColumnFooter title="Laptops" href="/laptops.html" /></li>
                        <li><ColumnFooter title="Audio" href="/audio.html" /></li>
                        <li><ColumnFooter title="Auticulares" href="/auriculares.html" /></li>
                    </ul>
                </div> */}
                            {/* <div className={styles.col}>
                                <ul>
                                    <li className={styles.colMainItem}>
                                        <ColumnFooter
                                            title="Cómo comprar"
                                            href="/como-comprar.html"
                                        />
                                    </li>
                                    <li>
                                        <ColumnFooter
                                            title="Formas de pago"
                                            href="/formas-de-pago.html"
                                        />
                                    </li>
                                    <li>
                                        <ColumnFooter title="Envios" href="/envios.html" />
                                    </li>
                                    <li>
                                        <ColumnFooter
                                            title="Devoluciones"
                                            href="/devoluciones.html"
                                        />
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className={styles.col}>
                                <ul>
                                    <li className={styles.colMainItem}>
                                        <ColumnFooter
                                            title="Costos y tarifas"
                                            href="/costos-y-tarifas.html"
                                        />
                                    </li>
                                    <li>
                                        <ColumnFooter title="Impuestos" href="/impuestos.html" />
                                    </li>
                                    <li>
                                        <ColumnFooter
                                            title="Facturación"
                                            href="/facturacion.html"
                                        />
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className={styles.col}>
                                <ul>
                                    <li className={styles.colMainItem}>
                                        <ColumnFooter
                                            title="Mis pedidos"
                                            href="/mis-pedidos.html"
                                        />
                                    </li>
                                    <li>
                                        <ColumnFooter
                                            title="Pedir nuevamente"
                                            href="/pedir-nuevamente.html"
                                        />
                                    </li>
                                    <li>
                                        <ColumnFooter
                                            title="Lista de deseos"
                                            href="/lista-de-deseos.html"
                                        />
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className={styles.col}>
                                <ul>
                                    <li className={styles.colMainItem}>
                                        <ColumnFooter
                                            title="Garantía de Entrega"
                                            href="/garantia-de-entrega"
                                        />
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className={styles.copyRight}>Curso de HTML + CSS 2023</div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
