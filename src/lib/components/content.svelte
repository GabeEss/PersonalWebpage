<script lang="ts">
    import Menu from '../sections/menu.svelte';
</script>

<div class="content">
    <!-- <p class="greeting-hello">Hey!</p>
    <div class="greeting-name">
        <p>My name is</p>
        <h1>Gabriel Sliwowicz</h1>
    </div>
    <div class="greeting-info">
        <p>I'm a Frontend Developer from Toronto with a passion for building 
            <a class="greeting-cool" target="_blank" rel="noopener noreferrer" href="https://github.com/GabeEss">cool stuff</a>
        </p>
    </div> -->
    <Menu/>
</div>

<style>
    .content{
        /* background-color: var(--color-bg-dark); */
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        overflow-x: hidden;
        height: 100vh;
    }

    /* .about-container {
        grid-column: 2/5;
        grid-row: 4/9;
    } */

    /* .greeting-name {
        display: flex;
        align-items: center;
        gap: var(--spacing-m);
        font-size: var(--font-size-h3);
        color: var(--color-primary);
        grid-row: 2/9;
        grid-column: 3/9;
        letter-spacing: var(--letter-spacing-m);
    } */

    /* .greeting-hello {
        grid-row: 4/9;
        grid-column: 3/9;
        font-size: var(--font-size-h1);
        color: var(--color-secondary);   
        letter-spacing: var(--letter-spacing-m);
    } */

    /* .greeting-info {
        display: flex;
        align-items: center;
        gap: var();
        font-size: var(--font-size-h4);
        color: var(--color-primary);
        grid-column: 3/5;
        grid-row: 5/7;
        letter-spacing: var(--letter-spacing-m);
    } */

    /* h1 {
		display: inline-block;
		font-size: var(--font-size-h2);
		color: var(--color-secondary);
		font-weight: bold;
		padding: var(--spacing-s) 0;
        grid-row: 5/9;
        grid-column: 8/9;
	} */

    /* a {
        text-decoration: underline;
        text-decoration-color: var(--color-secondary);
        text-underline-offset: var(--spacing-xs);
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
        content: none;
        display: inline-block;
        &:hover {
            transform: scale(2.50) translateY(var(--font-size-small)) translateX(var(--font-size-small));
            color: var(--color-secondary);
            text-decoration-color: var(--color-primary);
            z-index: 100;
		}
    } */

    /* img {
        padding-left: 2em;
        position: relative;
		width: 58vh;
		grid-column: 5 / 8;
		grid-row: 2/9;
		justify-content: end;
    } */

    /* @media screen and (max-width: 1080px) {
		img {
			width: 400px;
			grid-column: 5 / 9;
			grid-row: 2/9;
		}

		.about-container {
			grid-column: 2 / 5;
			grid-row: 3 / 9;
		}
	} */
</style>