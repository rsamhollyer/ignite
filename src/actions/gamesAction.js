import { popularGames } from "../api/api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  const { results } = await popularGames();
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: results,
    },
  });
};
