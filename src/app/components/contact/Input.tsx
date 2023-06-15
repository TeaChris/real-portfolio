'use client'

import clsx from 'clsx'
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  label: string
  id: FieldPath<T>
  type?: string
  required?: boolean
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  disabled?: boolean
}

const Input = <T extends FieldValues>({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}: InputProps<T>) => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-1 mt-1">
      <label htmlFor={id} className="text-sm font-medium leading-6 text-gray">
        {label}
      </label>
      <div className="w-full">
        <input
          id={id}
          type={type}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `form-input bg-transparent w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray sm:text-sm sm:leading-6`,
            errors[id] && 'focus::ring-rose-500',
            disabled && 'opacity-50 cursor-pointer'
          )}
        />
      </div>
    </div>
  )
}

export default Input
