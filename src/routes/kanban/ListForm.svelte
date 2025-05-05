<script lang="ts">
  import { postNewList } from "../../services/lists";

  let { getLists } = $props() 
    let listTitleInput = $state("")

    

    const handleSubmit = async () => {
        if (listTitleInput === "") return;
        const newList = {
            title: listTitleInput
        }
        await postNewList(newList)
        await getLists()
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