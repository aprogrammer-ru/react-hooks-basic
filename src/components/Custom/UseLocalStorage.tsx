import { useState, useEffect } from "react";

// Кастомный хук useLocalStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  // Получаем значение из localStorage или используем initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Получаем элемент из localStorage по ключу
      const item = window.localStorage.getItem(key);
      // Если элемент существует, парсим его, иначе используем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // В случае ошибки выводим сообщение в консоль и возвращаем initialValue
      console.error("Ошибка при чтении из localStorage:", error);
      return initialValue;
    }
  });

  // Обновляем localStorage при изменении storedValue
  useEffect(() => {
    try {
      // Сохраняем значение в localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // В случае ошибки выводим сообщение в консоль
      console.error("Ошибка при записи в localStorage:", error);
    }
  }, [key, storedValue]);

  // Возвращаем значение и функцию для его обновления
  return [storedValue, setStoredValue] as const;
}

// Пример использования
function GreetingFromLocalStorage() {
  // Используем кастомный хук useLocalStorage
  const [name, setName] = useLocalStorage<string>("username", "Гость");

  return (
    <div>
      <h1>Привет, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите ваше имя"
      />
    </div>
  );
}

export default GreetingFromLocalStorage;