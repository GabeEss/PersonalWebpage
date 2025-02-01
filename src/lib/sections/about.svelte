<script lang="ts">

</script>

<section>
    <p class="greeting-name">My name is</p>
    <h1>Gabriel Sliwowicz</h1>
    <img src="/src/assets/me_pic.png" alt="Gabe Ess profile">
    <p class="greeting-info">I'm a Frontend Developer from Toronto with a passion for building applications.</p>
</section>

<style>
    section{
        background-color: var(--color-bg-dark);
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        overflow-x: hidden;
        height: 100vh;
    }

    .about-container {
        grid-column: 2/5;
        grid-row: 4/9;
    }

    .greeting-name {
        display: flex;
        align-items: center;
        gap: var(--spacing-m);
        font-size: var(--font-size-h3);
        color: var(--color-primary);
        grid-row: 2/9;
        grid-column: 3/9;
    }

    .greeting-one {
        
    }

    .greeting-two {
        font-size: var(--font-size-h3);
        color: var(--color-primary);
    }

    .greeting-info {
        grid-column: 2/5;
        grid-row: 9/9;
    }

    h1 {
		display: inline-block;
		font-size: var(--font-size-h2);
		color: var(--color-secondary);
		font-weight: bold;
		padding: var(--spacing-s) 0;
        grid-row: 5/9;
        grid-column: 6/9;
	}

    img {
        position: relative;
		width: 45vh;
		grid-column: 4 / 6;
		grid-row: 4/9;
		justify-content: end;
    }

    @media screen and (max-width: 1080px) {
		img {
			width: 400px;
			grid-column: 5 / 9;
			grid-row: 2/9;
		}

		.about-container {
			grid-column: 2 / 5;
			grid-row: 3 / 9;
		}
	}
</style>