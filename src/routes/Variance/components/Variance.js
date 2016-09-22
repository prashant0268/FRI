import React from 'react'

export const Variance = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Variance</h2>
  </div>
)

Variance.propTypes = {
  variance     : React.PropTypes.number.isRequired,
    double   : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Variance
