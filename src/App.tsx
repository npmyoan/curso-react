import { useState } from "react";
import { Button } from "./components/ui/Button/Button";

function App() {
  const [btnColor, setBtnColor] = useState<string>("btn-primary");

  const handleClick = () => {
    console.log("hola");
    setBtnColor("btn-success");
  };

  return (
    <div>
      <Button className={`text-white ${btnColor}`} onClick={handleClick}>
        add product
      </Button>
    </div>
  );
}
export default App;
