import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ListOfNotes } from '../components/AppPage/ListOfNotes/ListOfNotes';
import { Workspace } from '../components/AppPage/Workspace/Workspace';
import { StartPage } from '../components/AppPage/HomePage/HomePage';
import { SmallPage } from '../components/AppPage/SmallPage/SmallPage';

export const AppPage = () => {
	const [listOfNotes, setListOfNotes] = useState([]);
	const navigate = useNavigate();
	const addNewNote = () => {
		setListOfNotes([
			...listOfNotes,
			{
				id:
					listOfNotes.length > 0
						? listOfNotes[listOfNotes.length - 1].id + 1
						: 1,
				name: `New Note ${
					listOfNotes.length > 0
						? listOfNotes[listOfNotes.length - 1].id + 1
						: 1
				}`,
			},
		]);
	};
	const deleteNote = id => {
		setListOfNotes(prevNotes => prevNotes.filter(note => note.id !== id));
		navigate(`/AppPage/`);
	};
	const updateNoteName = (id, newName) => {
		setListOfNotes(prevNotes =>
			prevNotes.map(note =>
				note.id === id ? { ...note, name: newName } : note
			)
		);
	};
	const printWorkspace = () => {
		const workspaceElement = document.getElementById('workspace');
		if (workspaceElement) {
			const originalContent = document.body.innerHTML;
			document.body.innerHTML = workspaceElement.outerHTML;
			window.print();
			document.body.innerHTML = originalContent;
		} else {
			console.error('Nie znaleziono elementu');
			return;
		}
	};

	return (
		<div>
			<div className='container'>
				<ListOfNotes
					listOfNotes={listOfNotes}
					addNewNote={addNewNote}
					deleteNote={deleteNote}
					printWorkspace={printWorkspace}
				/>
				<Routes>
					<Route path='' element={<StartPage />} />
					{listOfNotes.length > 0 && (
						<Route
							path=':noteId'
							element={
								<Workspace
									listOfNotes={listOfNotes}
									updateNoteName={updateNoteName}
								/>
							}
						/>
					)}
				</Routes>
			</div>
			<div className='smallPage'>
				<SmallPage />
			</div>
		</div>
	);
};
