export const validateNumCards = (numCards: string | undefined) => {
    const numberOfCards = Number(numCards) || 8;
    
    if(numberOfCards < 1) {
        return 8;
    }

    if(numberOfCards > 16) {
        return 16;
    }

    return numberOfCards + numberOfCards%2;
}