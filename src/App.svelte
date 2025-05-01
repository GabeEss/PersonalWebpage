<script lang="ts">
  import Header from './lib/components/header.svelte';
  import About from './lib/sections/about.svelte';
</script>

<main>
  <div class="left-half"></div>
  <Header/>
  <About/>
</main>

<style lang="scss">
  @use './sass/main.scss';

  main {
    background: linear-gradient(120deg, var(--color-bg-dark) 45%, var(--color-bg-light) 0%);
  }

  @media screen and (max-width: 1080px) {
		main {
      
    }
	}
</style>
