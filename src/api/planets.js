import axios from "@/api/axios";

const getPlanets = (page) => {
  return axios.get(`/planets/?page=${page}`);
};

export default { getPlanets };
