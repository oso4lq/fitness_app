export default function Check({ isChecked }: { isChecked: boolean }) {
  return (
    <>
      {!isChecked ? (
        <div className="w-6 h-6 rounded-large bg-white-base border border-black-base"></div>
      ) : (
        <div className="w-6 h-6 rounded-large bg-green-dark flex justify-center items-center">
          <div className="w-3 h-3 check-mark"></div>
        </div>
      )}
    </>
  );
}
