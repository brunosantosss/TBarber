import styles from './index.module.css'

import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io' 
import { useState } from 'react'

export default function NavBar() {
	const [menu, setmenu] = useState(false)
    const menuState = () => setmenu(menu => !menu)

	/*
		github pages
		<img src="../logo.jpg" className={styles.logo}/> 
		
		development
		<img src="../../public/logo.jpg" className={styles.logo}/>
	*/
	return (
		<header>
			<img src="logo.jpg" className={styles.logo}/> 
			<div className={styles.menu}>
                <span  className={styles.FiMenu} onClick={menuState}>
					{ menu ? <IoMdClose /> : <FiMenu /> }
				</span>

                <ul className={menu ? styles.open : ''}>
                    <li><a href="#section_1">Serviços</a></li>
                    <li><a href="#section_2">Sobre nós</a></li>
                </ul>
            </div>
		</header>
	)
}