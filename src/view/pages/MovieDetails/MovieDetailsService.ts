import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviedbApi } from "../../../application/themoviedb/MoviedbApi";
import IMovieDetailsDto from "../../../domain/dto/MovieDetailsDto";

export default function useMovieDetailsService() {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState<IMovieDetailsDto>();

	useEffect(() => {
		getMovieDetails(id);
	}, [id]);

	const getMovieDetails = async (movieId: any): Promise<void> => {
		try {
			const data: IMovieDetailsDto = await MoviedbApi.getMovieDetails(movieId);
			setMovieDetails(data);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		movieDetails,
	};
}
