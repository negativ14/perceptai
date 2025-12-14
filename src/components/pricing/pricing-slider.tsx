import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

export function PricingSlider({
  title,
  value,
  setValue,
}: {
  title: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-mono">{title}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Slider
          min={0}
          max={10000}
          step={1}
          value={[value]}
          onValueChange={(v) => setValue(v[0])}
          className="flex-1"
        />
        <Input
          type="number"
          min={0}
          max={10000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-24 text-right"
        />
      </div>
    </div>
  );
}