import React from 'react';
import { ListOfNotes } from '../components/AppContainer/ListOfNotes/ListOfNotes';
import { Workspace } from '../components/AppContainer/Workspace/Workspace';

export const AppContainer = () => {
	return (
		<div>
			<div className='container'>
				<ListOfNotes />
				<Workspace />
			</div>
		</div>
	);
};
