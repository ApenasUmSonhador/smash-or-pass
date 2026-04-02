import './App.css';
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [message, setmessage] = useState("Carregando...");

  useEffect(() => {
    api.get("/health")
      .then(res => {
        setmessage(res.data?.message || JSON.stringify(res.data));
      })
      .catch(() => {
        setmessage("Error connecting to the API.");
      });
  }, []);

  return (
    <div>
      <h1>Smash or Pass Recipes</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
