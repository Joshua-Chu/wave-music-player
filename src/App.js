import React from "react";

//Components
import Player from "./components/Player";
import Song from "./components/Song";

//Style
import "./styles/app.scss";

const App = () => {
	return (
		<div className="app">
			<h1>Music Player Application</h1>
			<Song />
			<Player />
		</div>
	);
};

export default App;
