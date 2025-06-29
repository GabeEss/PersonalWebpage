<script lang="ts">
    import Menu from '../sections/menu.svelte';
    import About from '../sections/about.svelte';
    import Projects from '../sections/projects/projects.svelte';
    import Skills from '../sections/skills.svelte';
    let selectedSection = 'about';
</script>

<div class="content">
    <Menu bind:selectedSection/>
    {#if selectedSection === 'about'}
    <About/>
    {/if}
    {#if selectedSection === 'projects'}
    <Projects/>
    {/if}
    {#if selectedSection === 'skills'}
    <Skills/>
    {/if}
</div>

<style>
    .content{
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        overflow-x: hidden;
    }

    @media screen and (max-width: 940px) {
		.content {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            align-items: center;
            &::after{
                content: "";
                background-color: var(--color-bg-dark);
                height: 50px;
                width: 100%;
            }
        }
	}
</style>