type CommissionStatusProps = {
  isOpen: boolean;
  label: string;
};

export default function CommissionStatus({
  isOpen,
  label,
}: CommissionStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-2 h-2 rounded-full ${
          isOpen ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      {label}: {isOpen ? "Open" : "Closed"}
    </div>
  );
}
