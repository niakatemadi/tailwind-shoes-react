import { IoIosArrowDown } from "react-icons/io"; 
import React from 'react';
import { twMerge } from "tw-merge";

export function Select({title, options, className,onChange, value}) {
  return (
    <div className="relative dark:text-black">
        <select onChange={(e) => onChange(e.target.value)} value={value || ""} className={twMerge(`w-24 appearance-none border border-gray-300 p-4 ${className}`)}>
            <option value="" disabled hidden>{title}</option>
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-2">
            <IoIosArrowDown />
        </div>
    </div>
  )
}