import { useEffect, useState } from "react";
import './style.css';

// Кастомный хук useCooldown - каждые millisecondes меняется объект
const useCooldown = (millisecondes: number = 1000) => {
    // Объявление состояния 'time' с начальным значением 0 и функции 'setTime' для его обновления
    const [time, setTime] = useState<number>(0);

    // Использование эффекта для установки интервала
    useEffect(() => {
        // Установка интервала, который обновляет состояние 'time' каждые millisecondes
        const id = setInterval(() => {
            setTime(prev => {
                return prev + millisecondes;
            });
        }, millisecondes);

        // Очистка интервала при размонтировании компонента
        return () => {
            clearInterval(id);
        };
    }, [millisecondes]);

    // Возвращение текущего значения 'time'
    return time;
};

// Длина итерации в миллисекундах
const millisecondes = 850;

// Количество итераций изменения длины полоски
const portions = 20;

const CustomHookBasic = () => {
    // Использование кастомного хука useCooldown
    const cooldown = useCooldown(millisecondes);

    // Объявление состояния 'width' с начальным значением 0 и функции 'setWidth' для его обновления
    const [width, setWidth] = useState<number>(0);

    // Использование эффекта для обновления ширины полоски при изменении cooldown
    useEffect(() => {
        console.log(cooldown);
        // Вычисление новой длины полоски
        const length = 100 * (((cooldown / millisecondes) % portions) / portions);
        // Обновление состояния 'width'
        setWidth(length);
    }, [cooldown]);

    // Возвращение JSX для рендеринга компонента
    return <>
        <h1>Loading</h1>
        <div
            className="line"
            style={{
                width: width + '%',
            }} />
    </>;
};

export default CustomHookBasic;