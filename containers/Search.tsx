import SearchBox from "@/components/SearchBox/SearchBox";
import useStore from "@/store/useStore";
import { Device } from "@/types/adaptedData";
import React, { useState } from "react";

function filterAndGetIdx(devices: Device[], byName: string) {
  return devices.reduce<{ device: Device; idx: number }[]>(
    (acc, curr, currIdx) => {
      if (curr.product.name.indexOf(byName) !== -1) {
        acc.push({
          device: curr,
          idx: currIdx,
        });
      }
      return acc;
    },
    [],
  );
}

type SearchProps = {
  devices: Device[];
};
const Search = ({ devices }: SearchProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const results = query.length > 2 ? filterAndGetIdx(devices, query) : [];

  const resultsNames = results.map(
    ({
      device: {
        product: { name },
      },
    }) => name,
  );

  const setDetailsProductIdx = useStore((state) => state.setDetailsProductIdx);

  const setSelectedName = (name: string) => {
    setSelected(name);
    const selectedIdx =
      results.find(({ device: { product } }) => product.name === name)?.idx ??
      -1;
    setDetailsProductIdx(selectedIdx);
  };
  return (
    <SearchBox
      setQuery={setQuery}
      query={query}
      selected={selected}
      setSelected={setSelectedName}
      results={resultsNames}
    />
  );
};

export default Search;
