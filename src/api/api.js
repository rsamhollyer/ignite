import axios from "axios";
import moment from "moment";

const rawgAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  timeout: 5000,
  params: {
    key: process.env.REACT_APP_RAWG_API,
  },
});

export const popularGames = async () => {
  const today = moment().format("YYYY-MM-DD");
  const lastYear = moment().subtract(1, "year").format("YYYY-MM-DD");

  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${lastYear},${today}`,
      ordering: "-rating",
      page_size: 10,
    },
  });
  return data;
};

export const upcomingGames = async () => {
  const today = moment().format("YYYY-MM-DD");
  const nextYear = moment().add(1, "year").format("YYYY-MM-DD");
  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${today},${nextYear}`,
      ordering: "-added",
      page_size: 10,
    },
  });
  return data;
};

export const newGames = async () => {
  const today = moment().format("YYYY-MM-DD");
  const lastYear = moment().subtract(1, "year").format("YYYY-MM-DD");

  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${lastYear},${today}`,
      ordering: "-released",
      page_size: 10,
    },
  });
  return data;
};

export const gameDetails = async (game_id) => {
  const { data } = await rawgAxios.get(`/games/${game_id}`);

  return data;
};

export const searchGames = async (game_name) => {
  const { data } = await rawgAxios.get(`/games`, {
    params: {
      search: game_name,
      page_size: 9,
    },
  });
  return data;
};
