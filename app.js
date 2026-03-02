const { useState, useEffect } = React;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return React.createElement("div", null, "Carregando...");
  }

  if (!user) {
    return React.createElement(LoginScreen);
  }

  return React.createElement(MainApp, { user });
}

function LoginScreen() {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return React.createElement(
    "div",
    { style: { textAlign: "center", marginTop: "100px" } },
    React.createElement("h2", null, "Nosso Site 3.0"),
    React.createElement(
      "button",
      { onClick: login },
      "Entrar com Google"
    )
  );
}

function MainApp({ user }) {
  return React.createElement(
    "div",
    { style: { padding: "20px" } },
    React.createElement("h3", null, `Olá, ${user.displayName}`),
    React.createElement(
      "button",
      { onClick: () => auth.signOut() },
      "Sair"
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
