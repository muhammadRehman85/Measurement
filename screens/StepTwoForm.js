import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image ,
  Alert
} from 'react-native';
import React, { useState } from 'react';

const StepTwoForm = ({ route,navigation }) => {


  const [selectedCollar, setSelectedCollar] = useState('');
  const [frontPocket, setFrontPocket] = useState('');
  const [selectedDaman, setSelectedDaman] = useState('');
  const [selectedPocket, setSelectedPocket] = useState('');
  const [selectedShalwaarPocket, setSelectedShalwaarPocket] = useState('');
  const [selectedCuff, setSelectedCuff] = useState('');

const {formValues}=route.params;
// ======================Updataed Measurement Values from Step Two==================
  const updatedFormValues = {
    // --------------previous form values are in formValues object------------
    ...formValues,
    // --------------adding inputs values from this steptwo form-------------
    collar: selectedCollar,
    frontPocket: frontPocket,
    daman: selectedDaman,
    pocket: selectedPocket,
    shalwaarPocket: selectedShalwaarPocket,
    cuff: selectedCuff,
  };

  // ---------------------------------------------------------------
  const collarOptions = [
    { collar: 'Collar', image: require('../assets/collar.png') },
    { collar: 'Ben', image: require('../assets/ben.png') },
    { collar: 'Half Ben', image: require('../assets/halfben.png') },
    
  ];
  const handleSelectCollar = (collar) => {
    setSelectedCollar((prev) => (prev === collar ? '' : collar));
  };
  // ------------------------------------------------------------------
  const frontPokect = [
    { pocket: 'Front Pocket', image: require('../assets/frontpokect.png') },
   
    
  ];
  const handleSelectfrontPocket = (pocket) => {
    setFrontPocket((prev) => (prev === pocket ? '' : pocket));
  };
  // --------------------------------------------------------------------
  const DamanOptions = [
    { daman: 'Round Daman', image: require('../assets/rounddaman.png') },
    { daman: 'Square Daman', image: require('../assets/squaredaman.png') },
    
  ];
  const handleSelectDaman = (daman) => {
    setSelectedDaman((prev) => (prev === daman? '' : daman));
  };
  // ==================================================================
  const PocketOptions = [
    { sidePocket: 'Single side pocket', image: require('../assets/sidesinglepocket.png') },
    { sidePocket: 'Double side pocket', image: require('../assets/doublesidepocket.png') },
    
  ];
  const handleSelectPocket = (sidePocket) => {
    setSelectedPocket((prev) => (prev === sidePocket? '' : sidePocket));
  };
  // ==================================================================
  const ShalwaarPocketOptions = [
    { shalwaarPocket: 'Shalwaar Pocket', image: require('../assets/shalwaarpocket.png') },
    
    
  ];
  const handleSelectShalwaarPocket = (shalwaarPocket) => {
    setSelectedShalwaarPocket((prev) => (prev === shalwaarPocket? '' : shalwaarPocket));
  };
  // ==================================================================
  const CuffOptions = [
    { cuff: 'Fit Cuff', image: require('../assets/fitcuff.png') },
    { cuff: 'Simple Cuff', image: require('../assets/simplecuff.png') },
    { cuff: 'Simple  round Sleeve', image: require('../assets/simpleroundsleeve.png') },
    { cuff: 'Simple  Sleeve', image: require('../assets/simpleSleeve.png') },

    
    
  ];
  const handleSelectCuff = (cuff) => {
    setSelectedCuff((prev) => (prev === cuff? '' : cuff));
  };
  // ==========================================================================
  const handleNext = () => {
  
    // --------------------Check if any value is empty----------------
    if (
      selectedCollar === '' || frontPocket === '' || selectedCuff === '' || selectedDaman === '' ||
     selectedPocket=== '' || selectedShalwaarPocket === '' 
    ) {
      Alert.alert('Error', 'Please fill out all the fields.');
    } else {
      // ------------Navigate to StepTwoForm with formValues if validation passes
      navigation.navigate('StepThreeForm', { updatedFormValues });
    }}
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/add.png')}
          style={{width: 14, height: 14, resizeMode: 'contain',marginTop:5,}}
        />
        <Text style={styles.headerText}>Add Measurement</Text>
      </View>
      {/* =======================collar options====================== */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {collarOptions.map((item) => (
            <TouchableOpacity
              key={item.collar} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectCollar(item.collar)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.collar}</Text>
              <View style={styles.radioButton}>
                {selectedCollar === item.collar && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}
{/* =============================Front Pocket Options=============================== */}
{frontPokect .map((item) => (
  <View style={{marginTop:15}}>
            <TouchableOpacity
              key={item.pocket} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectfrontPocket(item.pocket)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.pocket}</Text>
              <View style={styles.radioButton}>
                { frontPocket=== item.pocket && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity></View>
          ))}
{/* =============================Pocket Options====================================== */}
<View style={{marginTop:15}}>
{PocketOptions.map((item) => (
 
            <TouchableOpacity
              key={item.sidePocket} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectPocket(item.sidePocket)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.sidePocket}</Text>
              <View style={styles.radioButton}>
                {selectedPocket === item.sidePocket && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}</View>
{/*============================Shalwaar Pocket Option====================  */}
{ShalwaarPocketOptions.map((item) => (
  <View style={{marginTop:15}}>
            <TouchableOpacity
              key={item.shalwaarPocket} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectShalwaarPocket(item.shalwaarPocket)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.shalwaarPocket}</Text>
              <View style={styles.radioButton}>
                { selectedShalwaarPocket=== item.shalwaarPocket && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity></View>
          ))}
{/*============================Daman Options=============================  */}
<View style={{marginTop:15}}>
{DamanOptions.map((item) => (
 
            <TouchableOpacity
              key={item.daman} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectDaman(item.daman)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.daman}</Text>
              <View style={styles.radioButton}>
                {selectedDaman === item.daman && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}</View>
{/*============================  */}
<View style={{marginTop:15}}>
{CuffOptions.map((item) => (
 
            <TouchableOpacity
              key={item.cuff} // Add a unique key for each item
              style={styles.itemContainer}
              onPress={() => handleSelectCuff(item.cuff)}
            ><Image source={item.image} style={styles.image}/>
              <Text style={styles.itemText}>{item.cuff}</Text>
              <View style={styles.radioButton}>
                {selectedCuff === item.cuff && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}</View>
        </ScrollView>
        {/* ==============================buttons======================== */}
        <View style={{flexDirection: 'row',marginTop:10,width:'100%'}}>
        <View
          style={styles.countCircle}>
          <Text
            style={styles.countCircleText}>
            1
          </Text>
        </View>
        <View style={styles.StepTwoLine}></View>
        <View
          style={styles.countCircle}>
          <Text
            style={styles.countCircleText}>
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
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>
 
    </View>
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
  },header: {
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'rgba(247, 247, 247, 1)',
  },
  itemText: {
    fontSize: 16,
    marginLeft:25,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',marginLeft:'auto'
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  image:{
    width:35,height:35,resizeMode:'contain'
  },
  countCircle:{
    width: 40,
    height: 40,
    borderRadius: 20,
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
  StepTwoLine:{width:80,height:2,backgroundColor:'rgba(69, 97, 40, 1)',marginTop:20},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',marginTop:15
    
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

export default StepTwoForm;
