import { HomeRoutes } from "../modules/home";
import { MovieDetailsRoutes } from "../modules/movie-details";

export type HomeNavigatorStackParamList = {
  [HomeRoutes.HOME]: undefined;
  [HomeRoutes.MOVIE_DETAILS_FLOW]: undefined;
};

export type MovieDetailsNavigatorStackParamList = {
  [MovieDetailsRoutes.MOVIE_DETAILS]: undefined;
};