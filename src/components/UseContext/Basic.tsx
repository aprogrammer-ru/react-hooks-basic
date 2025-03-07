import { createContext, useContext } from "react";

// Создание контекста с начальным значением "without provider"
const MyContext = createContext("without provider");

// Компонент UseContextBasic
const UseContextBasic = () => {
  return (
    // Провайдер контекста с значением "Hello, i am External"
    <MyContext.Provider value="Hello, i am External">
      <Intermediate />
    </MyContext.Provider>
  );
};

// Промежуточный компонент, который просто рендерит компонент Internal
const Intermediate = () => {
  return <Internal />;
};

// Внутренний компонент, который использует контекст
const Internal = () => {
  // Получение значения контекста
  const context = useContext(MyContext);

  // Возвращение строки с использованием значения контекста
  return `I am Internal component. I have got the message from External: "${context}"`;
};

// Экспорт компонента по умолчанию
export default UseContextBasic;