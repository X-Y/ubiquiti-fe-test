
import { Checkbox as BaseCheckBox, Label, Field } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { type PropsWithChildren } from 'react'

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & PropsWithChildren<{
  onChange: (checked: boolean) => void;
}>
function Checkbox({children, onChange, ...otherProps}: CheckboxProps) {

  return (
    <Field className="flex items-center gap-2">
      <BaseCheckBox
        {...otherProps}
        onChange={onChange}
        className="group block size-4 rounded-md bg-white/10 p-0.5 ring-1 ring-neutral-03 ring-inset data-[checked]:bg-blue-06"
      >
        
        <CheckIcon className="hidden size-3 fill-white group-data-[checked]:block" />
      </BaseCheckBox>
      <Label className={'text-medium'}>{children}</Label>
    </Field>
  )
}

export default Checkbox