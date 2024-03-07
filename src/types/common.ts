export type MoviePosterUrl = string | null;

export type MovieListItem = {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": MoviePosterUrl;
  "photo_width": number;
  "photo_height": number;
};

export type Movie = {
  imdbId: string;
  short: {
    name: string;
    description: string;
    actor: { name: string }[];
    review?: {
      name?: string;
      body?: string;
    };
    aggregateRating?: {
      ratingValue: number;
      ratingCount: number;
    };
  };
  top: {
    reviews: {
      total: number;
    };
  };
};
