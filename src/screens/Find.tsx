import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { IFindZ, IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';
import { theme } from '../utils/theme';

type IFindScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Find'>;
};

const FindScreen: React.FC<IFindScreenProps> = (): React.JSX.Element => {
  const [result, setResult] = useState<string>('');
  const [formValues, setFormValues] = useState<IFindZ>({
    a: '',
    b: '',
    c: '',
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof IFindZ, string>>
  >({});

  const handleChange = (key: keyof IFindZ, value: string) => {
    // allow empty
    if (value === '') {
      setFormValues(prev => ({ ...prev, [key]: value }));
      return;
    }

    // allow just "-"
    if (value === '-') {
      setFormValues(prev => ({ ...prev, [key]: value }));
      return;
    }

    // block +
    if (value.includes('+')) return;

    // block -0 then convert it to 0
    if (value === '-0') value = '0';

    // count digits (exclude - and .)
    const digitCount = value.replace(/[-.]/g, '').length;
    if (digitCount > 7) return;

    // final validation
    const numberRegex = /^-?(0|[1-9]\d*)(\.\d+)?$/;
    if (!numberRegex.test(value)) return;

    // Clear the error for this field when user starts typing
    const errors = { ...formErrors };
    delete errors[key];
    setFormErrors(errors);

    // update value
    setFormValues(prev => ({ ...prev, [key]: value }));

    // clear result
    setResult('');
  };

  const findZ = () => {
    // validate form
    const errors: Partial<Record<keyof IFindZ, string>> = {};
    if (!formValues.a) errors.a = 'A is required';
    if (!formValues.b) errors.b = 'B is required';
    if (!formValues.c) errors.c = 'C is required';
    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    const A = Number(formValues.a);
    const B = Number(formValues.b);
    const C = Number(formValues.c);
    const res = (B * C) / A;
    setResult(res.toString());
  };

  return (
    <ScreenView>
      <View style={styles.findContainer}>
        <Text style={styles.headerText}>
          Enter values of A, B & C to find Z
        </Text>
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>If A is</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter A"
              value={formValues.a}
              onChangeText={value => handleChange('a', value)}
              maxLength={7}
            />
            <Text style={styles.errorText}>{formErrors.a ?? ' '}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>then B is equal to</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter B"
              value={formValues.b}
              onChangeText={value => handleChange('b', value)}
              maxLength={7}
            />
            <Text style={styles.errorText}>{formErrors.b ?? ' '}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>If C is</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter C"
              value={formValues.c}
              onChangeText={value => handleChange('c', value)}
              maxLength={7}
            />
            <Text style={styles.errorText}>{formErrors.c ?? ' '}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.inputLabel}>then Z is?</Text>
            <TouchableOpacity style={styles.btn} onPress={findZ}>
              <Text style={styles.btnText}>Click here</Text>
            </TouchableOpacity>
            <Text style={styles.errorText}>{''}</Text>
          </View>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Z = {result ? result : '?'}</Text>
        </View>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  findContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: theme.text,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  inputsContainer: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '45%',
    marginVertical: 5,
  },
  inputLabel: {
    color: theme.text,
    paddingLeft: 7,
  },
  input: {
    color: theme.text,
    backgroundColor: theme.dark,
    borderWidth: 2,
    borderColor: theme.grey,
    borderRadius: 20,
    height: 50,
    padding: 10,
    marginVertical: 10,
  },
  btnContainer: {
    width: '45%',
    marginVertical: 5,
  },
  btn: {
    color: theme.text,
    backgroundColor: theme.secondary,
    borderWidth: 2,
    borderColor: theme.secondary,
    borderRadius: 20,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.text,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  resultContainer: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    paddingVertical: '25%',
  },
  resultText: {
    color: theme.text,
    fontSize: 37,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: theme.error,
    paddingLeft: 7,
    marginBottom: 8,
    fontSize: 12,
  },
});

export default FindScreen;
