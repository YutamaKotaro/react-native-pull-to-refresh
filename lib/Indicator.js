'use strict'

import Style from './Style'
import React, {PropTypes} from 'react'
import {
  View,
} from 'react-native'

export default class Indicator extends React.Component {
  render () {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
        <View style={{width: 36, height: 36}}/>
      )
    } else {
      display_object = (
        <View style={{width: 36, height: 36}}/>
      )
    }
    return (
      <View style={Style.IndicatorWrap}>
        {display_object}
      </View>
    )
  }
}

Indicator.propTypes = {
  needPull: PropTypes.bool
}
