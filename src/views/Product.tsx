import style from "../components/Product/Product.module.css";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import DB from "../db";


function Product() {
    const { id } = useParams();
    const product = DB.find((each) => each.id === id);
    if (product) {
        return <>

            <span className={style.productDescriptionBlock}>{product.title}</span>
            <form className={style.selector}>
                <fieldset>
                    <label className={style.label} htmlFor="color">Color</label>
                    <select id="color" defaultValue="Selecciona un color" >
                        {product.colors.map(each => <option key={each} value={each}>{each}</option>)}

                    </select>
                </fieldset>
                <fieldset>
                    <label className={style.label} htmlFor="size">Tamaño</label>
                    <select id="size" defaultValue="Selecciona un tamaño" >
                        {DB.size.map(each => <option key={each} value={each}>{each}</option>)}

                    </select>
                </fieldset>

            </form>
            <span className={style.label}>{product.description}</span>


        </>
    }
    return (

        <body>
            <NavBar />
            <Hero />


            <main>
                <div className={style.productContainerProduct}>
                    <div className={style.productColumnsContainer}>
                        <div className={style.productsImagenes}>
                            {/* <!-- VARIOS DIV PARA LAS MINIATURAS DE LAS IMAGENES --> */}
                            <div>
                                <div className={style.productImagesBlock}>
                                    <div className={style.productsThumbnailContainer}>
                                        <img className={style.productsThumbnail} src="../public/mock1.jpg" alt="" />
                                    </div>
                                    <div className={style.productsThumbnailContainer}>
                                        <img className={style.productsThumbnail} src="../public/mock2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.productsThumbnailContainer}>
                                <img id="selectedThumbnail" src="../public/mock1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={style.productsDescriptionBlock}>
                            <h1 className={style.title} id="title">
                                Apple iPhone XR,64 GB, Black - Fully Unlocked (Refurbished)
                            </h1>
                            <form className={style.selector}>
                                <fieldset>
                                    <label className={style.label} htmlFor="color">Color</label>
                                    <select>
                                        <option value="a">Rojo</option>
                                        <option value="a">Azul</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <label className={style.label} htmlFor="size">Tamaño</label>
                                    <select>
                                        <option value="a">Mediano</option>
                                        <option value="a">Grande</option>
                                    </select>
                                </fieldset>
                            </form>
                            <div className={style.description}>
                                <span className={style.label}>Descripción</span>
                                <p id="description">
                                    This phone is unlocked and compatible with any carrier of choice
                                    on GSM and CDMA networks Tested for battery health and
                                    guaranteed to have a minimum battery capacity of 80%.
                                    Successfully passed a full diagnostic test which ensures
                                    like-new functionality and removal of any prior-user personal
                                    information. The device does not come with headphones or a SIM
                                    card. It does include a generic (Mfi certified) charger and
                                    charging cable. Inspected and guaranteed to have minimal
                                    cosmetic damage, which is not noticeable when the device is held
                                    at arm's length.
                                </p>
                                <p>
                                    This phone is unlocked and compatible with any carrier of choice
                                    on GSM and CDMA networks Tested for battery health and
                                    guaranteed to have a minimum battery capacity of 80%.
                                    Successfully passed a full diagnostic test which ensures
                                    like-new functionality and removal of any prior-user personal
                                    information. The device does not come with headphones or a SIM
                                    card. It does include a generic (Mfi certified) charger and
                                    charging cable. Inspected and guaranteed to have minimal
                                    cosmetic damage, which is not noticeable when the device is held
                                    at arm's length.
                                </p>
                            </div>
                        </div>
                        <div className={style.productsCheckoutBlock}>
                            <div className={style.productsCheckoutContainer}>
                                <span className={style.productsCheckoutTotalLabel}>Total:</span>
                                <h2 className={style.productsCheckoutTotalPrice} id="price">$152.400</h2>
                                <p className={style.productsCheckoutDescription}>
                                    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                                    50711 haciendo la solicitud en AFIP.
                                </p>
                                <ul className={style.productsCheckoutPolicyList}>
                                    <li>
                                        <span className={style.productsPolicyIcon}><img src="../public/truck.png" alt="Truck" /></span>
                                        <span className={style.productsPolicyDesc}>Agrega el producto al carrito para conocer los costos de
                                            envío</span>
                                    </li>
                                    <li>
                                        <span className={style.productsPolicyIcon}><img src="../public/plane.png" alt="Plane" /></span>
                                        <span className={style.productsPolicyDesc}>Recibí aproximadamente entre 10 y 15 días hábiles,
                                            seleccionando envío normal</span>
                                    </li>
                                </ul>
                                <div className={style.productsCheckoutProcess}>
                                    <div className={style.productsTop}>
                                        <input id="input-quantity" type="number" value="1" min="1" />
                                        <button className={style.productsBtnPrimary}>Comprar</button>
                                        <button className={style.productsBtnOutline} id="btn-add-to-cart">
                                            Añadir al Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.productsSalesBlock}>
                        <div className={style.productsSalesTitle}>
                            <h2>Productos relacionados</h2>
                        </div>

                        <div className={style.productsSalesContainer}>
                                {DB.map((articules) => (
                                    <ProductCard
                                        id={articules.id}
                                        title={articules.title}
                                        price={articules.price}
                                        color={articules.colors[0]}
                                        image={articules.images[0]}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <script src="product.js"></script>
        </body>




    );
}
export default Product;