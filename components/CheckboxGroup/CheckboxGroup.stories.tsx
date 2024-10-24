import CheckboxGroup from "./CheckboxGroup";

const meta = {
  component: CheckboxGroup,
  title: "CheckboxGroup",
  args: {},
};

export default meta;

export const Basic = {
  args: {
    name: "filters",
    values: ["a", "b", "c"],
    onChange: (values: string[]) => console.log(values),
  },
};
