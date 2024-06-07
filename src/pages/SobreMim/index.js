import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Ivan!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Ivan Sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Texto...
            </p>
        </PostModelo>
    )
}