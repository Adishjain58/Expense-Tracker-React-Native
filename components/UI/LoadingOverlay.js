import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      {/* to show a loading spinner */}
      <ActivityIndicator size="large" color={"white"} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
});
