import { useState } from "react";

type BMIFormProps = {
  onCalculate: (weight: number, height: number) => void;
};

export default function BMIForm({ onCalculate }: BMIFormProps) {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      onCalculate(weight, height);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto"
    >
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight || ""}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
        className="border rounded p-2"
        required
      />
      <input
        type="number"
        placeholder="Height (m)"
        value={height || ""}
        onChange={(e) => setHeight(parseFloat(e.target.value))}
        className="border rounded p-2"
        step="0.01"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Calculate
      </button>
    </form>
  );
}
