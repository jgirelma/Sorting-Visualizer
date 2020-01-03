const instructionHandler = (instruction, arr, pointers) => {

    if(instruction.startsWith("swap")) {
        let split = instruction.split(" ");
        let temporary = arr[split[1]];
        arr[split[1]] = arr[split[2]];
        arr[split[2]] = temporary;
        return [arr, pointers]
    } else if(instruction.startsWith("movepointer")) {
        let split = instruction.split(" ");
        pointers[split[1]] = parseInt(split[2]);
        return [arr, pointers]
    } else if(instruction.startsWith("end")) {
        
    } else if(instruction.startsWith("slide")) {
        let split = instruction.split(" ");
        let from = split[1];
        let to = split[2];
        if(from === to) {
            return [arr, pointers];
        } else {
            let a = [...arr.slice(0,to), arr[from], ...arr.slice(parseInt(to),from), ...arr.slice(parseInt(from)+1)]
            return [a, pointers];
        }
        
    } else {
        console.log("instruction invalid");
    }
}


export { instructionHandler };