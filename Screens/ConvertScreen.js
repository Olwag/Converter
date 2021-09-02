import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Picker from '@gregfrench/react-native-wheel-picker';
import convert from 'convert-units';

const PickerItem = Picker.Item;

class ConvertScreen extends Component {
  state = {
    fromUnit: 0,
    toUnit: 1,
    value: 0,
    convertedValue: 0,
  };
  render() {
    const {measure} = this.props.route.params;
    const units = convert().possibilities(measure);

    return (
      <View style={styles.container}>
        <Text style={styles.headerBarText}>{measure}</Text>
        <View style={styles.row}>
          <Picker
            style={{width: 150, height: 180}}
            lineColor="#000"
            lineGradientColorFrom={'black'}
            lineGradientColorTo={'black'}
            selectedValue={this.state.fromUnit}
            itemStyle={{color: 'midnightblue', fontSize: 24}}
            onValueChange={value =>
              this.setState(
                {
                  fromUnit: value,
                },
                () => {
                  this.setState({
                    convertedValue: convert(+this.state.value)
                      .from(units[this.state.fromUnit])
                      .to(units[this.state.toUnit])
                      .toFixed(3),
                  });
                },
              )
            }>
            {units.map((unit, i) => (
              <PickerItem label={unit} value={i} key={i} />
            ))}
          </Picker>
          <View style={styles.column}>
            <TextInput
              value={this.state.value.toString()}
              onChangeText={value => {
                this.setState(
                  {
                    value: value,
                  },
                  () => {
                    this.setState({
                      convertedValue: convert(+this.state.value)
                        .from(units[this.state.fromUnit])
                        .to(units[this.state.toUnit])
                        .toFixed(3),
                    });
                  },
                );
              }}
              keyboardType="numeric"
              style={styles.input}
              height={80}></TextInput>
          </View>
        </View>
        <View style={styles.row}>
          <Picker
            style={{width: 150, height: 180}}
            lineColor="red"
            lineGradientColorFrom={'green'}
            lineGradientColorTo={'red'}
            selectedValue={this.state.toUnit}
            itemStyle={{color: 'midnightblue', fontSize: 24}}
            onValueChange={value =>
              this.setState(
                {
                  toUnit: value,
                },
                () => {
                  this.setState({
                    convertedValue: convert(+this.state.value)
                      .from(units[this.state.fromUnit])
                      .to(units[this.state.toUnit])
                      .toFixed(3),
                  });
                },
              )
            }>
            {units.map((unit, i) => (
              <PickerItem label={unit} value={i} key={i} />
            ))}
          </Picker>
          <View style={styles.column}>
            <Text style={[styles.input, {fontWeight: 'bold'}]}>
              {this.state.convertedValue}
            </Text>
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
  headerBarText: {
    fontSize: 32,
    fontWeight: '800',
    color: 'midnightblue',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderBottomWidth: 1,
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
  },
});

export default ConvertScreen;
