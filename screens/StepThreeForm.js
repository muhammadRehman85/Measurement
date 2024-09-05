import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React ,{useState} from 'react';

const StepThreeForm = ({ route, navigation }) => {
  console.log(route.params);
  const [additionalMeasurement, setAdditionalMeasurement] = useState('');
// console.log(additionalMeasurement)

  const formData={
    ...route.params,
    additionalMeasurement:additionalMeasurement
  }

const handleNext=()=>{
  // addFormData();
  navigation.navigate('Form')
}

console.log(formData);
  return (
    <KeyboardAvoidingView
      style={styles.containerWrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../assets/add.png')}
              style={{ width: 14, height: 14, resizeMode: 'contain', marginTop: 5 }}
            />
            <Text style={styles.headerText}>Add Measurement</Text>
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              multiline={true}  
              textAlignVertical="top" 
              placeholder="Add Additional Measurement"
              value={additionalMeasurement}  // Bind the state value to the input
              onChangeText={(value) => setAdditionalMeasurement(value)}
              
            />
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.countCircle}>
              <Text style={styles.countCircleText}>1</Text>
            </View>
            <View style={styles.StepTwoLine}></View>
            <View style={styles.countCircle}>
              <Text style={styles.countCircleText}>2</Text>
            </View>
            <View style={styles.StepTwoLine}></View>
            <View style={styles.countCircle}>
              <Text style={styles.countCircleText}>3</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
              <Text style={styles.cancelText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(72, 101, 41, 1)',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: 'rgba(0, 0, 0, 1)',
  },
  inputGroup: {
    width: '100%',
    minHeight: 250,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  input: {
    width: '100%',
    minHeight:44,
    color: 'gray',
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    marginTop: 210,
    width: '100%',
    justifyContent: 'space-between',
  },
  countCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(69, 97, 40, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(69, 97, 40, 1)',
  },
  countCircleText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  StepTwoLine: {
    width: 80,
    height: 2,
    backgroundColor: 'rgba(69, 97, 40, 1)',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingVertical: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelText: {
    color: 'gray',
    textAlign: 'center',
  },
  nextButton: {
    flex: 1,
    backgroundColor: 'rgba(69, 97, 40, 1)',
    paddingVertical: 15,
    borderRadius: 5,
  },
  nextText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default StepThreeForm;
