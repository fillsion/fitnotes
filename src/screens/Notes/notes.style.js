import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    paddingTop: "20%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2.61,
    elevation: 3,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },
  exerciseInfo: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#ccc",
  },
  logContainer: {
    marginLeft: "10%",
    marginBottom: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    width: "80%",
  },
  logText: {
    fontSize: 16,
    color: "#333",
  },
  logDetail: {
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  flatList: {
    flex: 1,
    width: "100%",
  },
  noLogsText: {
    marginTop: 20,
    fontSize: 18,
    color: "#666",
    fontStyle: "italic",
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});