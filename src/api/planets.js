import axios from "@/api/axios";

const getPlanets = () => {
  return axios.get(`/planets/?page=1`);
};

export default { getPlanets };
