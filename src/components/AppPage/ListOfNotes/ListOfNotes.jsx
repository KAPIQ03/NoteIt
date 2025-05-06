import { React, useState } from 'react';
import style from './ListOfNotes.module.css';
import assets from '../../../constants/assets';
import {
	FaCircleQuestion,
	FaFileCirclePlus,
	FaTrashCan,
	FaDownload,
} from 'react-icons/fa6';
import { useNavigate } from 'react-router';

export const ListOfNotes = ({
	listOfNotes,
	addNewNote,
	deleteNote,
	printWorkspace,
}) => {
	const [selectedNoteId, setSelectedNoteId] = useState(null);
	const navigate = useNavigate();
	const moveToHome = () => {
		navigate('/AppPage');
	};
	const handleNoteClick = noteId => {
		setSelectedNoteId(noteId);
		navigate(`/AppPage/${noteId}`);
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
			<hr />
			<div className={style.buttons}>
				<button onClick={moveToHome}>
					<FaCircleQuestion />
				</button>
				<button onClick={printWorkspace}>
					<FaDownload />
				</button>
				<button
					onClick={() => {
						deleteNote(selectedNoteId);
						setSelectedNoteId(0);
					}}>
					<FaTrashCan />
				</button>
				<button onClick={addNewNote}>
					<FaFileCirclePlus />
				</button>
			</div>
			<div className={style.listOfNotes}>
				{listOfNotes.map(note => (
					<div
						key={note.id}
						onClick={() => handleNoteClick(note.id)}
						className={[
							style.note,
							note.id === selectedNoteId ? style.activeNote : '',
						].join(' ')}>
						{note.name.length > 20 || note.name.length === 0
							? note.name.slice(0, 20) + '...'
							: note.name}
					</div>
				))}
			</div>
		</div>
	);
};
