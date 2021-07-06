import React, { useState } from "react";

//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

//Style
import "./styles/app.scss";

//Dummy Data
import data from "./data";

const App = () => {
	const [songs, setSongs] = useState(data());
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [currentSong, setCurrentSong] = useState(songs[currentSongIndex]);
	const [isPlaying, setIsPlaying] = useState(false);
	// console.log(songs);
	// console.log(currentSong);
	return (
		<div className="app">
			<Nav />
			<Library
				songs={songs}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				setIsPlaying={setIsPlaying}
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
			/>
			<Song currentSong={currentSong} isPlaying={isPlaying} />
			<Player
				setCurrentSong={setCurrentSong}
				songs={songs}
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
};

export default App;
