import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { UserContext } from "./context/UserContext";
import GeneratePrompt from "./components/GeneratePrompt";
{
  /* <h1 className="text-3xl font-bold underline">Hello world!</h1> */
}

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, SetFormData] = useState();
  const [formCust, SetFormCust] = useState();
  const [userData, setUserData] = useState();

  return (
    <>
      <UserContext.Provider
        value={{
          formData,
          SetFormData,
          formCust,
          SetFormCust,
          userData,
          setUserData,
          selectedTemplate,
          setSelectedTemplate,
        }}
      >
        <Header />
        <Main />

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
