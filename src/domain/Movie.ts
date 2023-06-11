class Movies {
	page: number;
	results: MovieDetails[];
	total_pages: number;
	total_results: number;

	constructor(page: number, results: MovieDetails[], total_pages: number, total_results: number) {
		this.page = page;
		this.results = results;
		this.total_pages = total_pages;
		this.total_results = total_results;
	}
}

class MovieDetails {
	id: string;
	tagline: string;
	budget: number;
	revenue: number;
	runtime: string;
	overview: string;
	poster_path: string;
	title: string;
	vote_average: string;

	constructor(
		id: string,
		tagline: string,
		budget: number,
		revenue: number,
		runtime: string,
		overview: string,
		poster_path: string,
		title: string,
		vote_average: string
	) {
		this.id = id;
		this.tagline = tagline;
		this.budget = budget;
		this.revenue = revenue;
		this.runtime = runtime;
		this.overview = overview;
		this.poster_path = poster_path;
		this.title = title;
		this.vote_average = vote_average;
	}
}

export { Movies, MovieDetails };
