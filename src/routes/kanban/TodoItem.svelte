<script lang="ts">
    let { todo, handleDeleteTodo } = $props();

</script>

<style>
.todo-item {
  background-color: var(--color-light);
  padding: 1rem;
  border-radius: 8px;
}
</style>

<li class="todo-item">
    <div>
        { todo.todo }
        <button onclick={(e) => handleDeleteTodo(e, todo.id)}>X</button>
    </div>
</li>