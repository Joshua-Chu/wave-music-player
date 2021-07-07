import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
	const toggleLibraryHandler = () => {
		setIsLibraryOpen(!isLibraryOpen);
	};
	return (
		<nav>
			<h1>Waves</h1>
			<button onClick={toggleLibraryHandler}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
