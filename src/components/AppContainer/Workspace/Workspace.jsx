import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import ReactMarkdown from "react-markdown";
import style from './Workspace.module.css';

export const Workspace = () => {
	const [lines, setLines] = useState(['# New Note']); // Lista linii edytora
	const [editableIndex, setEditableIndex] = useState(null); // Indeks edytowanej linii

	const handleKeyDown = (e, index) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setLines(prevLines => {
				const newLines = [...prevLines];
				newLines[index] = newLines[index].trim(); // Usuń zbędne spacje
				newLines.splice(index + 1, 0, ''); // Dodaj nową pustą linię
				return newLines;
			});
			setEditableIndex(index + 1); // Przejdź do edycji nowej linii
		}
	};

	const handleChange = (e, index) => {
		setLines(prevLines => {
			const newLines = [...prevLines];
			newLines[index] = e.target.value;
			return newLines;
		});
	};

	const handleDoubleClick = index => {
		setEditableIndex(index); // Po podwójnym kliknięciu włącz edycję tej linii
	};

	return (
		<div className={style.container}>
		<div style={{ border: '1px solid red', padding: '10px'}}>
			{lines.map((line, index) => (
				<div key={index} style={{ marginBottom: '5px' }}>
					{editableIndex === index ? (
						// Edytowalna linia
						<ContentEditable
							html={line || ''}
							onChange={e => handleChange(e, index)}
							onKeyDown={e => handleKeyDown(e, index)}
							onBlur={() => setEditableIndex(null)} // Po wyjściu z edycji wróć do Markdown
							tagName='div'
							style={{
								border: '1px solid #ccc',
								padding: '5px',
								minHeight: '20px',
								cursor: 'text',
								outline: 'none',
							}}
						/>
					) : (
						// Kliknięcie na tekst przełącza do edycji
						<div
							onDoubleClick={() => handleDoubleClick(index)}
							style={{ cursor: 'pointer' }}>
							<ReactMarkdown>{line}</ReactMarkdown>
						</div>
					)}
				</div>
			))}
			</div>
		</div>
	);
};
