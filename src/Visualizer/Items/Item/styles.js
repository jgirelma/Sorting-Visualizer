
const styles = s => ({
    item:{
        border:1,
        width: props => props.width/2,
        margin:2,
        height:props => props.height*5,
        background: props => props.color,
    }
});

export default styles;
