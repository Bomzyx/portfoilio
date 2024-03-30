<script lang="ts">
    import type { LayoutData } from './$types';
    import "../app.css";
    import Footer from '$lib/components/footer.svelte';
    import Header from '$lib/components/header.svelte'
    
    export let data: LayoutData;

    let y:any ;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView()
    }

</script>

<div class="bg-[#EDF1D6]">
<div class="relative flew flew-col mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" + 
        (y > 0 
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0"
        )}>
        <button on:click={goTop} class="ml-auto rounded-full bg-slate-900 text-green-500 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center">
        </button>
    </div>
    <Header y={y}/>
    <slot />
    <Footer/>
</div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />