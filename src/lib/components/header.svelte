<script lang="ts">
    export let y;
    let menuTabs = [
        {name: "About", link: "#About"},
        {name: "Projects", link: "#Projects",},
        {name: "Contact", link: "#Contact",}
    ];
</script>

<header class="flex items-center justify-between py-2 px-4 w-full bg-[#40513B]">
    <h1 class="flex  text-xl text-[#EDF1D6]">
    <b>Napat</b> &ensp; Chalermwong
    </h1>
    <div class="flex space-x-4">
        {#each menuTabs as tab, i}
            <a href={tab.link} class="text-[#EDF1D6]">
                <p class="text-[#EDF1D6]">{tab.name}</p>
            </a>
        {/each}
    </div>
</header>