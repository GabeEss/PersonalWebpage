<script lang="ts">

</script>

<section>
    <div class="about-container">
        <p>Hello, there.</p>
        <p>My name is</p>
        <h1>Gabriel Sliwowicz</h1>
        <p>I'm a Frontend Developer from Toronto with a passion for building applications.</p>
    </div>
    <img src="/src/assets/me_pic.png" alt="Gabe Ess profile">
</section>

<style>
    /* h1, p {
        margin: 0;
        padding: 0;
    } */
    section{
        background-color: var(--color-bg-dark);
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        overflow-x: hidden;
    }

    .about-container {
        grid-column: 2/5;
        grid-row: 3/9;
    }

    img {
        position: relative;
		width: 45vh;
		grid-column: 5 / 9;
		grid-row: 2/9;
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