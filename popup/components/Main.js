import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Link from 'react-router/lib/Link';
import Select from './Select';
import { FETCH_COUNTRY_DATA, CHANGE_COUNTRY, fetchCountryData, changeCountry } from '../../background/reducers/country/actions';
import { selectors as countrySel } from '../../background/reducers/country/countryReducer'
import { logout } from '../../background/reducers/login/actions';
import Button from './Button';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  componentDidMount() {
    fetchCountryData();
  }
  render() {
    const { country, countries } = this.props;
    return (
      <div>
        <h3>Selected Country: </h3>
        <Select>
          {countries ? countries.map(country => {
            return <option value={country.name}>{country.name}</option>
          }): null}
        </Select>
        <Link to="/options">Options</Link>
        <Button name="logout" onClick={this.handleLogout.bind(this)}>Logout</Button>
      </div>
    )
  }

  handleLogout (e) {
    logout();
    this.context.router.push('/login');
  }
}

const enhance = connect(
  state => ({
    countries: countrySel.countries(state),
    country: countrySel.country(state)
  }),
  {
    logout,
    fetchCountryData,
    changeCountry
  }
);

export default enhance(Main);