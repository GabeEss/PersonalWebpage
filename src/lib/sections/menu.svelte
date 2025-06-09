<script lang="ts">
    export let selectedSection: string;
</script>

<nav>
    <ul>
        <li><a href="#about" on:click={() => selectedSection = 'about'} id={selectedSection === 'about' ? 'selected' : undefined}>About</a></li>
        <li><a href="#skills" on:click={() => selectedSection = 'skills'} id={selectedSection === 'skills' ? 'selected' : undefined}>Skills</a></li>
        <li><a href="#projects" on:click={() => selectedSection = 'projects'} id={selectedSection === 'projects' ? 'selected' : undefined}>Projects</a></li>
    </ul>
</nav>

<style lang="scss">
    @use '../../sass/main.scss';
    nav {
        grid-column: 2/9;
        grid-row: 1/9;
    }

    li {
        list-style: none;
        padding: var(--spacing-l) var(--spacing-page-inset);
    }

    a {
        font-size: larger;
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
        content: none;
        display: inline-block;
        transform: rotate(-2deg);
        transition: .4s ease-out;
        padding: 5px;
        border-bottom: black 2px solid;
        &:hover {
                animation: rotate 1.5s infinite ease-in-out;;
				color: var(--color-secondary);
                font-weight: 300;
                background: black;
                border-bottom: black 2px solid;
			}   
    }

    #selected {
        z-index: 1;
        background: rgb(245 245 220 / 75%);
        border-bottom: 2px solid transparent;
        position: relative;
        // BORDER
        &::after {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background: rgb(245 245 220 / 75%);
            opacity: 50%;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            z-index: -1;
            animation: ghost 2.5s infinite ease-in-out;
        }
        &:hover {
                animation: none;
				color: var(--color-primary);
                font-weight: inherit;
                background: rgb(245 245 220 / 75%);
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

    @keyframes ghost {
        0%, 100% {
            translate: -50% -50%;
        }
        50% {
            translate: -45% -40%;
        }
    }
</style>
