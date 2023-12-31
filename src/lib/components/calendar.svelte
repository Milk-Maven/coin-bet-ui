<!-- src/components/YourDatePickerComponent.svelte -->
<script lang="ts">
  import { appBorder } from "$lib/util";
  import { createEventDispatcher } from "svelte";

  export let label: string;
  export let errorMessage: string;

  interface DateParams {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    timeZone: number;
  }

  let selectedDateString: string;
  let selectedDate: string;
  const dispatch = createEventDispatcher();

  const createDateObject = ({
    year,
    month,
    day,
    hour,
    minute,
    timeZone,
  }: DateParams): Date => {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1); // Months are zero-indexed
    date.setDate(day);
    date.setHours(hour);
    date.setMinutes(minute);
    // Set time zone offset
    date.setMinutes(
      date.getMinutes() + date.getTimezoneOffset() + timeZone * 60
    );
    return date;
  };

  const currentDate = new Date();
  const futureDate = new Date(
    currentDate.getFullYear() + 5,
    currentDate.getMonth(),
    currentDate.getDate(),
    12, // Set the hour to 12 (noon) in CT
    0, // Set the minute to 0
    0, // Set the second to 0
    0 // Set the millisecond to 0
  );
  function handleDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    selectedDateString = inputElement.value;
    // Parse the selected date string and update the state
    selectedDate = new Date(selectedDateString).toISOString();
    // Emit the dateSelected event with the selected date
    dispatch("dateSelected", { date: selectedDate });
  }
</script>

<main class="w-full">
  <!-- Custom date picker input -->
  <label for="datepicker" class="label">
    {label} *
    {#if errorMessage}
      <span class="ml-2 mb-2 text-red-500 text-xs">* {errorMessage}</span>
    {/if}
  </label>
  <div class="relative">
    <input
      type="datetime-local"
      id="datepicker"
      class="input p-4 mb-10 w-full border bg-secondary1"
      on:input={handleDateChange}
      min={currentDate.toISOString()}
      max={futureDate.toISOString()}
    />
    <style>
      #datepicker::before {
        color: white; /* Change the color to white or any other color */
      }
    </style>
  </div>

  <!-- Display the selected date -->
</main>

<style lang="postcss">
  button {
    background: #cd7f32; /* Bronze Color for Submit Button */
    color: #fff8dc;
  }
  .modal {
    background: #8b4513; /* Grayish Dialog Background */
    /* Add additional styling for padding, border-radius, etc. */
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  ::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
  }
</style>
