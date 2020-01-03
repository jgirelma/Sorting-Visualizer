import { Swap, End, MovePointer } from './Helpers/Compiler';

const InsertionSort = (arr) => {
    const Instructions = [];
    const arrCopy = [...arr];
    for(let i = 0; i < arrCopy.length - 1; i++){
        Instructions.push(MovePointer("a",i));
        let j = i + 1;
        while(j > 0) {
            Instructions.push(MovePointer("b",j));
            if(arrCopy[j] < arrCopy[j-1]) {
                Instructions.push(Swap(j-1,j));
                let temp = arrCopy[j-1];
                arrCopy[j-1] = arrCopy[j];
                arrCopy[j] = temp;
                j--;
            } else {
                break;
            }
        }
    }
    Instructions.push(End());
    return Instructions;
}

export { InsertionSort };