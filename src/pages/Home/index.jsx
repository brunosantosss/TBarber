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

			<section id='section_2' className={styles.about_container}>
				<div className={styles.about_part1}>
					<img src="https://www.google.com/maps/vt/data=yasgyZ-M3PGlnAkXWki2Lh95Kb4SGlLcX-jD2zlElEoSmvqduAveazmy2p6ac-TauZw2iPUoawUKHsSlDzp16aXmyN6VelLAQem0uFawiz14StDqbOmC6mS7NrDhA8OqoUJrTjG_5f4Dd_vCz4IutJSKu9yKXAwPn8Wm5iyhfjKuLv_YboQqkx2_uHi6IoOEwoxKJBx6-UB9Iyr9cQtW2_0s7KpW0SvoAEszi15ATs0nk57DbFriEevtUludIH-M9rdK52sG"/>

					<p>Rua: Canuto de Aguiar</p>
					<p>Cidade / Bairro: Fortaleza - Meireles</p>
				</div>
				<div className={styles.about_part2}>
					<p>Local para colocar o texto sobre nós de sua barbearia. Local para colocar o texto sobre nós de sua barbearia. Local para colocar o texto sobre nós de sua barbearia.</p>
					
					<div className={styles.about_icons}>
						<SiFacebook />
						<SiInstagram />
						<SiWhatsapp />
					</div>
				</div>
			</section>
		</main>
	)
}