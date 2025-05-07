
<style>

.header {
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-light);
  border-bottom: 1px solid var(--color-gray-light);
  position: fixed;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.3rem;
}

.header__inner {
  height: 100%;
  width: 100%;
  padding: 0 var(--page-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>

<header class="header">
	<div class="header__inner">
		<div>Kanban Svelte</div>
	</div>
</header>