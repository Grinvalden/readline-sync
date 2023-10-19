const calculateTime = (distance, speed) => {
    const time = distance / speed;
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    console.log(`${hours}ч. ${minutes}м.`);
}
calculateTime(500, 2);