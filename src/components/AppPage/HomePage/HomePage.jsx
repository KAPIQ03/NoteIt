import React from 'react';
import style from './HomePage.module.css';

export const StartPage = () => {
	return (
		<div className={style.container}>
			<h2>Składnia Markdown</h2>
			<div className={style.info}>
				<p>
					Markdown to lekki język znaczników stworzony po to, by ułatwić i
					przyspieszyć formatowanie tekstu. Charakteryzuje się prostą składnią,
					co sprawia, że edytowanie treści staje się bardziej efektywne i
					komfortowe.
				</p>
				<p>Zacznij tworzyć własne unikatowe notatki już teraz!</p>
			</div>
			<h3>Nagłówki</h3>
			<div className={style.paragraph}>
				<div className={style.line}>
					<code># Nagłówek 1</code>
					<span>{' --> '}</span>
					<span>Nagłówek H1</span>
				</div>
				<div className={style.line}>
					<code>## Nagłówek 2</code>
					<span>{' --> '}</span>
					<span>Nagłówek H2</span>
				</div>
				<div className={style.line}>
					<code>### Nagłówek 3</code>
					<span>{' --> '}</span>
					<span>Nagłówek H3</span>
				</div>
				<div className={style.line}>
					<code>#### Nagłówek 4</code>
					<span>{' --> '}</span>
					<span>Nagłówek H4</span>
				</div>
				<div className={style.line}>
					<code>##### Nagłówek 5</code>
					<span>{' --> '}</span>
					<span>Nagłówek H5</span>
				</div>
				<div className={style.line}>
					<code>###### Nagłówek 6</code>
					<span>{' --> '}</span>
					<span>Nagłówek H6</span>
				</div>
			</div>
			<h3>Listy</h3>
			<div className={style.paragraph}>
				<div className={style.line}>
					<code>* Element listy</code>
					<span>{' --> '}</span>
					<span>Lista nienumerowana</span>
					<p>Przykład: </p>
					<ul>
						<li>Pierwszy element</li>
						<li>Drugi element</li>
						<li>Trzeci element</li>
					</ul>
				</div>
			</div>
			<div className={style.paragraph}>
				<div className={style.line}>
					<code>1. Element listy</code>
					<span>{' --> '}</span>
					<span>Lista numerowana</span>
					<p>Przykład: </p>
					<ol>
						<li>Pierwszy element</li>
						<li>Drugi element</li>
						<li>Trzeci element</li>
					</ol>
				</div>
			</div>
			<h3>Formatowanie tekstu</h3>
			<div className={style.paragraph}>
				<div className={style.line}>
					<code>**Pogrubienie**</code>
					<span>{' --> '}</span>
					<strong>Pogrubienie</strong>
				</div>
				<div className={style.line}>
					<code>*Pochylenie*</code>
					<span>{' --> '}</span>
					<i>Pochylenie</i>
				</div>
				<div className={style.line}>
					<code>`Fragment kodu`</code>
					<span>{' --> '}</span>
					<code>Fragment kodu</code>
				</div>
			</div>
			<h3>Inne znaczniki</h3>
			<div className={style.paragraph}>
				<div className={style.line}>
					<code>![alt](linkUrl)</code>
					<span>{' --> '}</span>
					<span>Zdjęcie</span>
				</div>
				<div className={style.line}>
					<code>[Tytuł](linkUrl)</code>
					<span>{' --> '}</span>
					<span>Link</span>
				</div>
				<div className={style.line}>
					<code>---</code>
					<span>{' --> '}</span>
					<span>Linia pozioma</span>
				</div>
			</div>
		</div>
	);
};
