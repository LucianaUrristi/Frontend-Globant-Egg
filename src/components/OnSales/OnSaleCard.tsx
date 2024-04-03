import style from "./OnSaleCard.module.css";


function OnSaleCard(props) {
    const { title, price, image } = props   
    
    
    return(
        <article className={style.productCardOnSaleCard}>
            <div className={style.innerBorderOnSaleCard}>
                <img src={ image } className={style.productImgOnSaleCard}/>
                <div className={style.productTextOnSaleCard}>
                    <h3>{ title }</h3>
                    <p className={style.fullPriceText}>Desde <span className={style.fullPriceNumber}>{ price }</span></p>
                    <h3 id="dis-price">{ price } <span className={style.greentext}>35% OFF</span></h3>
                    <p><span className={style.greenTextOnSaleCard}>Compra y paga en pesos!</span></p>
                </div>
            </div>
        </article>

    )
}

export default OnSaleCard;