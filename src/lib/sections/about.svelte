<section id="about">
    <h2 class="about-header">About Me</h2>
    <p class="about-name">My name is Gabe.</p>
    <p class="about-greeting1"> I am a self-taught software developer from Toronto, Canada.</p>
    <p class="about-greeting2">I’m a front-end developer who loves building cool stuff with React. Take a look at some of the projects I've built or some of the skills I've picked up.</p>
</section>

<style lang="scss">
    @use '../../sass/main.scss';
    #about{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-row: 2/9;
        grid-column: 5/9;
    }

    .about-header {
        grid-row: 1/6;
        grid-column: 2/4;
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
</style>