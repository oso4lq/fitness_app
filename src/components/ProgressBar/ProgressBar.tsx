interface ProgressBarProps {
  // max: number;
  // value: number;
  completionPercentage: number;
}

export function ProgressBar({ completionPercentage }: ProgressBarProps) {
  return (
    <div className="mt-[10px]">
      <div className="relative w-full h-[6px] bg-gray-light rounded-lg cursor-pointer">
        <div
          className="absolute top-0 left-0 h-[6px] bg-blue-graph rounded-lg"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
}
