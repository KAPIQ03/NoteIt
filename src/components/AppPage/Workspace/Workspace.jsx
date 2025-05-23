import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import style from './Workspace.module.css';

export const Workspace = ({
	listOfNotes,
	updateNoteName,
	updateContent,
	updateIndex,
}) => {
	const { noteId } = useParams();
	const inputRefs = useRef([]); // Przechowuje referencje do elementów
	const note = listOfNotes.find(note => note.id === parseInt(noteId));
	const [editableIndex, setEditableIndex] = useState(
		note ? note.editableIndex : 0
	);
	const [lines, setLines] = useState(note ? note.content : ['']);
	const [noteName, setNoteName] = useState(note ? note.name : '');

	useEffect(() => {
		if (editableIndex !== null && inputRefs.current[editableIndex]) {
			inputRefs.current[editableIndex].focus();
		}
	}, [editableIndex]);

	useEffect(() => {
		if (note && note.id !== noteId) {
			setLines(note.content || ['']);
			setEditableIndex(note.editableIndex);
		}
	}, [noteId]);

	useEffect(() => {
		if (editableIndex !== null) {
			updateIndex(note.id, editableIndex);
		}
	}, [editableIndex]);

	useEffect(() => {
		if (note && JSON.stringify(note.content) !== JSON.stringify(lines)) {
			updateContent(note.id, lines);
		}
	}, [lines, note, updateContent]);

	const handleKeyDown = (e, index) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (index === 0 && lines[0].trim() === '') {
				return;
			}
			setLines(prevLines => {
				const newLines = [...prevLines];
				newLines.splice(index + 1, 0, '');
				return newLines;
			});
			setEditableIndex(index + 1);
		} else if (
			e.key === 'Backspace' &&
			lines[index] === '' &&
			lines.length > 1
		) {
			e.preventDefault();
			setLines(prevLines => {
				const newLines = prevLines.filter((_, i) => i !== index);
				return newLines;
			});
			setEditableIndex(index > 0 ? index - 1 : 0);
		}
	};

	const handleChange = (e, index) => {
		setLines(prevLines => {
			const newLines = [...prevLines];
			newLines[index] = e.target.value;
			return newLines;
		});
	};

	const handleClick = index => {
		if (lines[0].trim() === '' && index !== 0) {
			return;
		}
		setEditableIndex(index);
	};

	const handleNameChange = e => {
		setNoteName(e.target.value);
		updateNoteName(parseInt(noteId), e.target.value);
	};

	return (
		<div className={style.workspace} id='workspace'>
			<div>
				<input
					className={style.title}
					value={note ? note.name : noteName}
					onChange={handleNameChange}
					placeholder='Tytuł'
				/>
			</div>
			<div>
				{lines.map((line, index) => (
					<div key={index} className={style.line}>
						{editableIndex === index ? (
							// Edytowalna linia
							<input
								ref={el => (inputRefs.current[index] = el)}
								value={line || ''}
								onChange={e => handleChange(e, index)}
								onKeyDown={e => handleKeyDown(e, index)}
								onBlur={() => {
									if (index === 0 && lines[0].trim() === '') {
										setEditableIndex(0);
									} else {
										setEditableIndex(null);
									}
								}}
								className={style.editLine}
							/>
						) : (
							<div
								onClick={() => handleClick(index)}
								className={style.markdownTag}>
								<ReactMarkdown>{line}</ReactMarkdown>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
