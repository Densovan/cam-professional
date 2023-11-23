import { createResource } from "solid-js";
import { readTheme } from "../../theme";

const theme = async (name: string) => {
  const theme = await readTheme();
  return theme(name);
};

export const read = (name: string) => {
  const [data] = createResource(name, theme);
  return data;
};
