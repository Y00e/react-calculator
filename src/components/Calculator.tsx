import {useState} from "react";
import Button from "./Button";
import Display from "./Display";
import '../styles/Calculator.css';

const Calculator = () => {
    const [value, setValue] = useState<string>("");

    const handleClick = (input: string) => {
        setValue(value + input);
    };

    const handleClear = () => {
        setValue("");
    };

    const handleEqual = () => {
        try {
            setValue(eval(value).toString());
        } catch {
            setValue("Error");
        }
        
    };

    return (
        <div className="calculator">
            <Display value={value} />

            <div className="key">
                
                <Button label ="1" onClick={() => handleClick("1")} />
                <Button label ="2" onClick={() => handleClick("2")} />
                <Button label ="3" onClick={() => handleClick("3")} />
                <Button label ="+" onClick={() => handleClick("+")} />
        
                <Button label ="4" onClick={() => handleClick("4")} />
                <Button label ="5" onClick={() => handleClick("5")} />
                <Button label ="6" onClick={() => handleClick("6")} />
                <Button label ="-" onClick={() => handleClick("-")} />
        
                <Button label ="7" onClick={() => handleClick("7")} />
                <Button label ="8" onClick={() => handleClick("8")} />
                <Button label ="9" onClick={() => handleClick("9")} />
                <Button label ="*" onClick={() => handleClick("*")} />
                
                 
                <Button label ="C" onClick={handleClear} />
                <Button label ="0" onClick={() => handleClick("0")} />
                <Button label ="=" onClick={handleEqual} />
                <Button label ="/" onClick={() => handleClick("/")} />
            </div>
            
        </div>
    );


};

export default Calculator;