export const calculateCompletionPercentage = (currentProgress: number, quantity: number) => {
    if (quantity === 0) return 0;
    const completionPercentage = Math.round((currentProgress / quantity) * 100);
    return completionPercentage > 100 ? 100 : completionPercentage;
  };