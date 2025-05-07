<script lang="ts">
  import { postNewTodo } from "../../services/todos";


    let { todoList, filterTodos } = $props()
    let todoInput = $state("")

    
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (todoInput === "") return;
        
        await postNewTodo({
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
  border: 1px solid var(--color-gray-light);
  border-radius: 10px;
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