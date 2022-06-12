import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import Button from "./Button";

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      {/* to show a loading spinner */}
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}> {message} </Text>
      {/* <Button mode={"flat"} onPress={onConfirm}>
        Okay
      </Button> */}
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
