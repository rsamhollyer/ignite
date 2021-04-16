import { gameDetails } from "../api/api";

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  const detailData = await gameDetails(id);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData,
      screen: short_screenshots,
    },
  });
};
