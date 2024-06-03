import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({children, to}) => {
    const localizacao = useLocation();

    return (
        <Link 
            className={`
                ${styles.link} 
                    ${ localizacao.pathname === to ? styles.linkDestacado : null}
                    `} 
            to={to}>{children}
        </Link>
    )
}

export default MenuLink