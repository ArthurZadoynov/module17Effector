import { createStore, createEvent, createEffect } from 'effector';
import { dataItem } from '../fetchItems/fakeData';;

export const addTodo = createEvent();
export const removeTodo = createEvent();

// Создаем эффект для симуляции загрузки данных
const fetchItemsFx = createEffect(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeItem = [dataItem];
      resolve(fakeItem);
    }, 3000); // Задержка 3 секунды для имитации загрузки
  })
})


// Обновляем itemsStore после завершения загрузки данных с помощью event addTodo
fetchItemsFx.done.watch(({ result }) => {
  addTodo(result);
});
// Вывод в консоль ожидание загрузки данных
fetchItemsFx.pending.watch((result) => console.log('pending:', result))

// Единажды вызываем эффект для загрузки данных
fetchItemsFx();

// создаем хранилище todosStore с начальным пустым массивом (списком задач)
export const todosStore = createStore([])
  .on(addTodo, (state, todo) => [...state, todo])
  .on(removeTodo, (state, index) => state.filter((_, i) => i !== index));



 