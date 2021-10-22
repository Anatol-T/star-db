import axios from "@/api/axios";

const getCharacters = () => {
  return axios.get(`/people/?page=1`);
};

export default { getCharacters };
