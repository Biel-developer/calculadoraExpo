
<<<<<<< HEAD
import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native"


export default function Rootlayout() {

  const [valor, setValor] = useState('')
  const [expressao, setExpressao] = useState('')

  function adicionar(numero: string) {
    setValor(valor + numero)
  }

  function limparTela() {
    setValor('')
    setExpressao('')
  }

  function resultadoOperacao() {
    setValor(eval(valor))
    setExpressao(valor)
  }



  return (
    <View style={style.container}>
      <Text style={style.expressao}>{expressao}</Text>
      <View style={style.scrollView}>
      <ScrollView>
        <Text style={style.display}>{valor === '' ? '0' : valor.toLocaleString('pt-BR')}</Text>
      </ScrollView>
      </View>


      <View style={style.row}>
        <TouchableOpacity style={style.botao} onPress={() => adicionar('7')}>
          <Text style={style.textoRow}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('8')}>
          <Text style={style.textoRow}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('9')}>
          <Text style={style.textoRow}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('/')}>
=======
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Rootlayout() {
  return (
    <View style={style.container}>
      <Text style={style.display}>8</Text>

      <View style={style.row}>
        <TouchableOpacity style={style.botao} >
          <Text style={style.textoRow}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}  >
          <Text style={style.textoRow}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
          <Text style={style.textoRow}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={style.row}>
<<<<<<< HEAD
        <TouchableOpacity style={style.botao} onPress={() => adicionar('4')}>
          <Text style={style.textoRow}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('5')}>
          <Text style={style.textoRow}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('6')}>
          <Text style={style.textoRow}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('*')}>
=======
        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={style.botao}>
          <Text style={style.textoRow}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
          <Text style={style.textoRow}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={style.row}>
<<<<<<< HEAD
        <TouchableOpacity style={style.botao} onPress={() => adicionar('1')}>
          <Text style={style.textoRow}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('2')}>
          <Text style={style.textoRow}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('3')}>
          <Text style={style.textoRow}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('-')}>
=======
        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={style.botao}>
          <Text style={style.textoRow}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
          <Text style={style.textoRow}>-</Text>
        </TouchableOpacity>
      </View>

<<<<<<< HEAD
      <View style={style.row}>
        <TouchableOpacity style={style.botao} onPress={() => adicionar('0')}>
          <Text style={style.textoRow}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={limparTela}>
          <Text style={style.textoRow}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={resultadoOperacao}>
          <Text style={style.textoRow}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao} onPress={() => adicionar('+')}>
=======
    <View style={style.row}>
        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={style.botao}>
          <Text style={style.textoRow}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.textoRow}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
          <Text style={style.textoRow}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
<<<<<<< HEAD
    justifyContent: "flex-end",
    padding: 15
  },
  display: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: "#fff",
    textAlign: "right",
    fontSize: 85,
    marginTop: 295
  },
  botao: {
    backgroundColor: '#1e1e1e',
    width: 85,
    height: 85,
=======
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 20
  },
  display: {
    color:"#fff",
    marginLeft: 225,
    marginBottom: 10,
    fontSize:35
  },
  botao:{
    backgroundColor: '#1e1e1e',
    width: 70,
    height: 70,
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
    borderRadius: 25,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
    gap: 9
  },
<<<<<<< HEAD
  textoRow: {
    color: "#fff",
    fontSize: 24,
  },
  scrollView:{
    flex: 1,
    position: "relative",
    marginLeft: "auto"
  },
  expressao:{
    position: "absolute",
    flex: 1,
    color: "rgba(255, 255, 255, 0.47)",
    fontSize: 45,
    marginLeft: 278,
    marginBottom: 525
=======
  textoRow:{
    color: "#fff",
    fontSize: 24,
>>>>>>> 1b146c540e8ff17b2e63634d00a6e82c3d40116d
  }
})