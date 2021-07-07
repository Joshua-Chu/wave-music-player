import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
	trackColor,
	playControlsColors,
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
		animatePercentage: 0,
	});
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
		const animatePercentage = Math.round((current / duration) * 100);
		setSongInfo({
			duration: duration,
			currentTime: current,
			animatePercentage,
		});

		// if (animatePercentage === 100) {
		// 	nextCurrentSongHandler();
		// }
	};

	const nextCurrentSongHandler = async () => {
		const index =
			currentSongIndex + 1 >= songs.length ? 0 : currentSongIndex + 1;

		await setCurrentSongIndex(index);
		await setCurrentSong(songs[index]);
		audioRef.current.play();
		setIsPlaying(true);
	};

	const previousCurrentSongHandler = async () => {
		const index =
			currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1;

		await setCurrentSongIndex(index);
		await setCurrentSong(songs[index]);

		audioRef.current.play();
		setIsPlaying(true);
	};

	const dragTimeHandler = (e) => {
		const time = e.target.value;
		audioRef.current.currentTime = time;
		setSongInfo({ ...songinfo, currentTime: time });
	};

	const animateInput = {
		transform: `translateX(${songinfo.animatePercentage}%)`,
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{timeFormatter(songinfo.currentTime)}</p>
				<div className="track" style={trackColor}>
					<input
						type="range"
						value={songinfo.currentTime}
						onChange={dragTimeHandler}
						min={0}
						max={songinfo.duration}
					/>
					<div className="animate-track" style={animateInput}></div>
				</div>
				<p>{timeFormatter(songinfo.duration)}</p>
			</div>
			<div className="play-control" style={playControlsColors}>
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
				onEnded={nextCurrentSongHandler}
			></audio>
		</div>
	);
};

export default Player;
