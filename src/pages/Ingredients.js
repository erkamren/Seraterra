import React, { useState, useEffect } from "react";

function Ingredients() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/ucucuyag.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Veri Listesi</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.mensei}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
