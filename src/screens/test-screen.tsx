import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const TestScreen = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse("../words/indonesian_100_verbs.csv", {
        header: true,
      });
      const parsedData = csv.data;
      console.log(parsedData);
      const columns = Object.keys(parsedData[0]);
      setData(columns);
    };
    const t = reader.readAsText(file);
    console.log(data);
  };

  useEffect(() => {
    handleParse()
  }, [])

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default TestScreen;
