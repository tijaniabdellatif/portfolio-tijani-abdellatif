declare module "tailwindcss/lib/util/color" {
  const parseColor: (value: string) => { color: Array<string> };
  export { parseColor };
}

// Define or import the Config type
// If Config is defined in your code, you need to declare it, e.g.,
// type Config = {/* define the structure here */};

// If Config is from an external library, import it like this:
// import { Config } from 'some-library';

declare module "tailwindcss" {
  import { Config } from "tailwindcss/types/config";
  export type { Config };
}
declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (colors: any) => Record<string, string>;
  export default flattenColorPalette;
}

declare module "tailwindcss/colors" {
  const colors: { [key: string]: any };
  export default colors;
}