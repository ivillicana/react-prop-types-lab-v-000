import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (typeof weight !== 'number' || weight > 300 || weight < 80) {
      console.error('Invalid ' + propName + 'supplied to ' + componentName + '. Validation failed.');
    }
  }
}