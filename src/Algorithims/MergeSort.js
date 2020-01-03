import { End, MovePointer, Slide } from './Helpers/Compiler';
const MergeSort = (arr) => {
    let Instructions = [];
    msort([...arr], Instructions, 0);
    Instructions.push(End());

    return Instructions;
}
const msort = (arr, Instructions, pos) => {
    if(arr.length <= 1) {
        return arr;
    }

    let m = Math.floor(arr.length / 2);

    return merge(msort(arr.slice(0,m), Instructions, pos), msort(arr.slice(m), Instructions, pos+m), Instructions, pos);
}

const merge = (a, b, Instructions, pos) => {
    let i = 0;
    let j = 0;
    let localPos = 0;
    let out = [];

    while(i < a.length || j < b.length) {
        if(j > b.length - 1 || a[i] <= b[j]) {
            Instructions.push(MovePointer("a",pos+i));
            out.push(a[i]);
            localPos++;
            i++;
        } else { 

            Instructions.push(MovePointer("a",pos+i));
            Instructions.push(MovePointer("b",pos+j+a.length));
            Instructions.push(Slide(pos+j+a.length, pos+localPos))
            localPos++;
            out.push(b[j]);
            j++;
        } 
    }
    
    return out;
}

export { MergeSort };