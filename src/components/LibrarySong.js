import React from "react";

const Song = (props) => {
	const { cover, name, artist } = props.currentSong;

	const setCurrentSongHandler = () => {
		props.setSongHandler(props.currentSong);
		props.onSetCurrentSong(props.currentSong);
		props.setIsPlaying(false);
	};

	return (
		<div
			className={
				props.currentSong.id === props.appCurrentSong.id
					? "librarysong-container selected"
					: "librarysong-container"
			}
			onClick={setCurrentSongHandler}
		>
			<img
				src={cover}
				alt=""
				className={props.isPlaying ? "isPlaying-animation" : null}
			/>

			<div className="song-information">
				<h3>{name}</h3>
				<h4>{artist} </h4>
			</div>
		</div>
	);
};

export default Song;
