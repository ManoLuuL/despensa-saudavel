export type IMCResult = {
  value: number;
  label: string;
  color: string;
};

export type DietasIMC = {
  title: string;
  id: number;
  category: "low" | "high" | "medium";
};
