<script lang="ts">
  import OfferingRequestForm from "$lib/components/OfferingRequestForm.svelte";
  import { type GetSnapShotResponse } from "$lib/api";
  import { Page, truncateAndAddEllipsis } from "$lib/util";
  import type { PostEntryResponse } from "deso-protocol";
  let makeOffering = false;
  export let data: {
    snapshot: GetSnapShotResponse;
    posts: PostEntryResponse[];
  } | null = null;
  const getPostByIndex = (index: string): PostEntryResponse => {
    const PostHashHex = data.snapshot.profile.calfWeeks[index];
    const post = data?.posts?.find((p) => p.PostHashHex === PostHashHex);
    return post as PostEntryResponse;
  };
  const getPostByPostHashHex = (PostHashHex: string): PostEntryResponse => {
    const post = data?.posts.find((p) => p.PostHashHex === PostHashHex);
    return post as PostEntryResponse;
  };

  const getGame = (PostHashHex: string) => {
    const post = data?.posts.find((p) => p.PostHashHex === PostHashHex);
    const gameState = JSON.parse(post?.PostExtraData.goldenCalf ?? "{}");
    return gameState;
    // return CalfWeekValidation.parse(gameState);
  };
  $: selectedWeek = {
    PostHasHex: data?.snapshot.profile.currentWeekHashHex as string,
    post: getPostByPostHashHex(
      data?.snapshot.profile.currentWeekHashHex as string
    ),
    game: getGame(data?.snapshot.profile.currentWeekHashHex as string),
  };
</script>

<div class="flex flex-col justify-evenly gap-4 sm:flex-row mt-4">
  <div class="min-w-[800px] max-w-[1600px] w-4/5">
    <div class="card p-4 mb-5">
      <h3 class="h3 text-center">Profile</h3>
      {#if data !== null}
        <div class="text-left pt-4">
          <span class="label">
            current week hash hex: <a
              href={data.snapshot.profile.currentWeekHashHex}
              >{data.snapshot.profile.currentWeekHashHex}
            </a>
          </span>
        </div>
        <div class="flex justify-around pt-10">
          <button
            class="btn variant-soft-secondary"
            on:click={() => {}}
            disabled={!!"if a current week already exist disable this"}
            >start app
          </button>

          <button class="btn variant-soft-secondary" on:click={() => {}}
            >start next week</button
          >
        </div>
      {:else}
        profile: no profile found
      {/if}
    </div>
    <div class="card p-4 mb-5">
      <h3 class="h3 text-center">Week</h3>
      {#if data !== null}
        <!-- TODO take it to week page or diamond page -->
        <div class="text-left pt-4">
          <span class="label">
            week's PostHashHex: <a
              href={data.snapshot.profile.currentWeekHashHex}
              >{selectedWeek.PostHasHex}
            </a>
          </span>
          <div>
            current week: {selectedWeek.PostHasHex ===
              data.snapshot.profile.currentWeekHashHex}
          </div>

          <!-- {#each Object.entries(snapshot.offerings) as [key, week]} -->
          <!--   {key} -->
          <!-- {/each} -->
        </div>

        <div class="flex justify-around pt-10">
          <a
            class="btn variant-soft-secondary"
            href={Page.Markets.Offering +
              "?=" +
              data.snapshot.profile.currentWeekHashHex}>view in app</a
          >
          <!-- <button class="btn variant-soft-secondary" on:click={() => {}} -->
          <!--   >start next week</button -->
          <!-- > -->
          <button
            class="btn variant-soft-secondary"
            on:click={() => {
              makeOffering = !!makeOffering;
            }}>make offering</button
          >
        </div>

        <div class="flex justify-start pt-4">
          <span class="pr-2">other weeks:</span>
          {#each Object.entries(data.snapshot.profile.calfWeeks ?? []) as [key, pubKey]}
            <button
              class="pr-2 underline text-secondary-500"
              on:click={() => {
                const post = getPostByIndex(key);
                selectedWeek = {
                  post,
                  PostHasHex: post?.PostHashHex,
                  game: getGame(post?.PostHashHex),
                };
                console.log(selectedWeek);
              }}>{key}</button
            >
          {/each}
        </div>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>

    {#if data !== null && data.snapshot.offerings.length}
      <div class="card p-4 mb-5">
        <h3 class="h3 text-center mb-5">active offerings</h3>
        <div class="table-container">
          <table class="table table-hover">
            <thead>
              <tr>
                <!-- <th>post hash hex</th> -->
                <th>body</th>
                <th>option1</th>
                <th>option2</th>
                <th>option3</th>
                <th>option4</th>
                <th>end date</th>
                <th>creator public key</th>
                <th>winning option</th>
                <th>sacrifices</th>
              </tr>
            </thead>
            <tbody>
              {#each data.snapshot.offerings as row, i}
                <tr on:click={() => {}}>
                  <!-- <td>{row.PostHashHex}</td> -->
                  <td>{row.Body}</td>
                  {#each row.options as option}
                    <td>{option}</td>
                  {/each}
                  <td>{row.endDate}</td>

                  <td>{truncateAndAddEllipsis(row.creatorPublicKey)}</td>
                  <td>{row.winningOption}</td>
                  <td><a on:click={() => {}}>show more</a></td>
                </tr>
              {/each}
            </tbody>
            <tfoot>
              <tr>
                <th colspan="3">week pot size</th>
                <!-- // do mathz to get pot size -->
                <!--  {weekPotSize}-->
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="mt-5">
        <div class="card">
          // sort this by offering.option.bidders // show some stats on it //
          payout here
          {selectedWeek.game.options}
        </div>
      </div>
    {:else}
      offerings: no offerings found
      <div class="mt-5">
        <OfferingRequestForm />
      </div>
    {/if}
  </div>
</div>

<style>
  pre {
    white-space: pre-wrap;
  }
</style>
