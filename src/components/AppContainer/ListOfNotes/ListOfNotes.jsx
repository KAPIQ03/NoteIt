import React, { useState } from 'react';
import style from './ListOfNotes.module.css';
import assets from '../../../constants/assets';

let nextId = 0;

export const ListOfNotes = () => {
	const [listOfNotes, setListOfNotes] = useState([]);
	const addNewNotes = () => {
		setListOfNotes([
			...listOfNotes,
			{
				id: nextId++,
				name: 'New Note',
			},
		]);
		console.log(listOfNotes);
	};
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.name}>
					<img
						src={assets.logoWhite}
						alt='NoteIt-logo'
						className={style.logo}
					/>
					<h2>Note it</h2>
				</div>
			</div>
			<button onClick={addNewNotes}>+</button>
			<div className={style.listOfNotes}>
				{listOfNotes.map(note => (
					<div key={note.id} className={style.note}>
						{note.name}
					</div>
				))}
			</div>
		</div>
	);
};
