import { useRef } from "react"

const UseRefBasic = () => {
    const textareaEl = useRef<HTMLTextAreaElement>(null)
  
    const handleClick = () => {
      textareaEl.current!.innerText = 'Изучай хуки внимательно! Они не так просты, как кажется'
      textareaEl.current!.focus()
    }
  
    return (
      <>
        <button onClick={handleClick}>Получить сообщение.</button>
        <label htmlFor='message'>
          После нажатия кнопки в поле для ввода текста появится сообщение.
        </label>
        <textarea ref={textareaEl} id='message' />
      </>
    )
  }

  export default UseRefBasic;