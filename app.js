const { useState, useEffect } = React;

function App() {
  const [status, setStatus] = useState("Inicializando...");

  useEffect(() => {
    setStatus("React carregado com sucesso 🚀");
  }, []);

  return React.createElement(
    "div",
    { style: { padding: "40px", fontSize: "20px" } },
    status
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(App)
  );
} else {
  console.error("Elemento #root não encontrado.");
}
