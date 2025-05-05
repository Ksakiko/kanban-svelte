import type { InputList } from "$lib/types/lists";

const url = "http://localhost:3000/lists";

export const getTodoLists = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postNewList = async (list: InputList) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(list),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteList = async (listId: string) => {
  try {
    const res = await fetch(`${url}/${listId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
