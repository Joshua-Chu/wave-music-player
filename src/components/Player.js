import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
	setCurrentSong,
	songs,
	currentSongIndex,
	setCurrentSongIndex,
	currentSong,
	isPlaying,
	setIsPlaying,
}) => {
	const [songinfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const [timeValue, setTimeValue] = useState(0);
	const audioRef = useRef(null);

	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}

		setIsPlaying(!isPlaying);
	};

	const timeFormatter = (time) => {
		const minutes = ~~(time / 60);
		let seconds = ~~(time % 60);

		seconds = seconds > 9 ? seconds : "0" + seconds;

		const timeString = `${minutes}: ${seconds}`;

		return timeString;
	};

	const timeUpdateHandler = (e) => {
		const current = ~~e.target.currentTime;
		const duration = ~~e.target.duration;
		setSongInfo({
			duration: duration,
			currentTime: current,
		});
	};

	const nextCurrentSongHandler = () => {
		const index =
			currentSongIndex + 1 >= songs.length ? 0 : currentSongIndex + 1;

		setCurrentSongIndex(index);
		setCurrentSong(songs[index]);
		setIsPlaying(false);
	};

	const previousCurrentSongHandler = () => {
		const index =
			currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1;

		setCurrentSongIndex(index);
		setCurrentSong(songs[index]);
		setCurrentSongIndex(index);
	};

	const dragTimeHandler = (e) => {
		const time = e.target.value;
		audioRef.current.currentTime = time;
		setSongInfo({ ...songinfo, currentTime: time });
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{timeFormatter(songinfo.currentTime)}</p>
				<input
					type="range"
					value={songinfo.currentTime}
					onChange={dragTimeHandler}
					min={0}
					max={songinfo.duration}
				/>
				<p>{timeFormatter(songinfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
					onClick={previousCurrentSongHandler}
				/>
				<FontAwesomeIcon
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
					onClick={playSongHandler}
				/>
				<FontAwesomeIcon
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
					onClick={nextCurrentSongHandler}
				/>
			</div>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				src={currentSong.audio}
				ref={audioRef}
			></audio>
		</div>
	);
};

export default Player;
