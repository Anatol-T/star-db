import axios from "@/api/axios";

const getPlanet = (id) => {
  return axios.get(`/planets/${id}/`);
};

export default { getPlanet };
