import { HomeRoutes } from "../modules/home";
import { MovieDetailsRoutes } from "../modules/movie-details";

export type HomeNavigatorStackParamList = {
  [HomeRoutes.HOME]: undefined;
  [HomeRoutes.MOVIE_DETAILS_FLOW]: undefined;
};

export type MovieDetailsNavigatorStackProps = {
  movieId: string;
};

export type MovieDetailsScreenProps = {
  movieId: string;
};

export type MovieDetailsNavigatorStackParamList = {
  [MovieDetailsRoutes.MOVIE_DETAILS]: MovieDetailsScreenProps;
};