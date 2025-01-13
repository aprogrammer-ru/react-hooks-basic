import { useState, useMemo, memo } from "react"

const UseMemoBasic = () => {
    const [age, setAge] = useState(19)
  
    const handleClick = () => { setAge(age < 100 ? age + 1 : age) }
  
    const getRandomColor = () => `#${((Math.random() * 0xfff) << 0).toString(16)}`
  
    const memoizedGetRandomColor = useMemo(() => getRandomColor, [])
  
    return (
      <>
        <Age age={age} handleClick={handleClick} />
        <Guide getRandomColor={memoizedGetRandomColor} />
      </>
    )
  }
  
  const Age = ({ age, handleClick }) => {
    return (
      <div>
        <p>Мне {age} лет.</p>
        <p>Нажми на кнопку 👇</p>
        <button onClick={handleClick}>Стать старше!</button>
      </div>
    )
  }
  
  const Guide = memo(({ getRandomColor }) => {
    const color = getRandomColor()
  
    return (
      <div style={{ background: color, padding: '.4rem' }}>
        <p style={{ color: color, filter: 'invert()' }}>
          Следуй инструкциям максимально точно.
        </p>
      </div>
    )
  })

  export default UseMemoBasic;