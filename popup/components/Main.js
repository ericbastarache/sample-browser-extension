import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Link from 'react-router/lib/Link';
import Select from './Select';
import { selectors as countrySel, FETCH_COUNTRY_DATA, CHANGE_COUNTRY, fetchCountryData, changeCountry } from '../../background/reducers/country/actions';
import { LOGOUT } from '../../background/reducers/login/actions';
import Button from './Button';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log(fetchCountryData());
  }
  render() {
    // const { country, countries } = this.props;
    console.log('this.props -- main', this.props);
    return (
      <div>
        <h3>Selected Country: </h3>
        <Select>
          {/* {this.props.countries.map(country => {
            return <option value={country.name}>{country.name}</option>
          })} */}
        </Select>
        <Link to="/options">Options</Link>
        <Button name="logout" onClick={this.handleLogout.bind(this)}>Logout</Button>
      </div>
    )
  }

  handleLogout (e) {
    const { dispatch, history } = this.props;
    dispatch({type: LOGOUT});
    // logout();
    this.context.router.push('/login');
  }
}

const mapStateToProps = state => {
  console.log('main state', state);
  return {
    countries: state.countryReducer,
    country: state.countryReducer
  }
}

// const enhance = connect(
//   state => ({
//     countries: countrySel,
//   }),
//   {
//     dispatch,
//     fetchCountryData,
//     changeCountry
//   }
// );

// export default enhance(Main);

export default connect(mapStateToProps)(Main);