<script lang="ts">
  import Offerings from "$lib/components/offerings.svelte";
  import { Page } from "$lib/util";
  import type { PostEntryResponse } from "deso-protocol";
  export let data: { offerings: PostEntryResponse[] };
  export let tab: "Active" | "Voting" = "Active";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center">
    <a
      class="btn variant-soft-primary"
      href={Page.Markets.Create}
      target="_blank"
      rel="noreferrer"
    >
      create
    </a>
    <Offerings offerings={data.offerings} />
  </div>
</div>
