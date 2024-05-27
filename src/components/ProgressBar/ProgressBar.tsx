interface ProgressBarProps {
  // max: number;
  // value: number;
  completionPercentage: number;
}

export function ProgressBar({ completionPercentage }: ProgressBarProps) {
  return (
    <div className="mt-[10px]">
      <div className="relative w-full h-[6px] bg-gray-light rounded-[50px] cursor-pointer">
        <div
          className="absolute top-0 left-0 h-[6px] bg-blue-graph rounded-[50px]"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
}
