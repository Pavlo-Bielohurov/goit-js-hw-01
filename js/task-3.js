function getElementWidth(content, padding, border){
    const NumberContent = parseFloat(content);
    const NuberPadding = parseFloat(padding);
    const NumberBorder = parseFloat(border);

    const totalSize = NumberContent + 2 * NuberPadding + 2 * NumberBorder;
    return totalSize;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 