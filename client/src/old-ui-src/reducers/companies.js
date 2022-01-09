import { GET_COMPANIES, DELETE_COMPANY } from "../../actions/types";

// here are our states
const initialState = {
  companies: [],
};

// action has two objects: type & payload
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case DELETE_COMPANY: {
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
