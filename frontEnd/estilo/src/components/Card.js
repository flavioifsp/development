import styles from './Card.module.css'
export default function Card ({image, textoTitulo,link, textoLink}){
    return(
        <div className={styles.card}>
        <img src={image}></img>
        <p className={styles.texto}> {textoTitulo}</p>
        <p> <a href={link}>{textoLink}</a></p>

        </div>
    )
}

