import { getDatabase, onValue, ref, update } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoArecBjNWTWB8IUiVx_1AIJafRQXzq4Y",
  authDomain: "cs-392-react-tutorial.firebaseapp.com",
  databaseURL: "https://cs-392-react-tutorial-default-rtdb.firebaseio.com",
  projectId: "cs-392-react-tutorial",
  storageBucket: "cs-392-react-tutorial.appspot.com",
  messagingSenderId: "1059143274077",
  appId: "1:1059143274077:web:a8ec1cbf544236175cc7b4",
  measurementId: "G-QLNWDHM9M1",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};
