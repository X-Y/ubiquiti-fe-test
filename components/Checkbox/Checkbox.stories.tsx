import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';

const meta = {
  component: Checkbox,
  title: 'Checkbox',
  args: {
  }
}

export default meta;

export const Basic = {
  args: {
    children: 'label',
    onChange: (checked:boolean) => alert(checked)
  }
};

export const Multiple = () => {
  const [helloValue, setHelloValue] = useState<string[]>([])
  const onChange = (value: string) => {
    return (checked:boolean) => setHelloValue(old => {
      const valSet = new Set(old);
      valSet[checked ? 'add' : 'delete'](value)
      return Array.from(valSet)
    })
  }
  
  return (
    <>
      {helloValue.join(',')}
      <Checkbox name='hello' value='world' onChange={onChange('world')}>world</Checkbox>
      <Checkbox name='hello' value='xun' onChange={onChange('xun')}>xun</Checkbox>
      <Checkbox name='hello' value='yang' onChange={onChange('yang')}>yang</Checkbox>
    </>
  )
}