import React from 'react';
import assets from '../../../constants/assets';
import style from './SmallPage.module.css'

export const SmallPage = () => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<h1>Note it</h1>
				<img src={assets.logoBlack} alt='NoteIt-logo' className={style.logo} />
			</div>
			<div className={style.bloobBottom}>
				<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M46.4,-48.3C59.8,-32.9,70.2,-16.5,70.6,0.4C71,17.2,61.3,34.5,47.9,48.8C34.5,63.2,17.2,74.7,-3,77.7C-23.3,80.7,-46.5,75.2,-59.2,60.9C-71.9,46.5,-74,23.3,-70.3,3.7C-66.7,-15.9,-57.2,-31.9,-44.5,-47.2C-31.9,-62.6,-15.9,-77.4,0.3,-77.7C16.5,-77.9,32.9,-63.7,46.4,-48.3Z'
						transform='translate(100 100)'
					/>
				</svg>
			</div>
			<div className={style.bloobTop}>
				<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M52.7,-67.7C67.8,-61.6,79.1,-45.5,76.4,-30.4C73.7,-15.2,56.9,-1.1,47.1,10.9C37.2,23,34.1,32.9,27.4,42.3C20.7,51.7,10.4,60.6,0.3,60.2C-9.8,59.8,-19.6,50.2,-29.9,41.9C-40.2,33.7,-51,26.9,-56.5,16.7C-61.9,6.6,-62.2,-6.8,-55.9,-15.7C-49.6,-24.6,-36.9,-28.9,-26.5,-36.5C-16.1,-44.2,-8,-55.2,5.4,-62.6C18.8,-70,37.6,-73.8,52.7,-67.7Z'
						transform='translate(100 100)'
					/>
				</svg>
			</div>
			<div>
				<p> Aktualny rozmiar okna nie jest wspierany.</p>
				<p>Otwórz stronę na większym ekranie</p>
			</div>
		</div>
	);
};
