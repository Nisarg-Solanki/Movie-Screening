import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { movieStore, persistor } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={movieStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <SignUpUI /> },
//       { path: "/signinui", element: <SignInUI/> },
//     ],
//   },
// ]);
