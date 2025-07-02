<script lang="ts">
    import { onMount } from "svelte";
    import Projects from "./project-type";
    import ProjectContainer from "./project-container.svelte";

    let currentIndex = 0;

    let animate = false;
    onMount(() => {
        animate = true;
    });

    function nextProject() {
        currentIndex = (currentIndex + 1) % Projects.length;
    }

    function previousProject() {
        currentIndex = (currentIndex - 1 + Projects.length) % Projects.length;
    }
</script>

<section id="projects">
    <div class="carousel">
        <div class="carousel-track">
            {#key currentIndex}
            <div class:carouselPress={animate}>
            <ProjectContainer
                title={Projects[currentIndex].title}
                description={Projects[currentIndex].description}
                tags={Projects[currentIndex].tags}
                icon={Projects[currentIndex].icon}
                link={Projects[currentIndex].link}
            />
            </div>
            {/key}
        </div>
        <div class="carousel-dots">
            {#each Projects as _, i}
            <button
                class:active-dot={i === currentIndex}
                on:click={() => currentIndex = i}
                aria-label={`Go to project ${i + 1}`}>
            </button>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../../sass/main.scss';
    .carouselPress {
        animation: fade .3s ease-in;
    }

    #projects {
        animation: fade .5s ease-in;
        grid-row: 1/8;
        grid-column: 5/8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotate(0deg);
    }

    h1 {
        letter-spacing: var(--letter-spacing-xl);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        color: var(--color-primary);
    }

    .carousel {
        padding-top: var(--spacing-l);
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: .75rem;
        margin-top: 1rem;
    }

    .carousel-dots button {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: none;
        background-color: var(--color-primary);
        opacity: .5;
        cursor: pointer;
        transition: opacity .2s, background .2s;
        padding: 0;
    }

    .carousel-dots button.active-dot {
        background: var(--color-primary);
        opacity: 1;
        // box-shadow: 0 0 0 2px var(--color-secondary);
    }

    // .carousel button {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         letter-spacing: var(--letter-spacing-l);
    //         background-color: var(--color-secondary);
    //         color: var(--color-primary);
    //         padding: var(--spacing-l);
    //         width: var(--spacing-m);
    //         border-radius: var(--border-radius-s);
    //         border: none;
    //         font-size: var(--font-size-h3);
    //         cursor: pointer;
    //         &:hover{
    //             font-size: var(--font-size-h2);
    //         }
    //         flex-shrink: 0;
    // }

    // .prev {
    //     animation: pushLeft 2s ease-in-out infinite;
    // }

    // .next {
    //     animation: pushRight 2s ease-in-out infinite;
    // }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }

    @keyframes pushLeft {
        0% {
            transform: translateX(0);
        }
        50%{
            transform: translateX(-4px);
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes pushRight {
        0% {
            transform: translateX(0);
        }
        50%{
            transform: translateX(4px);
        }
        100% {
            transform: translateX(0);
        }
    }

    @media screen and (max-width: 1340px) {
		h1 {
            display: none;
        }
	}

    @media screen and (max-height: 400px) {
		#projects {
            height: 600px;
        }
        h1 {
            margin-top: 1em;
            height: 100px;
        }
	}

    @media screen and (max-width: 940px) {
        #projects {
            transform: none;
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            height: var(--content-height-small);
            width: 100%;
            background: var(--color-bg-light);
        }
    }
</style>