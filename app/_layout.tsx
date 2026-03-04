
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
          <Text style={style.textoRow}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={style.row}>
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
          <Text style={style.textoRow}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={style.row}>
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
          <Text style={style.textoRow}>-</Text>
        </TouchableOpacity>
      </View>

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
  textoRow:{
    color: "#fff",
    fontSize: 24,
  }
})