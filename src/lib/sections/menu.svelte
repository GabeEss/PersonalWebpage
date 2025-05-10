<script lang="ts">

</script>

<nav>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
    </ul>
</nav>

<style lang="scss">
    @use '../../sass/main.scss';
    nav {
        grid-column: 2/9;
        grid-row: 1/9;
    }

    li {
        list-style: none;
        padding: var(--spacing-l) var(--spacing-page-inset);
    }

    a {
        font-size: larger;
        letter-spacing: var(--letter-spacing-l);
        text-decoration: none;
        font-family: 'FriendlySansFont';
        font-size: var(--font-size-h1);
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
        content: none;
        display: inline-block;
        transform: rotate(-2deg);
        &:hover {
				transform: scale(1.10);
                animation: bounce 1.5s infinite ease-in-out;;
				color: var(--color-secondary);
                font-weight: 300;
			}
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0) rotate(-2eg);
        }
        50% {
            transform: translateY(-2px) rotate(2deg);
        }
    }
</style>
