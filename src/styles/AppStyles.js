import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    resizeMode: "cover"
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fffffff5",
    marginTop: 5,
    marginBottom: 50
  },
  logoImg: {
    width: 155,
    height: 155,
    marginRight: 15,
    marginBottom: 40,
  },
  logoWrapper: {
    flexDirection: 'column',

    display:'flex',
    alignItems:'center'
  },
  formInput: {
    height: 44,
    margin: 15,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#aaaaaa88",
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: '#fff',
  },
  button: {
    fontSize: 22,
    paddingTop: 3,
    textAlign: "center",
    color: "#76FEC5",
    overflow: 'hidden',
    width: 120,
    height: 40,
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: '#fff'
  },
  buttonsWrapper: {
    marginTop: 25,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  link: {
    color: "#76FEC5",
    fontSize: 15,
    alignSelf: "center",
    marginTop: 10
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

}
);
