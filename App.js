/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, 
  Button,
  TouchableOpacity
} from 'react-native';
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; 

// Importamos Formik y Yup 
import { Formik } from 'formik'; 
import * as yup from 'yup'; 

// Mensajes de Validación del Formulario 
const loginValidationSchema = yup.object().shape({

  nombresyapellidos: yup
    .string("Ingresa tus Nombres y Apellidos")
    .required("*Campo requerido"),

  email: yup
    .string("Ingresa tu Email")
    .required("*Campo requerido")
    .email("Ingresa un Email válido"),

  telefono: yup
    .number("Ingresa tu Teléfono")
    .required("*Campo requerido"), 

  mensaje: yup
    .string("Ingresa tu Mensaje")
    .required("*Campo requerido"),
    
}); 
 
const App: () => React$Node = () => {
  const [postres, elegirPostre] = useState('Seleccionar Postre');
   return (
    <>      
        <View>
          
          <Text style={styles.formulario}> Formulario de Contacto </Text>

          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ nombresyapellidos: '', email:'', telefono: '', mensaje: '' }}
            onSubmit={values => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>

                <TextInput style={styles.nombresyapellidos} 
                  placeholder="Nombres y Apellidos"
                  onChangeText={handleChange('nombresyapellidos')}
                  onBlur={handleBlur('nombresyapellidos')}
                  value={values.nombresyapellidos}
                  keyboardType="default" /> 

                  {(errors.nombresyapellidos && touched.nombresyapellidos) &&
                    <Text style={styles.errorText}>{errors.nombresyapellidos}</Text>
                  }

                <TextInput style={styles.email} 
                  placeholder="micorreo@micorreo.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address" /> 

                  {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
         
                <TextInput style={styles.telefono} 
                  placeholder="Nro. de Teléfono"
                  onChangeText={handleChange('telefono')}
                  onBlur={handleBlur('telefono')}
                  value={values.telefono}
                  keyboardType="number-pad" /> 

                  {(errors.telefono && touched.telefono) &&
                    <Text style={styles.errorText}>{errors.telefono}</Text>
                  }
         
                <TextInput style={styles.mensaje} 
                  onChangeText={handleChange('mensaje')}
                  onBlur={handleBlur('mensaje')}
                  value={values.mensaje}
                  keyboardType="default"
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Ingresa tu Mensaje" /> 

                  {(errors.mensaje && touched.mensaje) &&
                    <Text style={styles.errorText}>{errors.mensaje}</Text>
                  }
         
                <TouchableOpacity
                  style={styles.colorBtn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.colorTxtBtn}>Aceptar</Text>
                </TouchableOpacity>

              </>
            )}
          </Formik>
        </View>      
    </>
  )
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

  email: {
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