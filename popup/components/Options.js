import React from 'react';
import { connect } from 'react-redux';
import { fetchOptions } from '../../background/reducers/options/actions'
import { selectors as optionsSel } from '../../background/reducers/options/optionsReducer'
import Select from './Select';

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetchOptions()
  }
  render() {
    console.log('this.props -- options', this.props);
    return (
      <div>
        <ul>
          {this.data.map((option, num) => {
            return <li key={num}>{option}</li>
          })}
        </ul>
      </div>
    );
  }
}

const enhance = connect(
  state => ({
    options: optionsSel.options(state),
    option: optionsSel.option(state)
  }),
  {
    fetchOptions
  }
)

export default enhance(Options);