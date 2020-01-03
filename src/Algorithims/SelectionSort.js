import { Swap, End, MovePointer } from './Helpers/Compiler';

const SelectionSort = (arr) => {
    const Instructions = [];
    const arrCopy = [...arr];
    for(let i = 0; i < arrCopy.length; i++){
        
        let min = arrCopy[i];
        let index = i;
        for(let j = i+1; j<arrCopy.length; j++){
            
            Instructions.push(MovePointer("b",j));
            if(arrCopy[j] < min) {
                Instructions.push(MovePointer("a",j));
                min = arrCopy[j];
                index = j;
            }
        }
        if(index !== i ){
            Instructions.push(Swap(i,index));
            let temp = arrCopy[i];
            arrCopy[i] = min;
            arrCopy[index] = temp;
        }
    }
    Instructions.push(End());
    return Instructions;
}

export { SelectionSort };