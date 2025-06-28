<script lang="ts">
  import Header from './lib/components/header.svelte';
  import Content from './lib/components/content.svelte';
</script>

<main>
  <Header/>
  <Content/>
</main>

<style lang="scss">
  @use './sass/main.scss';

  main {
    background: linear-gradient(120deg, var(--color-bg-dark) 42%, black 42%, black 42.2%, var(--color-bg-light) 0%);
  }

  @media screen and (max-width: 1340px) {
		main {
      background: linear-gradient(110deg, var(--color-bg-dark) 42%, black 42%, black 42.2%, var(--color-bg-light) 0%);;
    }
	}

  @media screen and (max-width: 1080px) {
		main {
      background: linear-gradient(100deg, var(--color-bg-dark) 42%, black 42%, black 42.2%, var(--color-bg-light) 0%);;
    }
	}

  @media screen and (max-width: 940px) {
		main {
      background: linear-gradient(0deg, var(--color-bg-dark) 90%, black 90.4%, black 90.6%, var(--color-bg-light) 0%);;
    }
	}
</style>
