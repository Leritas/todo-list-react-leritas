import { useContext } from "react";

export const useStrictContext = <T>(
  contextName: React.Context<T | null>
): T => {
  const context = useContext(contextName);
  if (context === null) throw new Error("Не передан контекст");
  return context;
};
