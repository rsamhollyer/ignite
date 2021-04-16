import { gameDetails } from "../api/api";

const cache = {};
const imageCache = {};

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  if (cache[id]) {
    const data = cache[id];
    const images = imageCache[id];
    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: data,
        screen: images,
      },
    });
  }
  const detailData = await gameDetails(id);
  cache[id] = detailData;
  imageCache[id] = short_screenshots;
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData,
      screen: short_screenshots,
    },
  });
};
