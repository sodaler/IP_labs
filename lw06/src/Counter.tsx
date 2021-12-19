import React from 'react'; // Подключение react.
import { useState } from 'react'; // Подключаем ссылку на useState.
import Button from './Button'

interface CounterProps {
    start: number;
    step: number;
}


var Counter = (props: CounterProps) => {
    var [ count, setCount ] = useState(props.start); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    return (
    <div>
        <div>Вы набрали: {count}.</div>
        <Button onClick={handleIncrease} text={'Прибавим ' + props.step}></Button>
    </div>
    );
};
export default Counter;