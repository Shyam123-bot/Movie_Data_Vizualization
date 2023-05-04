import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import MOCK_DATA from "./mock-data";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filteredData: props.data,
      genreFilter: [],
      countryFilter: [],
    };
  }

  handleGenreFilterChange = (event) => {
    const value = event.target.value;
    this.setState((prevState) => {
      let newGenreFilter;
      if (prevState.genreFilter.includes(value)) {
        newGenreFilter = prevState.genreFilter.filter((val) => val !== value);
      } else {
        newGenreFilter = [...prevState.genreFilter, value];
      }
      return {
        genreFilter: newGenreFilter,
        filteredData: prevState.data.filter(
          (row) =>
            newGenreFilter.length === 0 || newGenreFilter.includes(row.genre)
        ),
      };
    });
  };

  handleResetFilters = () => {
    this.setState((prevState) => {
      return {
        ...this.state,
        genreFilter: [],
        countryFilter: [],
        filteredData: MOCK_DATA,
      };
    });
  };

  handleCountryFilterChange = (event) => {
    const value = event.target.value;
    this.setState((prevState) => {
      let newCountryFilter;
      if (prevState.countryFilter.includes(value)) {
        newCountryFilter = prevState.countryFilter.filter(
          (val) => val !== value
        );
      } else {
        newCountryFilter = [...prevState.countryFilter, value];
      }
      return {
        countryFilter: newCountryFilter,
        filteredData: prevState.data.filter(
          (row) =>
            newCountryFilter.length === 0 ||
            newCountryFilter.includes(row.country)
        ),
      };
    });
  };

  render() {
    const { filteredData } = this.state;
    const availableGenres = [
      ...new Set(this.state.data.map((row) => row.genre)),
    ];
    const availableCountries = [
      ...new Set(this.state.data.map((row) => row.country)),
    ];

    return (
      <>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="genreFilter">
                <Form.Label>Filter by Genre:</Form.Label>
                <DropdownButton
                  variant="secondary"
                  title={
                    this.state.genreFilter.length === 0
                      ? "All"
                      : this.state.genreFilter.join(", ")
                  }
                >
                  <Dropdown.Item
                    onClick={() =>
                      this.handleGenreFilterChange({ target: { value: [] } })
                    }
                  >
                    All
                  </Dropdown.Item>
                  {availableGenres.map((genre) => (
                    <Dropdown.Item
                      key={genre}
                      onClick={() =>
                        this.handleGenreFilterChange({
                          target: { value: genre },
                        })
                      }
                    >
                      {genre}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="countryFilter">
                <Form.Label>Filter by Country:</Form.Label>
                <DropdownButton
                  variant="secondary"
                  title={
                    this.state.countryFilter.length === 0
                      ? "All"
                      : this.state.countryFilter.join(", ")
                  }
                >
                  <Dropdown.Item
                    onClick={() =>
                      this.handleCountryFilterChange({ target: { value: [] } })
                    }
                  >
                    All
                  </Dropdown.Item>
                  {availableCountries.map((country) => (
                    <Dropdown.Item
                      key={country}
                      onClick={() =>
                        this.handleCountryFilterChange({
                          target: { value: country },
                        })
                      }
                    >
                      {country}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
            </div>
            <div className="col-md-12 d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={() => {
                  this.handleResetFilters();
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </Form>

        <Table striped bordered hover className="table mt-3">
          <thead>
            <tr>
              <th>Filmtv Id</th>
              <th>Title</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Duration</th>
              <th>Country</th>
              <th>Directors</th>
              <th>Avg Vote</th>
              <th>Critics Vote</th>
              <th>Public Vote</th>
              <th>Total Votes</th>
              <th>Humor</th>
              <th>Rhythm</th>
              <th>Effort</th>
              <th>Tension</th>
              <th>Erotism</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.filmtv_id}>
                <td>{row.filmtv_id}</td>
                <td>{row.title}</td>
                <td>{row.year}</td>
                <td>{row.genre}</td>
                <td>{row.duration}</td>
                <td>{row.country}</td>
                <td>{row.directors}</td>
                <td>{row.avg_vote}</td>
                <td>{row.critics_vote}</td>
                <td>{row.public_vote}</td>
                <td>{row.total_votes}</td>
                <td>{row.humor}</td>
                <td>{row.rhythm}</td>
                <td>{row.effort}</td>
                <td>{row.tension}</td>
                <td>{row.erotism}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default TableComponent;
