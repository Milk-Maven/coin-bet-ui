<script lang="ts">
  import Dashboard from "./dashboard.svelte";

  export let data: { offerings: PostEntryResponse[] };

  import OfferingRequestForm from "$lib/components/OfferingRequestForm.svelte";
  import { getSnapShot, type GetSnapShotResponse } from "$lib/api";
  import { onMount } from "svelte";
  import { Page, truncateAndAddEllipsis } from "$lib/util";
  import type { CalfOfferingGame } from "$lib/shared/validators";
  import type { PostEntryResponse } from "deso-protocol";
  let makeOffering = false;
  let snapshot: GetSnapShotResponse | null = null;
  let selectedOffering: CalfOfferingGame;
  onMount(async () => {
    try {
      snapshot = await getSnapShot({ week: null });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
</script>

<div class="flex flex-col justify-evenly gap-4 sm:flex-row mt-4">
  <div class="min-w-[800px] max-w-[1600px] w-4/5">
    <div class="card p-4 mb-5">
      <h3 class="h3 text-center">Profile</h3>

      {#if snapshot !== null}
        <div class="text-left pt-4">
          <span class="label">
            current week hash hex: <a href={snapshot.profile.currentWeekHashHex}
              >{snapshot.profile.currentWeekHashHex}
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
      {#if snapshot !== null}
        <!-- TODO take it to week page or diamond page -->
        <div class="text-left pt-4">
          <span class="label">
            week's PostHashHex: <a href={snapshot.profile.currentWeekHashHex}
              >{snapshot.profile.currentWeekHashHex}
            </a>
          </span>
          <div>current week: {snapshot.week.latestWeek}</div>

          <!-- {#each Object.entries(snapshot.offerings) as [key, week]} -->
          <!--   {key} -->
          <!-- {/each} -->
        </div>

        <div class="flex justify-around pt-10">
          <a
            class="btn variant-soft-secondary"
            href={Page.Markets.Offering +
              "?=" +
              snapshot.profile.currentWeekHashHex}>view in app</a
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
          {#each Object.entries(snapshot.profile.calfWeeks) as [key, week]}
            <a class="pr-2 underline text-secondary-500">{key}</a>
          {/each}
        </div>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>

    {#if snapshot !== null && snapshot.offerings.length}
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
              {#each snapshot.offerings as row, i}
                <tr
                  on:click={() => {
                    selectedOffering = row;
                  }}
                >
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
    {:else}
      offerings: no offerings found
    {/if}
    {#if selectedOffering}
      <div class="mt-5">
        <div class="card">
          // sort this by offering.option.bidders // show some stats on it //
          payout here
          {selectedOffering.options}
        </div>
      </div>
    {/if}
    {#if makeOffering}
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
