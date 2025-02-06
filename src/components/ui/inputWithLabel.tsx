import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps extends React.ComponentProps<"input"> {
  label: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, ...props }) => {
  return (
    <div className="grid items-center w-full gap-3">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
    </div>
  );
};

export default InputWithLabel;
