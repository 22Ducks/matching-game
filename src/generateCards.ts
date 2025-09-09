export const generateCards = (sets: number, cardSet: string) => {
    const cardArray: string[] = [];

    const set = `/${cardSet}`;

    for(let i=1; i<=sets; i++) {
        cardArray.push(set + "/card" + i.toString() + ".png");
        cardArray.push(set + "/card" + i.toString() + ".png");
    }

    let shuffled = cardArray
        .map(value => ({ value, sort: Math.random() })) //put in object with random keys
        .sort((a, b) => a.sort - b.sort) //put them in order of their random keys
        .map(({ value }) => value) //remove values from object into array form

    return shuffled;
}