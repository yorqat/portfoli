<a href="#content">Skip to main content</a>

<style>
    a {
        all: unset;
        display: block;
        position: absolute;
        height: 2rem;
        padding: 1rem;
        margin: 1rem;
        border-radius: 12px;
        background-color: var(--bg);
        color: var(--clr);
        font-family: sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        transform: translateY(-200%);
        transition: transform 200ms;

        z-index: 2;
        grid-area: 1 / 1 / 2 / 4;
    }

    a:focus {
        transform: translateY(0);
    }
</style>