<script lang="ts">
  import type { InputList } from "$lib/types/lists";

  let { getTodoLists } = $props() 
    let listTitleInput = $state("")

    const postNewList = async (list: InputList) => {
        try {
            const res = await fetch("http://localhost:3000/lists", {
            method: "POST",
            body: JSON.stringify(list),
            });
            const data = await res.json();
            
            return data;
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async () => {
        if (listTitleInput === "") return;
        const newList = {
            title: listTitleInput
        }
        await postNewList(newList)
        await getTodoLists()
    }
</script>

<style>

.todo-list {
  padding: 1rem;
  background-color: lightpink; /* temp */
  width: 300px;
  min-height: 100px;
  border-radius: 10px;
}

.list-form input {
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

</style>

<div class="todo-list">
    
    <form class="form list-form">
        <label for="todoList"></label>
        <input
        type="text"
        id="todoList"
        name="todoList"
        placeholder="Write a list name here..."
        bind:value={listTitleInput}
        onblur={handleSubmit}
        />
    </form>
</div>