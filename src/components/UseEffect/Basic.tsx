import { useEffect, useState } from "react"

//Базовый пример
const UseEffectBasic = () => {
    const [age, setAge] = useState(19)
  
    const handleClick = () => setAge(age + 1)
  
    useEffect(() => {
      document.title = `Тебе ${age} лет!`
    })
  
    return (
      <>
        <p>Обратите внимание на заголовок текущей вкладки браузера.</p>
        <button onClick={handleClick}>Обновить заголовок!</button>
      </>
    )
  }

//Очистка эффекта (после размонтирования)
  const CleanupEffect = () => {
    useEffect(() => {
      const clicked = () => console.log('Клик!')
  
      window.addEventListener('click', clicked)
  
      return () => {
        window.removeEventListener('click', clicked)
      }
    }, [])
  
    return (
      <>
        <p>После клика по области просмотра в консоли появится сообщение.</p>
      </>
    )
  }

  export default CleanupEffect;