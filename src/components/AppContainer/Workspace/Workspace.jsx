import React, { useState, useRef, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import ReactMarkdown from 'react-markdown';
import style from './Workspace.module.css';

export const Workspace = () => {
	const [lines, setLines] = useState(['']); // Lista linii edytora
	const [editableIndex, setEditableIndex] = useState(0); // Pierwsza linia aktywna domyślnie
	const inputRefs = useRef([]); // Przechowuje referencje do elementów ContentEditable

	// Upewnia się, że kursor przejdzie do nowej linii
	useEffect(() => {
		if (editableIndex !== null && inputRefs.current[editableIndex]) {
			inputRefs.current[editableIndex].focus(); // Skupienie na nowej linii
		}
	}, [editableIndex]);

	const handleKeyDown = (e, index) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (index === 0 && lines[0].trim() === '') {
				// Jeśli pierwsza linia jest pusta, nie pozwalamy na przejście dalej
				return;
			}
			setLines(prevLines => {
				const newLines = [...prevLines];
				newLines.splice(index + 1, 0, ''); // Dodajemy pustą linię po aktualnej
				return newLines;
			});
			setEditableIndex(index + 1); // Przejście kursorem do nowej linii
		} else if (
			e.key === 'Backspace' &&
			lines[index] === '' &&
			lines.length > 1
		) {
			e.preventDefault();
			setLines(prevLines => {
				const newLines = prevLines.filter((_, i) => i !== index); // Usuwamy pustą linię
				return newLines;
			});
			setEditableIndex(index > 0 ? index - 1 : 0); // Przenosimy kursor do poprzedniej linii
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
			return; // Nie pozwalamy na zmianę linii, jeśli pierwsza jest pusta
		}
		setEditableIndex(index);
	};

	return (
		<div className={style.workspace}>
			<div>
				<h1 className={style.title}>New Note</h1>
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
										setEditableIndex(0); // Wymuszamy skupienie na pierwszej linii
									} else {
										setEditableIndex(null);
									}
								}}
								// tagName='div'
								className={style.editLine}
							/>
						) : (
							// Kliknięcie na tekst przełącza do edycji
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
