<script lang="ts">
    export let selectedSection: string;

    // remove default behavior to prevent scrolling to href target
    function handleClick(event: MouseEvent, section: string) {
        event.preventDefault();
        selectedSection = section;
    }
</script>

<nav>
    <ul>
        <li><a href="#about" on:click={(event) => handleClick(event, 'about')} id={selectedSection === 'about' ? 'selected' : undefined}>About</a></li>
        <li><a href="#skills" on:click={(event) => handleClick(event, 'skills')} id={selectedSection === 'skills' ? 'selected' : undefined}>Skills</a></li>
        <li><a href="#projects" on:click={(event) => handleClick(event, 'projects')} id={selectedSection === 'projects' ? 'selected' : undefined}>Projects</a></li>
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
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
        content: none;
        display: inline-block;
        transform: rotate(-5deg);
        transition: .4s ease-out;
        padding: 5px;
        border-bottom: black 2px solid;
        &:hover {
                animation: rotate 1.5s infinite ease-in-out;;
				color: var(--color-secondary);
                font-weight: 300;
                background: black;
                border-bottom: 2px solid transparent;
			}   
    }

    #selected {
        z-index: 1;
        border-bottom: 2px solid transparent;
        position: relative;
        // BORDER BOTTOM EFFECT
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 2px;
            background: white;
            // background: linear-gradient(172deg, var(--color-bg-dark) 50%, var(--color-bg-light) 0%);
            // background: linear-gradient(120deg, var(--color-bg-dark) 42%, black 42%, black 42.2%, var(--color-bg-light) 0%);
            // background-size: 200% 100%;
            // animation: border-move 4s linear infinite;
            pointer-events: none;
            z-index: -1;
        }
         &:hover {
                animation: rotate 1.5s infinite ease-in-out;
				color: var(--color-secondary);
                font-weight: 300;
                background: black;
                border-bottom: 2px solid transparent;
			}
        &:hover::after {
            animation: none;
            height: 0;
            width: 0;
            color: none;
            background: none;
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

    // Loading effect
    @keyframes border-move {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 85% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
</style>
