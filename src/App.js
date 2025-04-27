import './App.css';
import { HomePage } from './containers/HomePage';
import { AppContainer } from './containers/AppContainer';
import { Routes, Route } from 'react-router-dom';
// import { SignUpAction } from './components/HomePage/SideSection/SideSection';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route index path='/*' element={<HomePage />} />
				<Route path='appContainer/*' element={<AppContainer />} />
			</Routes>
		</div>
	);
}

export default App;
