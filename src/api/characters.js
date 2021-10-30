import axios from "@/api/axios";

const getCharacters = (page) => {
  return axios.get(`/people/?page=${page}`);
};

export default { getCharacters };
