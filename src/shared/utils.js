const getCurrentYear=()=>{
    const myDate=new Date();
    return myDate.getFullYear();
}

const getNumberOfItemsFromArray = (array, num) => {
    let limit = (array.length <= num) ? array.length : num;
    let newArray = [];
    for (let i = 0; i < limit; i++) {
        let element = array[i];
        newArray.push(element)
    }
    return newArray;
}

export { getCurrentYear, getNumberOfItemsFromArray };