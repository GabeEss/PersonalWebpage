<script lang="ts">
    import Projects from "./project-type";
    import ProjectContainer from "./project-container.svelte";

    let currentIndex = 0;

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
        <div class="carousel-item">
            <ProjectContainer
                title={Projects[currentIndex].title}
                description={Projects[currentIndex].description}
                tags={Projects[currentIndex].tags}
                icon={Projects[currentIndex].icon}
                link={Projects[currentIndex].link}
            />
        </div>
        <button class="next" on:click={nextProject}>&gt;</button>
    </div>
</section>

<style lang="scss">
    @use '../../../sass/main.scss';
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
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    .carousel-item, .carousel button {
        // flex: 1 0 100%;
        height: 100%;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }
</style>