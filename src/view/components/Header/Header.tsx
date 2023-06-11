import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";

import "./Header.css";

const Header = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!search) return;

		navigate(`/search?q=${search}`, { replace: true });
		setSearch("");
	};

	return (
		<nav id="navbar">
			<h2>
				<Link to="/">
					<SiThemoviedatabase /> CinemaMania
				</Link>
			</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Busque um filme"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<button type="submit">
					<FaSearch />
				</button>
			</form>
		</nav>
	);
};

export default Header;
