export function getTextButtonProfile(percentage: number) {
    let text: string = 'Начать тренировки';
    if (percentage!==0 && percentage < 100) {
        text = 'Продолжить';
    } else if (percentage >= 100) {
        text = 'Начать заново';
    }
    return text;
}