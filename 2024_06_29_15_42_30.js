let count = 0
for (let index = 0; index <= 15; index++) {
    console.log(count, count < 4 - 1 ? count + 1 : 0)
    count = count < 4 - 1 ? count + 1 : 0
}
