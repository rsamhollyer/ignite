import { popularGames, upcomingGames, newGames, searchGames } from "../api/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await popularGames();
  const upcomingData = await upcomingGames();
  const newData = await newGames();

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.results,
      upcoming: upcomingData.results,
      newGames: newData.results,
    },
  });
};

export const fetchSearched = (game_name) => async (dispatch) => {
  const searchData = await searchGames(game_name);

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchData.results,
    },
  });
};
