<script lang="ts">
    import { onMount } from "svelte";
    import Projects from "./project-type";
    import ProjectContainer from "./project-container.svelte";

    let currentIndex = 0;

    let animate = false;
    onMount(() => {
        animate = true;
    });

    // if currentIndex + 1 is smaller than Projects.length, the result of % is currentIndex + 1
    // if currentIndex + 1 is the same as Projects.length, the result is 0
    function nextProject() {
        currentIndex = (currentIndex + 1) % Projects.length;
    }

    function previousProject() {
        currentIndex = (currentIndex - 1 + Projects.length) % Projects.length;
    }
</script>

<section id="projects">
    <h2>Check Out My Projects</h2>
    <div class="carousel">
        <button class="prev" on:click={previousProject}>&lt;</button>
        <div class="carousel-track">
            {#key currentIndex}
            <!-- {#each Projects as project, i} -->
            <div class:carouselPress={animate}>
             <!-- <div class="carousel-slide
                {i === currentIndex ? 'active' : ''}
                {i === (currentIndex - 1 + Projects.length) % Projects.length ? 'left' : ''}
                {i === (currentIndex + 1) % Projects.length ? 'right' : ''}"
            > -->
            <ProjectContainer
                title={Projects[currentIndex].title}
                description={Projects[currentIndex].description}
                tags={Projects[currentIndex].tags}
                icon={Projects[currentIndex].icon}
                link={Projects[currentIndex].link}
            />
            <!-- </div> -->
            </div>
            <!-- {/each} -->
            {/key}
        </div>
        <button class="next" on:click={nextProject}>&gt;</button>
    </div>
</section>

<style lang="scss">
    @use '../../../sass/main.scss';
    .carouselPress {
        animation: fade .3s ease-in;
    }

    #projects {
        animation: fade .5s ease-in;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-row: 2/9;
        grid-column: 5/9;
    }

    h2 {
        grid-row: 2/2;
        grid-column: 2/6;
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h2);
        color: var(--color-primary);
    }

    .carousel {
        grid-row: 3/3;
        grid-column: 1/6;
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        height: 300px;
    }
    
    .carousel-track {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60vw;
        position: relative;
        transition: transform 0.5s;
    }

    .carousel-slide {
        flex: 0 0 30vw;
        margin: 0 1vw;
        opacity: 0.3;
        transform: scale(0.8);
        transition: 
            opacity 0.4s, 
            transform 0.4s;
        pointer-events: none;
        z-index: 1;
    }

    .carousel-slide.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
    z-index: 2;
    }

    .carousel-slide.left,
    .carousel-slide.right {
    opacity: 0.6;
    transform: scale(0.9);
    pointer-events: auto;
    z-index: 1;
    }

    .carousel-item, .carousel button {
        height: 100%;
    }

    .carousel-item {
        
    }

    .carousel button {
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: var(--letter-spacing-l);
            background-color: var(--color-secondary);
            color: var(--color-primary);
            padding: var(--spacing-l);
            width: var(--spacing-m);
            border-radius: var(--border-radius-s);
            border: none;
            font-size: var(--font-size-h3);
            cursor: pointer;
            &:hover{
                // background-color: var(--color-primary);
                // color: var(--color-secondary);
                // opacity: 40%;
                font-size: var(--font-size-h2);
            }
    }

    .prev {
        animation: pushLeft 2s ease-in-out infinite;
    }

    .next {
        animation: pushRight 2s ease-in-out infinite;
    }

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
</style>