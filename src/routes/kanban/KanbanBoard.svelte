<script lang="ts">
  import { onMount } from "svelte";
  import TodoList from "./TodoList.svelte";
  import ListForm from "./ListForm.svelte";
  import type { List } from "$lib/types/lists";
  import { getTodoLists } from "../../services/lists";

  
  let todoLists = $state<List[]>([])
  let listFormIsVisible = $state(false)

  const getTempUpdatedTodoLists = (id: string) => {
    const newList = todoLists.filter(x => x.id !== id)
    todoLists = newList;
  }

  const handleAddNewList = () => {
    listFormIsVisible = true;
  }

  const getLists = async () => {
    listFormIsVisible = false;
    const data = await getTodoLists();
    todoLists = data
  }

  onMount(() => {
      getLists()    
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
  align-items: flex-start;
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
        {#if (listFormIsVisible)}
          <ListForm {getLists} />
        {/if}
      </div>  
    </div>
</div>