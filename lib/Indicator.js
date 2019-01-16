'use strict'

import Style from './Style'
import React from 'react'
import PropTypes from 'prop-types';
import ARROW from './icon/arrow.png'
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
  image: {
    width: 36,
    height: 36,
  },
});

export default class Indicator extends React.Component {
  render () {
    var display_object = ''
    if (this.props.needPull) {
      display_object = (
        <View style={styles.indicator}>
          <Image source={ARROW} style={{width: 36, height: 36}}/>
        </View>
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
