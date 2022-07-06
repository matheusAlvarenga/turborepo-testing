import React, { useEffect, useState } from "react";
import { getHelloMessage } from "api";
import { Thing } from "web-components";

const App = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const helloMessage = await getHelloMessage();

        setMessage(helloMessage.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    <h1>Carregando</h1>;
  }

  return (
    <div>
      <h1>Admin CRA Application</h1>
      <Thing text={message} />
    </div>
  );
};

export default App;
