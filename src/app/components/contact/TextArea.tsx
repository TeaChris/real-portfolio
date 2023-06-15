import clsx from 'clsx'
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

interface TextAreaProps<T extends FieldValues> {
  label: string
  id: FieldPath<T>
  required?: boolean
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  disabled?: boolean
}

const TextArea = <T extends FieldValues>({
  label,
  id,
  required,
  register,
  errors,
  disabled,
}: TextAreaProps<T>) => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-3 mt-1">
      <label htmlFor={id} className="text-sm font-medium leading-6 text-gray">
        {label}
      </label>
      <div className="w-full">
        <textarea
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `bg-transparent w-full h-40 rounded-sm border-0 p-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray sm:text-sm sm:leading-6`,
            errors[id] && 'focus::ring-rose-500',
            disabled && 'opacity-50 cursor-pointer'
          )}
        />
      </div>
      {errors[id] && (
        <span className="text-sm text-rose-500" role="alert">
          This field is required.
        </span>
      )}
    </div>
  )
}

export default TextArea
