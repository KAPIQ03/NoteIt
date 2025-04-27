import React, { useState } from 'react';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import { ListOfNotes } from '../components/AppContainer/ListOfNotes/ListOfNotes';
import { Workspace } from '../components/AppContainer/Workspace/Workspace';
import { StartPage } from '../components/AppContainer/StartPage/StartPage';

export const AppContainer = () => {
	const [listOfNotes, setListOfNotes] = useState([]);
	const navigate = useNavigate();
	const addNewNote = () => {
		setListOfNotes( [
			...listOfNotes,
			{
				id: listOfNotes.length>0?listOfNotes[listOfNotes.length-1].id + 1:1,
				name: `New Note ${listOfNotes.length>0?listOfNotes[listOfNotes.length-1].id + 1:1}`,
			},
		]);
	};
	const deleteNote = id => {
		setListOfNotes(prevNotes => prevNotes.filter(note => note.id !== id));
		navigate(`/appContainer/`)
	};
	const updateNoteName = (id, newName) => {
		setListOfNotes(prevNotes =>
			prevNotes.map(note =>
				note.id === id ? { ...note, name: newName } : note
			)
		);
	};

	return (
		<div>
			<div className='container'>
				<ListOfNotes
					listOfNotes={listOfNotes}
					addNewNote={addNewNote}
					deleteNote={deleteNote}
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
		</div>
	);
};
