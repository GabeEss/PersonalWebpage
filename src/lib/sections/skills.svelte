<script lang="ts">
    import ReactIcon from "../../assets/icons/react-icon.svelte";
    import JavascriptIcon from "../../assets/icons/javascript-icon.svelte";
    import HtmlIcon from "../../assets/icons/html-icon.svelte";
    import CssIcon from "../../assets/icons/css-icon.svelte";
    import NodejsIcon from "../../assets/icons/nodejs-icon.svelte";
    import MongodbIcon from "../../assets/icons/mongodb-icon.svelte";
</script>

<section id="skills">
    <h2 class="skills-header">Things I've Learned</h2>
    <nav class="skills-list">
        <ul>
            <li><ReactIcon/></li>
            <li><JavascriptIcon/></li>
            <li><HtmlIcon/></li>
            <li><CssIcon/></li>
            <li><NodejsIcon/></li>
            <li><MongodbIcon/></li>
        </ul>
    </nav>
</section>

<style lang="scss">
    @use '../../sass/main.scss';
    #skills {
        grid-row: 2/9;
        grid-column: 5/9;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
</style>