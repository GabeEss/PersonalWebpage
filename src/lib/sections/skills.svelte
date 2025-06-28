<script lang="ts">
    import { onMount } from "svelte";
    import ReactIcon from "../../assets/icons/react-icon.svelte";
    import JavascriptIcon from "../../assets/icons/javascript-icon.svelte";
    import HtmlIcon from "../../assets/icons/html-icon.svelte";
    import CssIcon from "../../assets/icons/css-icon.svelte";
    import NodejsIcon from "../../assets/icons/nodejs-icon.svelte";
    import MongodbIcon from "../../assets/icons/mongodb-icon.svelte";
    import SvelteIcon from "../../assets/icons/svelte-icon.svelte";
    import TypescriptIcon from "../../assets/icons/typescript-icon.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

    function handleAnimationEnd() {
        loaded = false;
    }
</script>

<section id="skills">
    <h1 class="skills-header">Things I've Learned</h1>
    <nav class="skills-list">
        <ul>
            <li class={loaded ? 'animate one' : ''}>
                <a target="_blank" href="https://react.dev/"><ReactIcon/></a></li>
            <!-- <li><SvelteIcon/></li> -->
            <li class={loaded ? 'animate two' : ''}>
                <a target="_blank" href="https://tc39.es/"><JavascriptIcon/></a></li>
            <!-- <li><TypescriptIcon/></li> -->
            <li class={loaded ? 'animate three' : ''}>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><HtmlIcon/></a></li>
            <li class={loaded ? 'animate four' : ''}>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><CssIcon/></a></li>
            <li class={loaded ? 'animate five' : ''}>
                <a target="_blank" href="https://nodejs.org/en"><NodejsIcon/></a></li>
            <li class={loaded ? 'animate six' : ''} on:animationend={handleAnimationEnd}>
                <a target="_blank" href="https://www.mongodb.com/"><MongodbIcon/></a></li>
        </ul>
    </nav>
</section>

<style lang="scss">
    @use '../../sass/main.scss';
    #skills {
        animation: fade .5s ease-in;
        grid-row: 1/8;
        grid-column: 4/9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .skills-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        position: relative;
        padding-top: var(--letter-spacing-xl);
        padding-left: var(--letter-spacing-xl);
        letter-spacing: var(--letter-spacing-xl);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        color: var(--color-primary);
        transform: rotate(5deg);
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 64%;
            background: linear-gradient(120deg, var(--color-bg-dark) 45%, var(--color-bg-light) 0%);
            background-size: 200% 100%;
            animation: border-move 1.9s linear;
            pointer-events: none;
            z-index: -1;
            border: 5px solid black;
        }
    }

    .skills-list {
        padding-top: var(--spacing-xl);
        transform: rotate(5deg);
        grid-row: 3/6;
        grid-column: 1/6;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    .animate {
        animation: initialBounce 1s ease-in-out forwards;

    }

    .one {
        animation-delay: .1s;
    }

    .two {
        animation-delay: .3s;
    }

    .three {
        animation-delay: .5s;
    }

    .four {
        animation-delay: .7s;
    }

    .five {
        animation-delay: .9s;
    }

    .six {
        animation-delay: 1.1s;
    }

    ul li:not(.animate) {
        &:hover {
            animation: hover .4s ease 1 forwards;
        }
    }

    @keyframes initialBounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes hover {
        100% {
            transform: scale(1.2);
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }

    // Loading effect
    @keyframes border-move {
        0% {
            background-position: 100% 0%;
        }
        50% {
            background-position: 50% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    @media screen and (max-width: 1080px) {
		h1 {
            font-size: var(--font-size-h2);
        }
	}

    @media screen and (max-height: 400px) {
		#skills {
            height: 500px;
        }
	}
</style>