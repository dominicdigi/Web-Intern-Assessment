interface LCInputProps {
    className?: string;
    type: string;
    placeholder: string;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const LCInput = ({className, type, placeholder, onKeyUp, onChange, value}: LCInputProps) => {
  return (
    <input 
        className={`!bg-zinc-900 text-white placeholder-gray-400 border border-white focus:white focus:ring focus:ring-white focus:ring-opacity-50 rounded-md px-4 py-2 outline-none ${className}`}
        type={type}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={value}>
    </input>
  )
}

export default LCInput