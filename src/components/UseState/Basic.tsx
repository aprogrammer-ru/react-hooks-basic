import { useState } from "react";

// Определение компонента UseStateBasic
const UseStateBasic = () => {
  // Объявление состояния 'value' с начальным значением 0 и функции 'valueChange' для его обновления
  const [value, valueChange] = useState(0);
  
  // Объявление не реактивной переменной 'nonReactiveValue' с начальным значением 0
  let nonReactiveValue = 0;

  // Определение функции для обработки изменения значения
  const handleValueChange = () => {
    // Увеличение не реактивного значения
    nonReactiveValue++;
    // Обновление состояния 'value'
    valueChange(value + 1);
    // Вывод не реактивного значения в консоль
    console.log("Не реактивное значение:", nonReactiveValue);
  };

  // Возвращение JSX для рендеринга компонента
  return (
    <div>
      {/* Отображение текущего значения */}
      Счетчик: {value}<br></br>
      {/* Кнопка для вызова функции handleValueChange */}
      <button onClick={handleValueChange}>
        +1
      </button>
      {/* Условный рендеринг абзаца, если значение больше 3 */}
      {value > 3 && <p>Значение больше 3! {nonReactiveValue}</p>}
    </div>
  );
};

// Экспорт компонента по умолчанию
export default UseStateBasic;