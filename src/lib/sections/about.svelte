<section id="about">
    <h2 class="about-header">About Me</h2>
    <p class="about-name">Hello, I'm Gabe S!</p>
    <p class="about-greeting1"> I am a self-taught software developer from Toronto, Canada.</p>
    <p class="about-greeting2">I love building cool stuff with React. Take a look at some of the projects I've built or some of the skills I've picked up.</p>
</section>

<style lang="scss">
    @use '../../sass/main.scss';
    #about{
        animation: fade .5s ease-in;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-row: 2/9;
        grid-column: 5/9;
    }

    .about-header {
        grid-row: 1/6;
        grid-column: 2/6;
    }

    .about-name {
        grid-row: 2/6;
        grid-column: 3/6;
    }

    .about-greeting1 {
        grid-row: 3/6;
        grid-column: 1/6;
    }

    .about-greeting2 {
        grid-row: 4/6;
        grid-column: 2/6;
    }

    h2 {
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h2);
        color: var(--color-primary);
    }

    p {
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h3);
        color: var(--color-primary);
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