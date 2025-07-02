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
        transform: rotate(2deg);
        transition: .4s ease-out;
        padding: 5px;
        border-bottom: black 2px solid;
        // &:hover {
        //         animation: rotate 1.5s infinite ease-in-out;;
		// 		color: var(--color-secondary);
        //         font-weight: 300;
        //         background: black;
        //         border-bottom: 2px solid transparent;
		// 	}   
    }

    #selected {
        z-index: 1;
        border-right: none;
        position: relative;
        // BORDER BOTTOM EFFECT
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 64%;
            background: linear-gradient(120deg, var(--color-bg-dark) 10%, var(--color-bg-light) 0%);
            border-right: 2px solid black;
            background-size: 200% 100%;
            animation: border-move 1.5s linear infinite;
            pointer-events: none;
            z-index: -1;
        }
        //  &:hover {
        //         animation: rotate 1.5s infinite ease-in-out;
		// 		color: var(--color-secondary);
        //         font-weight: 300;
        //         background: black;
        //         border: none;
		// 	}
        // &:hover::after {
        //     animation: none;
        //     height: 0;
        //     width: 0;
        //     background: none;
        //     border: none;
        // }   
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
            background-position: 3% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    @media screen and (max-width: 1280px) {
		nav {
            grid-column: 1/9;
        }
	}

    @media screen and (max-width: 940px) {
		nav {
            width: 100%;
            height: 100px;
            background: var(--color-bg-dark);
            box-shadow: 2px 0 8px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: var(--spacing-l) var(--spacing-page-inset)
        }
        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0;
        }
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1rem
        }
        a {
            font-size: var(--font-size-b1);
            &:hover{
                color: inherit;
                animation: none;
                border-bottom: 2px solid black;
                font-weight: inherit;
                background: none;
            }
        }
        #selected {
            border-right: none;
            &::after{
                border-right: 2px solid black;
            }
            &:hover {
                animation: none;
                border-bottom: 2px solid black;
                font-weight: inherit;
                color: inherit;
                background: inherit;
            }
            &:hover::after {
            animation: border-move 1.5s linear infinite;
            height: 64%;
            width: 100%;
            background: linear-gradient(120deg, var(--color-bg-dark) 10%, var(--color-bg-light) 0%);
            background-size: 200% 100%;
        } 
        }
	}
</style>
