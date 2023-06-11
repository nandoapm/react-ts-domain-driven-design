import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/HomeView";
import Search from "./components/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetailsView";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<MovieDetails />} />
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
