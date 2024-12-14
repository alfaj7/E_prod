import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [Pdata, setData] = useState([]);

  async function fetchData() {
    try {
      let response = await axios.get(
        "https://675d09c2fe09df667f65370a.mockapi.io/prod"
      );
      let data = await response.data;
      setData(data);
    } catch (error) {}
  }
  console.log(Pdata);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      {Pdata?.map((e) => (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <h3>{e.name}</h3>
          <h2>{e.price}</h2>
          <p>{e.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
