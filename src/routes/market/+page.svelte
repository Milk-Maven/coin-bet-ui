<script lang="ts">
  import Offerings from "$lib/components/offerings.svelte";
  import type { PostEntryResponse } from "deso-protocol";
  export let data: { offerings: PostEntryResponse[] };
  console.log(data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center">
    <Offerings offerings={data.offerings} />
  </div>
</div>
