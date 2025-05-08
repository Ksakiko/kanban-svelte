<script lang="ts">
  import KanbanBoard from './kanban/KanbanBoard.svelte';

</script>

<svelte:head>
	<title>Kanban Svelte</title>
	<meta name="description" content="Kanban board with Svelte" />
</svelte:head>

<section class="container__inner">
	<KanbanBoard />
</section>

<style>
.container__inner {
  padding-top: calc(var(--header-height) + var(--page-padding));
  padding-left: var(--page-padding);
  padding-right: var(--page-padding);
  padding-bottom: var(--page-padding);
  min-height: calc(100vh - var(--footer-height));
}
</style>
