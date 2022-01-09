// TODO: Need to be refactored to global table
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCompanies, deleteCompany } from "../../../actions/companies";

export class Companies extends Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies, deleteCompany } = this.props;
    return (
      <Fragment>
        <h2> Companies List</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.description}</td>
                <td>
                  <button
                    onClick={deleteCompany.bind(this, company.id)}
                    class="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

// Reducer
const mapStateToProps = (state) => ({
  companies: state.companies.companies,
});

// always connect react with redux by mapping states to props, list of actions,
// and execute it by returning current React Component.
export default connect(mapStateToProps, { getCompanies, deleteCompany })(
  Companies
);
