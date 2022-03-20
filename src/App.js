import Header from "./components/Header";
import NewsWithImage from "./components/NewsWithImage";
import { useState, useEffect } from "react";
function App() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  const news =
    newsData &&
    newsData.map((newData) => (
      <NewsWithImage key={newData.id} newData={newData} />
    ));

  return (
    <div className="App">
      <Header />
      {news}
    </div>
  );
}

export default App;
