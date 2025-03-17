import { useState } from 'react';
import './Cabecera.css';
import {Button} from '../../components'


export const Cabecera = () => {

    const [count,setCount] = useState(0);

  const countHandler = () => {
    setCount(count+1);
  }


    return(
        <div className="cabecera">
            <h1> NOTICIAS </h1>
            <div className="botonera">
            <Button label={`Count is ${count}`} parentMethod={countHandler}/>
            <Button label={`Count is ${count}`} parentMethod={countHandler}/>
            <Button label={`Count is ${count}`} parentMethod={countHandler}/>
            <Button label={`Count is ${count}`} parentMethod={countHandler}/>
            </div>
        </div>
    )
}