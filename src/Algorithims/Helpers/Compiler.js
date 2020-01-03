const Swap = (x,y) => {
    return `swap ${x} ${y}`;
};

const End = () => {
    return "end";
};

const MovePointer = (p, x) => {
    return `movepointer ${p} ${x}`;
};

const Slide = (from, to) => {
    return `slide ${from} ${to}`;
}

export {Swap, End, MovePointer, Slide};