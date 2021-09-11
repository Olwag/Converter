import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Picker from '@gregfrench/react-native-wheel-picker';
import convert from 'convert-units';

const {width, height} = Dimensions.get('window');

const measures = convert().measures();
const row1Measures = [measures[0], measures[1], measures[2], measures[3]];
const row2Measures = [measures[4], measures[5], measures[6], measures[7]];
const row3Measures = [measures[8], measures[9], measures[10], measures[11]];
const row4Measures = [measures[12], measures[13], measures[14], measures[15]];
const row5Measures = [measures[16], measures[17], measures[18], measures[19]];
const row6Measures = [measures[20], measures[21], measures[22]];

class HomeScreen extends Component {
  renderRow(measures) {
    return (
      <View style={styles.row}>
        {measures.map((measure, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measure,
                })
              }>
              <Text style={styles.btnText}>{this.unCamelCase(measure)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  unCamelCase(value) {
    return value.replace(/([A-Z])/g, ' $1');
  }
  render() {
    console.log(measures);
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarTitle}>ConverterPro</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PremiumScreen')}>
            <Text style={styles.headerBarTitle}>Premium</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ConverterProContainer}>
          {this.renderRow(row1Measures)}
          {this.renderRow(row2Measures)}
          {this.renderRow(row3Measures)}
          {this.renderRow(row4Measures)}
          {this.renderRow(row5Measures)}
          {this.renderRow(row6Measures)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ConverterProContainer: {
    marginTop: 20,
    flex: 10,
    alignItems: 'center',
  },

  headerBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomColor: 'steelblue',
    borderBottomWidth: 1,
    backgroundColor: 'crimson',
    alignItems: 'center',
  },
  headerBarTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'aliceblue',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: width / 4 - 30,
    height: width / 4 - 30,
    backgroundColor: 'crimson',
    borderRadius: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    color: 'aliceblue',
    textTransform: 'capitalize',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
