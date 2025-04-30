import './styles/App.css';
import { StartPage } from './containers/StartPage';
import { AppPage } from './containers/AppPage';
import { Routes, Route } from 'react-router-dom';
// import { SignUpAction } from './components/HomePage/SideSection/SideSection';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route index path='/*' element={<StartPage />} />
				<Route path='AppPage/*' element={<AppPage />} />
			</Routes>
		</div>
	);
}

export default App;
