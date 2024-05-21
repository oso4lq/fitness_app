interface ProgressBarProps {
  // max: number;
  // value: number;
  completionPercentage: number;
}

export function ProgressBar({ completionPercentage }: ProgressBarProps) {
  return (
    <div className="relative w-full h-[6px] bg-gray-200 rounded-lg cursor-pointer mt-[10px]">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
        style={{ width: `${completionPercentage}%` }}
      />
    </div>
  );
}

// 