<script lang="ts">
  import { onMount } from "svelte";
  import TodoForm from "./TodoForm.svelte";
  import TodoItem from "./TodoItem.svelte";
  import type { Todo } from "$lib/types/todos";
  import { deleteMultipleTodos, deleteTodo, getTodos } from "../../services/todos";
  import { deleteList } from "../../services/lists";

  let filteredTodos = $state<Todo[]>([])
  let formIsVisible = $state(false)
  let { todoList, getTempUpdatedTodoLists } =  $props()

  

  const filterTodos = async () => {
    
  formIsVisible = false;
  const data = await getTodos();

  const newTodos = await data.filter(
    (todo: Todo) => todo.listId === todoList.id
  );

  filteredTodos = await newTodos;
};

const handleAddTodo = () => {
    formIsVisible = true;
}

  const handleDeleteTodo = (e: any, id: string) => {
  // Update for Frontend's sake  
  const newTodos = filteredTodos.filter((x) => x.id !== id);
  filteredTodos = newTodos;

  // Handle backend
  deleteTodo(id);
};

const handleDeleteList = async () => {
  const todosToBeDeleted = filteredTodos.filter(
    (x) => x.listId === todoList.id
  );

  const todoIds = todosToBeDeleted.map((x) => x.id);

  deleteMultipleTodos(todoIds);

  // Handle delete in backend
  deleteList(todoList.id)

  // Update the lists realtime in frontend 
  getTempUpdatedTodoLists(todoList.id)
}

onMount(() => {
    filterTodos();
})


</script>

<style>
  .todo-list {
  padding: 1rem;
  background-color: lightpink; /* temp */
  width: 300px;
  min-height: 100px;
  border-radius: 10px;
}

.todo-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.todo-list__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

</style>

<div class="todo-list">
    <header class="todo-list__header">
        <h3 class="todo-list__title">{todoList.title}</h3>
        <div class="todo-list__action">
          <button onclick={handleDeleteList}>X</button>
        </div>
    </header>
    <ul class="todo-list__list">
        {#each filteredTodos as todo}
            <TodoItem {todo} {handleDeleteTodo}/>
        {/each}
       
        {#if !formIsVisible}
            <div class="todo-list__action">
                <button onclick={handleAddTodo}>+ Add new todo</button>
            </div>
            {:else}
            <TodoForm { todoList } {filterTodos}/>
        {/if}
        
    </ul>
</div>