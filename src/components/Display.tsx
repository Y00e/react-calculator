
import '../styles/Display.css';
interface DisplayProps {
    value: string;
}

const Display =  ({value}: DisplayProps) => {
    return (

        <input className='display' type="text" value={value} readOnly />
        
    );
};

export default Display;