/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, {useState}  from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; 

import {Picker} from '@react-native-picker/picker';

 
const App: () => React$Node = () => {

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [postres, elegirPostre] = useState('Seleccionar Postre');

  function valSel(postres) {
    if(postres == 0) {
      var validar = "Campo requerido"
      console.log(validar)
    }

    return validar
    
  }


  return (
    <View>

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.nombresyapellidos}
            placeholder="Nombres y Apellidos"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            keyboardType="default"
          />
        )}
        name="nombresyapellidos"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.nombresyapellidos && <Text style={styles.errorText}>This is required.</Text>}


      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.telefono}
            placeholder="Teléfono"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            keyboardType="number-pad"
          />
        )}
        name="telefono"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.telefono && <Text style={styles.errorText}>This is required.</Text>} 


      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (

          <Picker
            style={styles.listadepostres}

            selectedValue={postres}
            onValueChange={(itemValue, itemIndex) =>
              elegirPostre(itemValue)            
            }
            >

            <Picker.Item label="Seleccionar Postre" value="0" />
            <Picker.Item label="Gelatina de Fresa" value="Gelatina de Fresa" />
            <Picker.Item label="Pie de Limón" value="Pie de Limón" />
            <Picker.Item label="Torta de Chocolate" value="Torta de Chocolate" />
          </Picker>
        )}
        name="listadepostres"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.listadepostres && <Text style={styles.errorText}>This is required.</Text>} 


      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.mensaje}
            placeholder="Mensaje"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            multiline={true}
            numberOfLines={4}
            keyboardType="default"
          />
        )}
        name="mensaje"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.mensaje && <Text style={styles.errorText}>This is required.</Text>} 


      <TouchableOpacity
        style={styles.colorBtn}
        onPress={() => {handleSubmit(onSubmit); valSel(postres)}}
      >
        <Text style={styles.colorTxtBtn}>Aceptar</Text>
      </TouchableOpacity>

    </View>
  ); 



   
};
 
const styles = StyleSheet.create({
 
  formulario: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
 
  nombresyapellidos: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  }, 
 
  telefono: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
 
  listadepostres: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  }, 
 
  mensaje: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
 
  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },
 
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },

  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }
 
});
 
export default App;