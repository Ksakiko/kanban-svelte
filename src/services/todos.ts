import type { InputTodo } from "$lib/types/todos";

const url = "http://localhost:3000/todos";

export const getTodos = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postNewTodo = async (todo: InputTodo) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const res = await fetch(`${url}/${todoId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

// Use this in order to delete todos by listId
export const deleteMultipleTodos = async (todoIds: string[]) => {
  try {
    Promise.all(
      todoIds.map((id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());
      })
    );
  } catch (err) {
    console.error(err);
  }
};
