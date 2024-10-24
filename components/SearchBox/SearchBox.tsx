import { Combobox, ComboboxInput, ComboboxButton, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'

type SearchBoxProps = {
  results: string[];
  query: string;
  setQuery: (query: string) => void;
  selected: string;
  setSelected: (selected: string) => void;
}

 const SearchBox = ({results, query, setQuery, selected, setSelected}: SearchBoxProps) => {
  return (
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative md:w-80">
          <ComboboxButton className="absolute inset-y-0 left-0 px-2.5">
            <MagnifyingGlassIcon className="size-5 text-light " />
          </ComboboxButton>
          <ComboboxInput
            className='w-full h-full rounded-md border-none bg-neutral-01 hover:bg-neutral-02 py-1.5 pl-10 pr-3 text-sm/6
              focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            onChange={(event) => {
              setQuery(event.target.value)
            }}
            placeholder='Search'
          />
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className='w-[var(--input-width)] rounded-md border border-white/5 bg-white shadow-2xl p-1 [--anchor-gap:var(--spacing-1)]
           empty:invisible transition duration-100 ease-in 
           data-[leave]:data-[closed]:opacity-0 z-50'
          
        >
          {results.map((one, idx) => (
            <ComboboxOption
              key={idx}
              value={one}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-02"
            >
              <div className="text-sm/6 ">{
                one.split(query).reduce<Array<string | ReactNode>>((acc, curr) => acc.concat(curr, <span className='font-extrabold underline underline-offset-1'>{query}</span>), []).slice(0, -1)
              }</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
  )
}
export default SearchBox