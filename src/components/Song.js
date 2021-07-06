import React from "react";

const Song = (props) => {
	const { cover, name, artist } = props.currentSong;

	return (
		<div className="song-container">
			<img
				src={cover}
				alt=""
				className={props.isPlaying ? "isPlaying-animation" : null}
			/>
			<h2>{name}</h2>
			<h3> {artist}y</h3>
		</div>
	);
};

export default Song;
