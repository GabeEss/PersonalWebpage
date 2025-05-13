<section id="about">
    <h2 class="about-header">About Me</h2>
    <p class="about-greeting">Hey!</p>
    <p class="about-greeting2">My name is Gabe. I am a self-taught software developer from Toronto, Canada.</p>
    <p class="about-greeting3">I’m a front-end developer who loves building cool stuff with React. Take a look at some of the projects I've built or some of the skills I've picked up.</p>
</section>

<style lang="scss">
    @use '../../sass/main.scss';
    #about{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-row: 4/9;
        grid-column: 5/9;
    }

    .about-header {
        grid-row: 1/4;
        grid-column: 1/4;
    }

    .about-greeting {
        grid-row: 2/4;
        grid-column: 2/4;
    }

    .about-greeting2 {
        grid-row: 3/4;
        grid-column: 1/2;
    }

    .about-greeting3 {
        grid-row: 3/4;
        grid-column: 3/4;
    }
</style>