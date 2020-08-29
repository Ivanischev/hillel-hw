function getTypeOf(x) {
    if (typeof x == "number") {
        return 1;
    } else if(typeof x == "string") {
        return 0;
    } else {
        return -1;
    }
}

getTypeOf();
