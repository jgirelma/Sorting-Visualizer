import React from 'react';
import Nav from './Nav/Nav'
import Sidebar from './Sidebar/Sidebar';
import Visualizer from './Visualizer/Visualizer';


import { BubbleSort, SelectionSort, InsertionSort, MergeSort, instructionHandler } from './Algorithims/Algorithims';

class SortingVisualizer extends React.Component {
    constructor() {
        super();
        this.state = {
            arraySize: 50,
            savedArray: [],
            array: Array.from({length: 50}, () => Math.floor(Math.random() * 50)+1),
            speed: 1,
            isSorting: false,
            instruction: 0,
            finishedSorting: false,
            pointerA: 0,
            pointerB: 1,
            instructions: [],
            intervalID:0,
            method: "Merge Sort",
        };
        this.instructionHandlerLoop = this.instructionHandlerLoop.bind(this);
        
    }

    componentDidMount() {
        this.setInstructions();
        this.setState({savedArray: this.state.array});
    }

    render() {
        return(
            <div className="SortingVisualizer">
                <Nav 
                sortMethodSelector={this.sortMethodSelector}
                sort={this.toggleSort}
                setSpeed={this.setSpeed}
                setSize={this.setArraySize}/>
                <Visualizer
                arraySize={this.state.arraySize}
                array={this.state.array}
                pointerA={this.state.pointerA}
                pointerB={this.state.pointerB}/>
                <Sidebar
                nextInstruction={this.nextInstruction}
                instructions={this.state.instructions} 
                instruction={this.state.instruction}
                toggleSort={this.toggleSort}
                isSorting={this.state.isSorting}
                finishedSorting={this.state.finishedSorting}
                goToInstruction={this.goToInstruction}
                goBackOneInstruction={this.goBackOneInstruction}/>
            </div>  
        );
    }

    toggleSort = () => {
        if(!this.state.isSorting && !this.state.finishedSorting) {
            this.setState({isSorting: true});
            this.instructionLoop();
        } else if(this.state.finishedSorting) {
            this.setArray();
            this.setState({finishedSorting: false});
        }  else {
            this.setState({isSorting: false});
            clearInterval(this.state.intervalID);
        }
    }

    setArray = () => {
        let newArr = Array.from({length: this.state.arraySize}, () => Math.floor(Math.random() * this.state.arraySize)+1);
        this.setState({array: newArr, savedArray: newArr, finishedSorting: false, isSorting: false, pointerA: 0, pointerB: 1}, this.setInstructions);
    }

    setArraySize = (s) => {
        if(s !== this.state.arraySize && !this.state.isSorting) {
            this.setState({arraySize: s}, this.setArray);
        }
    }

    setSpeed = (s) => {
        if(s !== this.state.speed) {
            this.setState({speed: s*10+50});
            if(this.state.isSorting) {
                clearInterval(this.state.intervalID);
                this.instructionLoop();
            }
        }
    }

    sortMethodSelector = async (m) => {
        if (this.state.method !== m) {
            this.setState({method:m, instruction:0});
            this.setArray();
        }
    }   

    setInstructions = () => {
        let arr = [];
        if(this.state.method === "Bubble Sort") {
            arr = BubbleSort(this.state.array)
        } else if(this.state.method === "Selection Sort") {
            arr = SelectionSort(this.state.array)
        } else if(this.state.method === "Insertion Sort") {
            arr = InsertionSort(this.state.array)
        } else if(this.state.method === "Merge Sort") {
            arr = MergeSort(this.state.array)
        }
        this.setState({instructions: arr, instruction: 0});
    }

    instructionLoop() {
        this.setState({intervalID: setInterval(() => {
                this.instructionHandlerLoop();
            }
        ,this.state.speed)});
    }


    instructionHandlerLoop() {
        if(this.state.instructions[this.state.instruction] === "end") {
            clearInterval(this.state.intervalID);
            this.setState({instruction: this.state.instructions.length - 1, isSorting: false, finishedSorting: true})
        } else {
            if(this.state.instructions[this.state.instruction].startsWith("movepointer")) {
                let arr = [...this.state.array];
                let ptrs = { "a": this.state.pointerA, "b": this.state.pointerB};
                let i = this.state.instruction;
                
                while(this.state.instructions[i].startsWith("movepointer")) {
                    let c = instructionHandler(this.state.instructions[i], arr, ptrs);
                    arr = c[0];
                    ptrs = c[1];
                    i++;
                }
                if(this.state.instructions[i] === "end") {
                    clearInterval(this.state.intervalID);
                    this.setState({instruction: this.state.instructions.length - 1, isSorting: false, finishedSorting: true})
                    return;
                }
                let c = instructionHandler(this.state.instructions[i], arr, ptrs);
                arr = c[0];
                ptrs = c[1];
                i++;
                this.setState({array: arr, pointerA: ptrs["a"], pointerB: ptrs["b"], instruction: i});
            } 
        }
    }

    nextInstruction = () => {
        let arr = [...this.state.array];
        let ptrs = { "a": this.state.pointerA, "b": this.state.pointerB};
        [arr, ptrs] = instructionHandler(this.state.instructions[this.state.instruction], arr, ptrs);
        this.setState({array: arr, pointerB: ptrs["b"], pointerA: ptrs["a"], instruction: this.state.instruction+1});
    }

    goToInstruction = (target) => {
        let arr = [...this.state.savedArray];
        let ptrs = {"a": 0, "b": 0};
        for(let i = 0; i < target; i++) {
            let c = instructionHandler(this.state.instructions[i], arr, ptrs);
            ptrs = c[1];
            arr = c[0];
        }
        console.log(arr,ptrs);
        this.setState({array: arr, pointerA: ptrs["a"], pointerB: ptrs["b"], instruction: target});
        if(target !== this.state.arraySize) {
            this.setState({finishedSorting: false});
        }
    }

    goBackOneInstruction = () => {
        if(this.state.instruction > 0) {
            this.goToInstruction(this.state.instruction - 1);
        }
    }

}

export default SortingVisualizer;
