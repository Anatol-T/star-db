import axios from "@/api/axios";

const getSpecies = (page) => {
  return axios.get(`/species/?page=${page}`);
};

export default { getStarships: getSpecies };
