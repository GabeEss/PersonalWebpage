<section id="about">
    <h1 class="about-header">About Me</h1>
    <div class="about-greeting1">
        <p class="about-hello">Hello, I'm <p class="about-name">Gabe S!</p>
    </div>
    <p class="about-greeting2"> I am a self-taught software developer from Toronto, Canada.</p>
    <p class="about-greeting3">I love building cool stuff with React. Take a look at some of the projects I've built or some of the skills I've picked up.</p>
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
        grid-row: 1/1;
        grid-column: 2/6;
        transform: rotate(5deg);
        background: linear-gradient(175deg, var(--color-bg-dark) 30%, var(--color-bg-light) 0%);
        border-top: 1px solid black;
    }

    .about-greeting1 {
        grid-row: 2/2;
        grid-column: 3/6;
        height: 50%;
        display: flex;
        align-items: flex-end;
        transform: rotate(5deg);
    }

    h1 {
        letter-spacing: var(--letter-spacing-xl);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
    }

    .about-name {
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h2);
        color: var(--color-bg-dark);
        padding-left: var(--spacing-m);
        animation: fade 1s ease-in;
    }

    .about-hello {
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-b1);
    }

    .about-greeting2 {
        grid-row: 3/3;
        grid-column: 1/6;

        letter-spacing: var(--letter-spacing-m);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-b1);
        transform: rotate(5deg);
    }

    .about-greeting3 {
        grid-row: 4/6;
        grid-column: 2/6;

        letter-spacing: var(--letter-spacing-s);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-b1);
        color: var(--color-bg-dark);
        animation: fade 1s ease-in;
        transform: rotate(5deg);
        background: linear-gradient(170deg, var(--color-bg-light) 70%, var(--color-bg-dark) 0%);
        border-bottom: 1px solid black;
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