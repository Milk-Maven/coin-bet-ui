<script lang="ts">
  import "../../app.postcss";
  import Footer from "../components/footer.svelte";
  import { appBorder } from "$lib/util";
  import SubFooter from "../components/subFooter.svelte";
  export let containerClass: string = "";
</script>

<div class="mx-auto h-[100vh] bg-prime1 relative min-w-[1200px] max-w-[1200px]">
  <div class="px-20 pt-10">
    <div
      class="w-full text-white {appBorder} rounded-md justify-start flex flex-col h-full"
    >
      <div class="flex justify-around w-full">
        <SubFooter />
      </div>
      <div
        class="max-h-[87vh] min-h-[87vh] overscroll-auto overflow-hidden {containerClass}"
      >
        <slot />
      </div>
      <div class="flex justify-center w-full"><Footer /></div>
    </div>
  </div>
</div>
