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
        grid-row: 2/8;
        grid-column: 5/9;
    }

    .about-header {
        grid-row: 1/1;
        grid-column: 2/6;
        transform: rotate(5deg);
        background: linear-gradient(175deg, var(--color-bg-dark) 30%, var(--color-bg-light) 0%);
        border-top: 2px solid black;
    }

    .about-greeting1 {
        grid-row: 2/2;
        grid-column: 3/6;
        padding-bottom: var(--spacing-xl);
        display: flex;
        align-items: flex-end;
        transform: rotate(5deg);
    }

    h1 {
        letter-spacing: var(--letter-spacing-xl);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        padding-bottom: var(--spacing-xl);
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
        padding-bottom: var(--spacing-xl);
        letter-spacing: var(--letter-spacing-m);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-b1);
        transform: rotate(5deg);
    }

    .about-greeting3 {
        grid-row: 4/6;
        grid-column: 2/6;
        height: 100px;
        padding-bottom: var(--spacing-xl);
        letter-spacing: var(--letter-spacing-s);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-b1);
        color: var(--color-bg-dark);
        animation: fade 1s ease-in;
        transform: rotate(5deg);
        position: relative;
        background: linear-gradient(175deg, var(--color-bg-light) 70%, var(--color-bg-dark) 0%);
        border-bottom: 2px solid black;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }

    @media screen and (max-height: 400px) {
		#about {
            height: 600px;
        }
        h1 {
            margin-top: 1em;
            height: 100px;
        }
	}

    @media screen and (max-width: 940px) {
        #about {
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            height: var(--content-height-small);
            width: 100%;
            background: var(--color-bg-light);
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
        }
        .about-header {
            display: none;
        }
        .about-greeting1 {
            transform: none;
            width: 80%;
        }
        .about-greeting2 {
            transform: none;
            width: 80%;
        }
        .about-greeting3 {
            transform: none;
            background: none;
            border: none;
            width: 80%;
        }
    }
    
</style>