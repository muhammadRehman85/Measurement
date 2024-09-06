import React ,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,ScrollView,
  Dimensions,Alert
} from 'react-native';

const Form = ({navigation}) => {
  
  const [formValues, setFormValues] = useState({
    length: '',
    sleeve: '',
    shoulder: '',
    neck: '',
    chest: '',
    loosing: '',
    hemline: '',
    shalwaar: '',
    legOpen: ''
  });
  const { width, height } = Dimensions.get('window');
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    
  };
  // console.log(formValues)
 
  const handleNext = () => {
    console.log('Form values:', formValues); // Debugging: Log current form values

    // Check if any value is empty
    if (
      formValues.length === '' || formValues.sleeve === '' || formValues.shoulder === '' || formValues.neck === '' ||
      formValues.chest === '' || formValues.loosing === '' || formValues.hemline === '' ||
      formValues.shalwaar === '' || formValues.legOpen === ''
    ) {
      Alert.alert('Error', 'Please fill out all the fields.');
    } else {
      // Navigate to StepTwoForm with formValues if validation passes
      navigation.navigate('StepTwoForm', { formValues });
    }}
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  ><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.containerWrapper}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/add.png')}
          style={{width: 14, height: 14, resizeMode: 'contain',marginTop:5,}}
        />
        <Text style={styles.headerText}>Add Measurement</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kameez</Text>
        <View style={styles.row}>
          <Image
            source={require('../assets/length.png')}
            style={{width: 34, height: 35, resizeMode: 'contain',marginTop:5,}}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Length" 
            
            value={formValues.length}
            onChangeText={(value) => handleInputChange('length', value)}
            />
          </View>
          <Image
            source={require('../assets/sleeve.png')}
            style={{
              width: 34,
              height: 35,
              resizeMode: 'contain',marginTop:9,
              marginLeft: 15,
            }}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Sleeve" 
             value={formValues.sleeve}
             onChangeText={(value) => handleInputChange('sleeve', value)}/>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/shoulder.png')}
            style={{width: 34, height: 35, resizeMode: 'contain',marginTop:5,}}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Shoulder" 
             value={formValues.shoulder}
             onChangeText={(value) => handleInputChange('shoulder', value)}
            />
          </View>
          <Image
            source={require('../assets/neck.png')}
            style={{
              width: 30,
              height: 35,
              resizeMode: 'contain',marginTop:9,
              marginLeft: 15,
            }}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Neck" value={formValues.neck}
            onChangeText={(value) => handleInputChange('neck', value)} />
          </View>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/chest.png')}
            style={{width: 34, height: 35, resizeMode: 'contain',marginTop:9,}}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Chest"  
            value={formValues.chest}
            onChangeText={(value) => handleInputChange('chest', value)} />
          </View>
          <Image
            source={require('../assets/loosing.png')}
            style={{
              width: 30,
              height: 35,
              resizeMode: 'contain',marginTop:9,
              marginLeft: 15,
            }}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Waist" />
          </View>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/hemline.png')}
            style={{width: 34, height: 35, resizeMode: 'contain',marginTop:5,}}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Hip" 
             value={formValues.hemline}
             onChangeText={(value) => handleInputChange('hemline', value)}/>
          </View>
          <Image
            source={require('../assets/pati.png')}
            style={{
              width: 34,
              height: 35,
              resizeMode: 'contain',marginTop:10,
              marginLeft: 15,
            }}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="front Patti" 
             value={formValues.loosing}
             onChangeText={(value) => handleInputChange('loosing', value)}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shalwaar</Text>
        <View style={styles.row}>
          <Image
            source={require('../assets/shalwar.png')}
            style={{width: 32, height: 35, resizeMode: 'contain',marginTop:7,}}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Shalwaar"
             value={formValues.shalwaar}
             onChangeText={(value) => handleInputChange('shalwaar', value)}
            />
          </View>
          <Image
            source={require('../assets/legopen.png')}
            style={{
              width: 36,
              height: 37,
              resizeMode: 'contain',marginTop:12,
              marginLeft: 16,
            }}
          />

          <View style={styles.inputGroup}>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Leg open"
             value={formValues.legOpen}
             onChangeText={(value) => handleInputChange('legOpen', value)} />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row',marginTop:70,width:'100%'}}>
        <View
          style={styles.countCircle}>
          <Text
            style={styles.countCircleText}>
            1
          </Text>
        </View>
        <View style={styles.line}></View>
        <View
          style={styles.countCircleDisabled}>
          <Text
            style={styles.countCircleDisabledText}>
            2
          </Text>
        </View>
        <View style={styles.line}></View>
        <View
          style={styles.countCircleDisabled
          }>
          <Text
            style={styles.countCircleDisabledText}>
            3
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View></View></ScrollView></KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerWrapper:{
    flex:1,
    padding:20,backgroundColor:'rgba(72, 101, 41, 1)',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius:12
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
  section: {
    marginBottom:11,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: 'rgba(0, 0, 0, 1)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputGroup: {
    width: 96,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginLeft: 10,
    marginTop:5,
  },
  image: {},
  input: {
    width: 96,
    height: 44,
    // marginLeft: 10,
    color: 'rgba(173, 173, 173, 1)',
    // backgroundColor:'red'
  },
  countCircle:{
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: 'rgba(69, 97, 40, 1)',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(69, 97, 40, 1)',
    justifyContent: 'center',
  },
  countCircleText:{
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  countCircleDisabled:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor:'rgba(244, 244, 244, 1)',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(244, 244, 244, 1)',
    justifyContent: 'center',
   
  },
  countCircleDisabledText:{
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
  },
  line:{width:80,height:2,backgroundColor:'rgba(244, 244, 244, 1)',marginTop:20},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',marginTop:15
    
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    paddingVertical: 15,
    borderRadius: 5,
    marginRight: 10,
    
  },
  cancelText: {
    color: 'rgba(0, 0, 0, 1)',
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

export default Form;
