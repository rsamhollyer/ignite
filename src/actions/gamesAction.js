import { popularGames, upcomingGames, newGames } from "../api/api";

//Action Creator

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
