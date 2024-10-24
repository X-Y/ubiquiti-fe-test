import { PropsWithChildren, useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";


type CheckboxGroupProps = PropsWithChildren<{
  name: string;
  values: {[key: string]: boolean};
  onChange: (groupValue: string[]) => void;
}>
function CheckboxGroup({name, values, onChange}: CheckboxGroupProps) {
  const valueEntries = Object.entries(values);
  const checkedKeys = valueEntries.filter(([, value]) => !!value).map(([key]) => key);
  const [groupValue, setGroupValue] = useState(new Set<string>(checkedKeys))
  const onIndividualChange = (value: string) => {
    return (checked:boolean) => setGroupValue(old => {
      const valSet = new Set(old);
      valSet[checked ? 'add' : 'delete'](value)
      return valSet
    })
  }

  useEffect(() => {
    onChange(Array.from(groupValue))
  }, [groupValue])

  const onResetClick = () => {
    setGroupValue(new Set())
  }
  
  return (
    <>
      <div>
      {valueEntries.map(([key, value]) => (
        <Checkbox key={name+'-'+key} name={name} value={key} defaultChecked={value} checked={groupValue.has(key)} onChange={onIndividualChange(key)}>{key}</Checkbox>
      ))}
      </div>
      <button onClick={onResetClick} disabled={!groupValue.size} className="text-red-06 disabled:text-red-03">Reset</button>
    </>
  )
}

export default CheckboxGroup