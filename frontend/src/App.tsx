import AppRouter from "./routers/AppRouter";
import "./App.css";
import { useEffect, useState } from "react";
import { Loading } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
