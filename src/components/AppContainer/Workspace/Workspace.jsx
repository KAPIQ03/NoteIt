import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import style from './Workspace.module.css';

export const Workspace = ({ listOfNotes, updateNoteName }) => {
	const { noteId } = useParams();
	const [lines, setLines] = useState(['']); // Lista linii edytora
	const [editableIndex, setEditableIndex] = useState(0); // Pierwsza linia aktywna domyślnie
	const inputRefs = useRef([]); // Przechowuje referencje do elementów
	const note = listOfNotes.find(note => note.id === parseInt(noteId));
	const [noteName, setNoteName] = useState(note ? note.name : '');

	useEffect(() => {
		if (editableIndex !== null && inputRefs.current[editableIndex]) {
			inputRefs.current[editableIndex].focus();
		}
	}, [editableIndex]);

	const handleKeyDown = (e, index) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (index === 0 && lines[0].trim() === '') {
				return;
			} //!
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
		<div className={style.workspace}>
			<div>
				<input
					className={style.title}
					value={note?note.name:noteName}
					onChange={handleNameChange}
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
