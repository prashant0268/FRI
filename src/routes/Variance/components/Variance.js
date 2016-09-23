import React from 'react'

import type { VarianceObject } from '../interfaces/variance'


export const Variance = (props : Props) => (
  <div style={{ margin: '0 auto' }} >
    <h2 onClick={props.sayHello}>Variance</h2>
    {props.variance.counter}
  </div>
)

type Props = {
    variance : ?VarianceObject,
    sayHello: Function
}

Variance.propTypes = {
    sayHello :  React.PropTypes.func.isRequired
}

export default Variance
