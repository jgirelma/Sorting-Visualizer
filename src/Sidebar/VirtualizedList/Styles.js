
const styles = s => ({
    root: {
        verticalAlign:'middle',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
         backgroundColor: 'rgba(0, 0, 0, 0.08)',
       }
    },
    selected: {

        backgroundColor: 'rgba(76, 175, 80, 0.3)',
    }   
    
});
  

export default styles;