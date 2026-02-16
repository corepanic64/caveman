import "./App.css";
import { SelectComponent } from "./components/shared/select";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>start</Button>
      <SelectComponent />
    </div>
  );
}

export default App;
