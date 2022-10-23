import styles from './index.module.css'

import {SiInstagram, SiWhatsapp, SiFacebook} from 'react-icons/si'

export default function Home() {
	return (
		<main>
			<section className={styles.initial_container}>
				<div className={styles.initial_content}>
					<h1 className={styles.initial_title}>Barbearia</h1>
					<h3 className={styles.initial_desc}>Conheça a melhor barbearia da região.</h3>
					
					<button className={styles.initial_button}>
						<a href="#section_1">Serviços</a>
					</button>
				</div>

				<div className={styles.initial_socialmedias}>
					<SiInstagram />
					<SiWhatsapp />
					<SiFacebook />
				</div>

			</section>

			<section id='section_1' className={styles.services_container}>
				<div className={styles.services_table}>
					<h1 className={styles.services_table_title}>Serviços</h1>
					<div className={styles.services_table_columns}>
						<div id={styles.teste} className={styles.services_table_column}>
							<h1>Cabelo</h1>
							<div className={styles.services_table_list}>
								<ul>
									<li>Social</li>
									<li>Degradê</li>
									<li>Desenhado</li>
								</ul>
								<ul>
									<li className={styles.services_table_price}>R$ 15</li>
									<li className={styles.services_table_price}>R$ 20</li>
									<li className={styles.services_table_price}>R$ 35</li>
								</ul>
							</div>
						</div>
						
						<div className={styles.services_table_column}>
							<h1>Barba</h1>
							<div className={styles.services_table_list}>
								<ul>
									<li>Social</li>
									<li>Degradê</li>
									<li>Desenhado</li>
								</ul>
								<ul>
									<li className={styles.services_table_price}>R$ 15</li>
									<li className={styles.services_table_price}>R$ 20</li>
									<li className={styles.services_table_price}>R$ 35</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}