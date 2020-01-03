import { Swap, End, MovePointer } from "./Helpers/Compiler";

const BubbleSort = (Arr) => {
    let ArrCopy = [...Arr];
    let Instructions = [];
    for(let i = ArrCopy.length; i > -1; i--) {
        
        for(let j = 0; j < i-1; j++) {
            
            if(ArrCopy[j] > ArrCopy[j+1]) {
                Instructions.push(MovePointer("a", j));
                Instructions.push(MovePointer("b", j+1));
                Instructions.push(Swap(j+1,j));
                let t = ArrCopy[j+1];
                ArrCopy[j+1] = ArrCopy[j];
                ArrCopy[j] = t;
            }
        }
    }
    Instructions.push(End());
    return Instructions;
}

// const BubbleSortNoInstructions = (arr) => {
//     let arrCopy = [...arr];
//     for(let i = 0; i < arrCopy.length; i++) {
//         for(let j = i + 1; j < arrCopy.length; j++) {
//             if(arrCopy[j] < arrCopy[i]) {
//                 let t = arrCopy[j];
//                 arrCopy[j] = arrCopy[i];
//                 arrCopy[i] = t;
//             }
//         }
//     }
//     return arrCopy;
// }

export default BubbleSort;