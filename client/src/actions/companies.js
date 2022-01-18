import axios from "axios";

import { GET_COMPANIES, DELETE_COMPANY } from "./types";

// GET COMPANIES
const getCompanies = () => (dispatch) => {
  axios
    .get("api/companies/")
    .then((res) => {
      dispatch({
        type: GET_COMPANIES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE COMPANY
const deleteCompany = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`api/companies/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_COMPANY,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export { getCompanies, deleteCompany };
