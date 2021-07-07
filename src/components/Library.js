import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({
	songs,
	setCurrentSong,
	setIsPlaying,
	setCurrentSongIndex,
	currentSongIndex,
	currentSong,
	isLibraryOpen,
}) => {
	const setSongHandler = (song) => {
		setCurrentSongIndex(songs.indexOf(song));
	};

	return (
		<div className={isLibraryOpen ? "library open" : "library"}>
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong
						key={song.id}
						currentSong={song}
						appCurrentSong={currentSong}
						onSetCurrentSong={setCurrentSong}
						setIsPlaying={setIsPlaying}
						setSongHandler={setSongHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
