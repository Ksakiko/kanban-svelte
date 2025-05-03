<script lang="ts">
  import type { InputTodo } from "$lib/types/todos";


    let { todoList, filterTodos } = $props()
    let todoInput = $state("")

    const postNewTodo = async (todo: InputTodo) => {
    try {
        const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        });
        const data = await res.json();

        return data;
    } catch (err) {
        console.error(err);
    }
};

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (todoInput === "") return;
        
        const res = await postNewTodo({
            todo: todoInput,
            listId: todoList.id,
        });

        await filterTodos();
    };

</script>

<style>
.todo-form input {
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

</style>

<form class="form todo-form">
    <label for="todo"></label>
    <input
        type="text"
        id="todo"
        name="todo"
        placeholder="Write a new todo here..."
        bind:value={todoInput}
        onblur={handleSubmit}
    />
</form>