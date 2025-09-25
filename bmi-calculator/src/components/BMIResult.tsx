type BMIResultProps = {
  bmi: number | null;
  category: string | null;
};

export default function BMIResult({ bmi, category }: BMIResultProps) {
  if (bmi === null) return null;

  return (
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold"> Your BMI: {bmi.toFixed(2)}</h2>
      <p className="text-lg">{category}</p>
    </div>
  );
}
