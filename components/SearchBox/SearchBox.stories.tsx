import SearchBox from "./SearchBox";
import { useState } from "react";

const meta = {
  component: SearchBox,
  title: "SearchBox",
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-screen">
        <Story />
      </div>
    ),
  ],
  args: {},
};

export default meta;

export const Basic = () => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const items = ["hello world", "hello xun", "xun yang"];
  const results = query ? items.filter((one) => one.indexOf(query) !== -1) : [];
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div>{selected}</div>
      <SearchBox
        setQuery={setQuery}
        query={query}
        results={results}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
