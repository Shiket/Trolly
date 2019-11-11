import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    resizeMode: 'cover'
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000"
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffffe5",
    alignSelf:'center',
    marginBottom: 30
  },
  formInput: {
    height: 42,
    margin:20,
    marginBottom: 15,
    padding: 10,
    fontSize:16,
    color: "#fff",
    backgroundColor: "#48CFAFb2",
    borderRadius: 10,
  },
  button: {
    fontSize: 22,
    paddingTop:2,
    textAlign: "center",
    color: "#48CFAF",
    width:120,
    height:35,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#48CFAF'
  },
  buttonsWrapper:{
    marginTop: 20,
    flexDirection:'row',
    alignSelf: 'center',
    marginBottom: 30
  },
  link: {
    color: "#48CFAF",
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
  },
    backgroundImage: {
      flex: 1,
      width:'100%',
      height: '100%',
      resizeMode: 'stretch', // or 'stretch'
    }
  }
);
