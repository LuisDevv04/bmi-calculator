import { useState } from "react";
import { calculateBMI, getBMICategory } from "./utils/bmi";
import BMIForm from "./components/BMIForm";
import BMIResult from "./components/BMIResult";

function App() {
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const handleCalculate = (weight: number, height: number) => {
    const result = calculateBMI(weight, height);
    setBmi(result);
    setCategory(getBMICategory(result));
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">BMI Calculator</h1>
      <BMIForm onCalculate={handleCalculate} />
      <BMIResult bmi={bmi} category={category} />
    </div>
  );
}

export default App;
