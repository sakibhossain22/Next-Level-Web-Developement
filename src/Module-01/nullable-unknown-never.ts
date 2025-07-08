const searchName = (value: string | null) => {
    if (value === null) {
        return console.log("Nothing Here to see");
    }
    else {
        return console.log("searching for " + value);
    }
}
searchName(null);
