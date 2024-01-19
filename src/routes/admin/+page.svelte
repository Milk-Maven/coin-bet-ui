<script lang="ts">
  import { post } from "$lib/api";
  import { endpoints } from "../../lib/shared/utils";

  async function fakePromise(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  let startWeekLoading = {
    loading: false,
    success: false,
    error: false,
  };
  let newOfferingLoading = {
    loading: false,
    success: false,
    error: false,
  };

  // params for make offering function
  // event_description?: string;
  // outcomes?: string[];
  // endDate?: string;
  // publicKey?: string;
  // but the request needs to send an obj with ?
  // PostHashHex?: string;
  // OptionPostHashHex?: string[];
  // PosterPublicKeyBase58Check?: string;

  //start week in backend returns start week information
  async function startWeek(description: string, init: boolean) {
    startWeekLoading.loading = true;
    startWeekLoading.error = false;
    try {
      post(endpoints.start, { description });
    } catch (error) {
      startWeekLoading.error = true;
      console.log("error");
    } finally {
      startWeekLoading.loading = false;
    }
  }

  //make offering in backend wasn't returning anything so there isn't anything to do with data
  async function createNewOffering(offering) {
    newOfferingLoading.loading = true;
    newOfferingLoading.error = false;
    try {
      //fake promise
      await fakePromise(2000);
      //actual request goes here
      // const response = await fetch(`http://localhost:3000/${endpoints.offeringCreate}`,{
      //     method:'POST',
      //     headers:{
      //         'Content-Type': 'application/json'
      //     },
      /////!!!!!! i couldn't get access to this to make sure i was sending the right data to it
      //     // body: ??? probably just offering object??,
      // });
      // if(!response.ok){
      //     throw new Error('failed to create new offering')
      // }

      //throw errors before this
      newOfferingLoading.success = true;

      // let text = 'fsd new week'
      // return text
    } catch (error) {
      newOfferingLoading.error = true;
      console.log("error");
    } finally {
      newOfferingLoading.loading = false;
    }
  }
</script>

<div class="text-center p-4 m-4 border-4 border-rose-900 rounded-lg">
  <button on:click={() => startWeek("test post", false)} />
  <h1 class="text-3xl mb-2">Admin</h1>
  <div class="flex flex-col justify-evenly gap-4 sm:flex-row">
    <div class="card p-4">
      <button
        class="btn variant-soft-secondary"
        on:click={() => startWeek("description", false)}
        disabled={startWeekLoading.loading}>Start New Week</button
      >
      <p>
        starts new week of golden calf. I think this is just for dev purposes?
      </p>
      {#if !startWeekLoading.loading && !startWeekLoading.success && !startWeekLoading.error}
        <p>You haven't started a new week</p>
      {/if}
      {#if startWeekLoading.loading}
        <p>....sending request</p>
      {:else if startWeekLoading.success}
        <p>Started week successfully</p>
      {:else if startWeekLoading.error}
        <p>there was an error starting week</p>
      {/if}
    </div>
    <div class="card p-4">
      <button
        class="btn variant-soft-secondary"
        on:click={() => createNewOffering("fosskdfj")}
        >Create New Offering</button
      >
      <p>this should create a fake new offering?</p>
      {#if !newOfferingLoading.loading && !newOfferingLoading.success && !newOfferingLoading.error}
        <p>You haven't created a new offering</p>
      {/if}
      {#if newOfferingLoading.loading}
        <p>....sending request</p>
      {:else if newOfferingLoading.success}
        <p>created offering successfully</p>
      {:else if newOfferingLoading.error}
        <p>there was an error creating a new offering</p>
      {/if}
    </div>
  </div>
</div>

