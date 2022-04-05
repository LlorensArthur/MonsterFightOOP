function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function modifyByPercentage(value, percentage){
    return value * percentage / 100;
}

export default getRandomInt;