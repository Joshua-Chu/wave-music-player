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

	const [isLibraryOpen, setIsLibraryOpen] = useState(false);

	const playControlsColors = {
		color: `${currentSong.color[1]}`,
	};

	const trackColor = {
		background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
	};

	console.log(isPlaying);
	return (
		<div className={isLibraryOpen ? "App library-active" : "App"}>
			<Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
			<Library
				isLibraryOpen={isLibraryOpen}
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
				playControlsColors={playControlsColors}
				trackColor={trackColor}
			/>
		</div>
	);
};

export default App;
