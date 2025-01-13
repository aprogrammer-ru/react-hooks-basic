import {useEffect, useState} from "react";
import './style.css';

// Эффект кулдаун - каждые millisecondes меняется объект
const useCooldown = (millisecondes: number = 1000) => {

    const [time, setTime] = useState<number>(0);


    useEffect(() => {
        const id = setInterval(() => {
            setTime(prev => {
                return prev + millisecondes
            });
        }, millisecondes);
        return () => {
            clearInterval(id);
        }
    }, [millisecondes]);

    return time;
}


// Длина итерации в миллисекундах
const ticks = 850;

// Количество итераций изменения длины полоски
const portions = 15;


const CustomHookBasic = () => {

    const cooldown = useCooldown(ticks);

    const [width, setWidth] = useState<number>(0);

    // Каждый раз когда меняется куллдаун cooldwon
    // Меняем ширину строки
    useEffect(() => {
        console.log(cooldown);
        const l=100 * (((cooldown / ticks) % portions) / portions);
        setWidth(l);
    }, [cooldown]);

    return <>
        <h1>Loading</h1>
        <div
            className="line"
            style={{
                width: width + '%',
            }}/>
    </>;
};
export default CustomHookBasic;