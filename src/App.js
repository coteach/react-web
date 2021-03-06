import './App.css';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			
			<NavBar></NavBar>

			<div className="outer">
				<div className="session">
					<TitleBar></TitleBar>
				</div>
				<div className="session">
					<SearchBar></SearchBar>
				</div>
				
			</div>


			<div className="footer">

			</div>


		</div>
	);
}

export default App;
