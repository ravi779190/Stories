import style from '../style/StoryCta.module.scss'
export default function StoryCTA({cta}){
    // console.log("cta :" , cta)
    return(
        <div className={style.ctaContainer}>
            <button className={style.cta}>{cta.text}</button>
        </div>
    )
}