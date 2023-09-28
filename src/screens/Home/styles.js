import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
      paddingVertical: 10,
      backgroundColor: "#E0F6FC",
    },
    containerImage: {
      width: "100%",
      height: 250,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      borderRadius: 20,
      width: "100%",
      height: "100%",
    },
    line:{
        height: 15,
        width: "100%",
        backgroundColor: "#33C1ED",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
    containerIntro:{
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: 30,
        borderWidth: 0.4,
        borderColor: "gray",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    containerPerguntas:{
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: 20,
        borderWidth: 0.4,
        borderColor: "gray",
        borderRadius: 7,
        marginTop: 20,
    },
    containerButtons:{
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        marginBottom: 20,
    },
    btnLimpar:{
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    btnEnviar:{
        padding: 10,
        backgroundColor: "#1496CC",
        marginTop: 20,
        borderRadius: 10,
        width: "7%",
        alignItems: "center",
        justifyContent: "center",
    }
  });