import React from 'react';
import { connect } from 'react-redux';
import { FETCH_OPTIONS, CHANGE_OPTION } from '../../background/reducers/options/actions'
import Select from './Select';

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
  }
  render() {
    console.log('this.props -- options', this.props);
    return (
      <div>
        <ul>
          {/* {this.data.map((option, num) => {
            return <li key={num} onClick={() => this.showOption(option).bind(this)}>{option}</li>
          })} */}
        </ul>
      </div>
    );
  }

  showOption () {
    const { dispatch } = this.props;
    dispatch({type: CHANGE_OPTION, payload: option});
  }
}

const mapStateToProps = state => {
  console.log('options state', state);
  return {
    options: state.optionsReducer,
    option: state.optionsReducer
  }
}

export default connect(mapStateToProps)(Options);