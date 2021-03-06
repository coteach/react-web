import './App.css';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<div className="App">


			<header>

			</header>


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
