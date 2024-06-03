import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'


const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p>
                    Boas vindas ao meu espaço pessoal! Eu sou Ivan Luís Forner.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Ivan sorrindo'
                />
            </div>
        </div>
    );
}

export default Banner;