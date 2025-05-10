<script lang="ts">
    import { onMount } from 'svelte';

    let currentUrl: string = "";

    onMount(() => {
      currentUrl = window.location.href;
    })
</script>
  
<header>
  <div class="logo-container">
    <!-- <a target="_blank" rel="noopener noreferrer" href={currentUrl}><p>GS</p></a> -->
  </div>
  <div class="socials">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/GabeEss">
        <title>Link icon to github profile.</title>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>       
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabriel-sliwowicz-a2341782/">
        <title>Link icon to linkedin profile</title>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
    </a>
  </div>
</header>

<style lang="scss">
  @use '../../sass/main';

  header{
    // background-color: var(--color-bg-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-l) var(--spacing-page-inset);
    letter-spacing: var(--letter-spacing-l);
  }

  .logo-container a {
    text-decoration: none;
  }

  .logo-container a p {
    font-family: 'FriendlySansFont';
    font-size: var(--icon-size-l);
    height: var(--icon-size-l);
    width: var(--icon-size-l);
    color: var(--color-primary);
    transition: all 0.2s ease-in-out;
    content: none;
    display: inline-block;
    transform: rotate(-2deg);
    transition: .4s ease-out;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
        &:hover {
                animation: rotate 1.5s infinite ease-in-out;;
				        color: var(--color-secondary);
                font-weight: 300;
                border-bottom: 2px solid black;
			}
    }

    @keyframes rotate {
        0%, 100% {
          transform: translateY(0) rotate(-2deg) scale(1.1);
        }
        50% {
            transform: translateY(-2px) rotate(2deg);
        }
    }

  .socials a {
    transition: .4s ease-out;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
  &:hover{
    border-bottom: 2px solid black;
  }
}

  svg{
    height: var(--icon-size-m);
    width: var(--icon-size-m);
    fill: var(--color-primary);
    transition: all .4s ease-out;
    animation: bounce 2s infinite ease-out;
    
    &:hover {
				transform: scale(1.10);
        animation: none;
		}
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  

  .socials {
    display: flex;
    gap: var(--spacing-m);

    &::after {
      align-self: center;
      content: '';
      width: 70px;
      height: 2px;
      background: var(--color-primary);
    }

    &::before {
      align-self: center;
      content: '';
      width: 70px;
      height: 2px;
      background: var(--color-primary);
    }
  }

</style>