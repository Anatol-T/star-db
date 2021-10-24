import axios from "@/api/axios";

const getStarships = (page) => {
  return axios.get(`/starships/?page=${page}`);
};

export default { getStarships };
