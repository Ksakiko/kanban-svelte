<script lang="ts">
  import { onMount } from "svelte";
  import TodoList from "./TodoList.svelte";
  import ListForm from "./ListForm.svelte";
  import type { List } from "$lib/types/lists";

  const url = "http://localhost:3000/lists"

  let todoLists = $state<List[]>([])
  let newListIsVisible = $state(false)

  const getTodoLists = async () => {
    newListIsVisible = false
    try {
        const res = await fetch(url);
        const data = await res.json();

        todoLists = await data;
    } catch (err) {
        console.error(err);
  }
  };

  const getTempUpdatedTodoLists = (id: string) => {
    const newList = todoLists.filter(x => x.id !== id)
    todoLists = newList;
  }

  const handleAddNewList = () => {
    newListIsVisible = true;
  }

  onMount(() => {
      getTodoLists();
  })


</script>

<style>
.kanban-board {
  width: 100%;
}

.kanban-board__inner {
  width:100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1rem;
}

.kanban-board__action {
  margin-bottom: 1rem;
}

</style>

<div class="kanban-board">
    <div class="container__inner">
      <div class="kanban-board__action"><button onclick={handleAddNewList}>+ Add new list</button></div>
      <div class="kanban-board__inner">
        {#each todoLists as todoList}
          <TodoList {todoList} {getTempUpdatedTodoLists}/>
        {/each}
        {#if (newListIsVisible)}
          <ListForm {getTodoLists} />
        {/if}
      </div>  
    </div>
</div>