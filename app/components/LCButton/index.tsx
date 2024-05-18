
interface LCButtonProps {
    className?: string;
    onClick?: () => void;
    text: string;
}

const LCButton = ({className, onClick, text}: LCButtonProps) => {
  return (
    <button 
        className={`bg-gray-100 rounded-lg text-black py-2 font-bold text-lg ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default LCButton