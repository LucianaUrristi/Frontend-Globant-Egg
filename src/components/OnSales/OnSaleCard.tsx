import style from "./OnSaleCard.module.css";


function OnSaleCard(props) {
    const { title, color, price, image } = props   
    
    
    return(
        <article className={style.productCardOnSaleCard}>
            <img src={ image } className={style.productImgOnSaleCard}/>
            <div className={style.productInfo}>
                <span className={style.productTitle}>{ title }</span>
                <span className={style.productDescription}>{ color }</span>
                <div className={style.productTextOnSaleCard}>
                    <span className={style.fullPriceText}>Desde <span className={style.fullPriceNumber}>{ price }</span></span>
                 </div>   
                <div>
                    <span className={style.disPrice}>$ { price } <span className={style.greenTextOnSaleCard}>35% OFF</span></span>
                </div>
                <div className={style.leyend}>Compra y paga en pesos!</div>

            </div>
        </article>

    )
}

export default OnSaleCard;