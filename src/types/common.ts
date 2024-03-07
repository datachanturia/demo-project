export type MovieListItem = {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string | null;
  "photo_width": number;
  "photo_height": number;
};

export type Movie = {
  name: string;
};
