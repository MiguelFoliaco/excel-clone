import "./App.less";
import { Routes } from "./Routes";
import { AppProvider } from "./app/context";

function App() {

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
