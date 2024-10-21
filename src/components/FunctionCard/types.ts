export interface FunctionCardProps {
  id: number;
  input: number;
  onResultChange: (result: number) => void;
  finalOutput?: (val: number) => void;
  equation: string;
  setEquation: React.Dispatch<React.SetStateAction<string[]>>;
}
