import { memo, useCallback, useState } from "react"

// Компонент Age, который отображает возраст и кнопку для увеличения возраста
const Age = ({ age, handleClick }: { age: number; handleClick: () => void }) => {
  return (
    <div>
      <p>Мне {age} лет.</p>
      <p>Нажми на кнопку 👇</p>
      <button onClick={handleClick}>Стать старше!</button>
    </div>
  )
}

// Компонент Guide, который использует React.memo для предотвращения лишних рендеров
const Guide = memo(({ getRandomColor }: { getRandomColor: () => string }) => {
  // Получаем случайный цвет
  const color = getRandomColor()
  console.log("Guide was rendered")
  return (
    <div style={{ background: color, padding: '.4rem' }}>
      <p style={{ color: color, filter: 'invert()' }}>
        Изучай хуки внимательно!
      </p>
    </div>
  )
})

const UseCallbackBasic = () => {
  // Объявляем состояние для возраста с начальным значением 20
  const [age, setAge] = useState(20)

  // Функция для увеличения возраста
  const handleClick = () => { setAge(age < 100 ? age + 10 : age) }

  // Функция для получения случайного цвета, мемоизированная с помощью useCallback
  const getRandomColor = useCallback(
    () => {
      console.log('getRandomColor executed');
      // Генерация случайного цвета
      return `#${((Math.random() * 0xfff) << 0).toString(16)}`;
    },
    //[age] // Зависимость от возраста - функция будет пересоздаваться при изменении возраста
    [] // dependencies отсутствуют - вызыв функции связанной с useCallback при первом рендеринге
  )

  return (
    <>
      {/* Компонент Age с передачей возраста и функции для увеличения возраста */}
      <Age age={age} handleClick={handleClick} />
      {/* Компонент Guide с передачей функции для получения случайного цвета */}
      <Guide getRandomColor={getRandomColor} />
    </>
  )
}

export default UseCallbackBasic;