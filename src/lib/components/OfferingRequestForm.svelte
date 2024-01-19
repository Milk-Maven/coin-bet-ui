<script lang="ts">
  import { offeringCreate } from "$lib/api";
  import { offeringCreateValidation } from "$lib/shared/validators";
  import { requireLogin } from "$lib/deso";
  import "../../app.postcss";
  import YourDatePickerComponent from "../components/calendar.svelte";
  import { app } from "$lib/state";
  let eventDescription = "";
  let outcome1 = "";
  let outcome2 = "";
  let outcome3 = "";
  let outcome4 = "";
  let startDate = new Date().toISOString();
  let endDate = "";

  let eventDescriptionError = "";
  let outcome1Error = "";
  let outcome2Error = "";
  let outcome3Error = "";
  let outcome4Error = "";
  let endDateError = "";

  async function handleSubmit() {
    if (!$app.publicKey) {
      const res = await requireLogin();
      if (res?.publicKeyAdded) {
        alert("hey");
        app.set({ publicKey: res?.publicKeyAdded ?? "" });
      } else {
        alert("need to sign in");
      }
    }

    resetErrors();
    const betRequest = {
      event_description: eventDescription,
      outcomes: [outcome1, outcome2, outcome3, outcome4].filter(
        (o) => o !== ""
      ),
      startDate,
      endDate,
      creatorPublicKey: $app.publicKey,
    };
    const validationResult = offeringCreateValidation.safeParse(betRequest);
    if (!validationResult.success) {
      // Display validation errors
      const validationErrors = validationResult.error.flatten();
      endDateError = validationErrors.fieldErrors.endDate?.[0] ?? "";
      eventDescriptionError =
        validationErrors.fieldErrors.event_description?.[0] ?? "";
      outcome1Error = validationErrors.fieldErrors.outcomes?.[0] ?? "";
      outcome2Error = validationErrors.fieldErrors.outcomes?.[0] ?? "";
      outcome3Error = validationErrors.fieldErrors.outcomes?.[0] ?? "";
      outcome4Error = validationErrors.fieldErrors.outcomes?.[0] ?? "";
    } else {
      console.log(betRequest);
      // Reset error messages
      const res = await offeringCreate(validationResult.data)
        .then((res) => {
          console.log(res);
          alert("succuessfully submitted");
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          alert("something went wrong");
        });
    }
  }

  function resetForm() {
    eventDescription = "";
    outcome1 = "";
    outcome2 = "";
    outcome3 = "";
    outcome4 = "";
    startDate = "";
    endDate = "";
  }

  function resetErrors() {
    eventDescriptionError = "";
    outcome1Error = "";
    outcome2Error = "";
    outcome3Error = "";
    outcome4Error = "";
    endDateError = "";
  }
</script>

<div class="w-3/5 mx-auto rounded-lg p-5">
  <main class="card p-5">
    <h3 class="h3">make an offering</h3>
    <YourDatePickerComponent
      errorMessage={endDateError}
      label={"end date"}
      on:dateSelected={function handleDateSelected(event) {
        const selectedDate = event.detail.date;
        endDate = selectedDate;
      }}
    />
    <div>
      <div class="mb-10">
        <label for="outcome1" class="label">
          <span>outcome 1 *</span>
          {#if outcome1Error}
            <span class="ml-2 mb-2 text-red-500 text-xs"> {outcome1Error}</span>
          {/if}
        </label>
        <input
          type="text"
          id="outcome1"
          class="input w-full p-2 {eventDescriptionError
            ? 'border-red-500'
            : ''}"
          bind:value={outcome1}
        />
      </div>

      <div class="mb-10">
        <label for="outcome2" class="label">
          <span>outcome 2 *</span>
          {#if outcome2Error}
            <span class="ml-2 mb-2 text-red-500 text-xs"> {outcome2Error}</span>
          {/if}
        </label>

        <input
          type="text"
          id="outcome2"
          class="input w-full p-2 {eventDescriptionError
            ? 'border-red-500'
            : ''}"
          bind:value={outcome2}
        />
      </div>

      <div class="mb-10">
        <label for="outcome3" class="label">
          <span>outcome 3</span>
          <!-- {#if outcome3Error} -->
          <!-- 	<span class="ml-2 mb-2 text-red-500 text-xs">* {outcome3Error}</span> -->
          <!-- {/if} -->
        </label>
        <input type="text" id="outcome3" class="input" bind:value={outcome3} />
      </div>

      <div class="mb-10">
        <label for="outcome4" class="label"
          >outcome 4
          <!-- {#if outcome4Error} -->
          <!-- 	<span class="ml-2 mb-2 text-red-500 text-xs">* {outcome4Error}</span> -->
          <!-- {/if} -->
          <input
            type="text"
            id="outcome4"
            class="input"
            bind:value={outcome4}
          />
        </label>
      </div>
      <div class="mb-10">
        <label class="label">
          event description *
          {#if eventDescriptionError}
            <span class="ml-2 mb-2 text-red-500 text-xs">
              {eventDescriptionError}</span
            >
          {/if}
          <textarea
            id="eventDescription"
            class="textarea w-full p-2 {eventDescriptionError
              ? 'border-red-500'
              : ''}"
            bind:value={eventDescription}
          />
        </label>
      </div>

      <!-- Add similar error handling for other fields -->

      <!-- Button to submit the form and emit the betRequestCreated event -->
      <div class="flex justify-center">
        <button
          class="btn btn-lg variant-filled font-bold"
          on:click={handleSubmit}
          >create offering
        </button>
      </div>
    </div>
  </main>
</div>

<style lang="postcss">
</style>
