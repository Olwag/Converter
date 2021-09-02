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
const choosedMeasures = [
  measures[0],
  measures[1],
  measures[2],
  measures[3],
  measures[5],
  measures[6],
];

class HomeScreen extends Component {
  render() {
    console.log(measures);
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarTitle}>Converter</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PremiumScreen')}>
            <Text style={styles.headerBarTitle}>Premium</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.converterContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[0],
                })
              }>
              <Text style={styles.btnText}>{measures[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[1],
                })
              }>
              <Text style={styles.btnText}>{measures[1]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[2],
                })
              }>
              <Text style={styles.btnText}>{measures[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[3],
                })
              }>
              <Text style={styles.btnText}>{measures[3]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[6],
                })
              }>
              <Text style={styles.btnText}>{measures[6]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                this.props.navigation.navigate('ConvertScreen', {
                  measure: measures[5],
                })
              }>
              <Text style={styles.btnText}>{measures[5]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  converterContainer: {
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
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
  },
  headerBarTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'midnightblue',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: width / 2 - 30,
    height: height / 3.5 - 30,
    backgroundColor: 'deepskyblue',
    borderRadius: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'italic',
    color: 'midnightblue',
    textTransform: 'capitalize',
  },
});

export default HomeScreen;
