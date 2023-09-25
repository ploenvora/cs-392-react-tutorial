import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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

const firebase = initializeApp(firebaseConfig);

export async function fetchDataFromDatabase() {
  const database = getDatabase(firebase);
  const databaseRef = ref(
    database, 
  );
  try {
    const snapshot = await get(databaseRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data)
      return data
    } else {
      console.log("No data found in the database");
      return
    }
  } catch (error) {
    console.error("Error fetching data from the database:", error);
  }
}