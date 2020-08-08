import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  teacherList: {
    marginTop: -45,
    padding: 12,
  },
  noContent: {
    flex: 1,
    alignItems: "center",
  },
  noContentText: {
    marginTop: 80,
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
    color: "#ccc",
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    flexDirection: "row",
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
  },
  featherIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default styles
