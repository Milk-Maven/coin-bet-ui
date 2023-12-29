<script lang="ts">
	import { GOLDEN_CALF_LOGO, appBorder, formatDateForUser } from '$lib/util';
	import type { PostEntryResponse } from 'deso-protocol';
	import Expander from './expander.svelte';
	export let offerings: PostEntryResponse[];
	let showDetails: { [index: number]: boolean } = {};
</script>

<main>
	{#each offerings as offering, i}
		<div class="{appBorder} rounded-md flex flex-col justify-start mx-20 p-8 mt-5">
			<div class="flex border-b-0">
				<img
					src="/football.jpeg"
					alt="calf"
					class="outline-none cursor-default max-h-[8vh] max-w-[8vh] my-auto rounded-md"
				/>
				<div class="pl-5">
					<h1 class="text-lg my-auto">{offering.Body}</h1>
				</div>
			</div>
			<Expander
				text={{ opened: 'show details', closed: 'hide details' }}
				on:customEvent={() => {
					showDetails[i] = !showDetails[i];
				}}
			/>
			{#if showDetails[i]}
				<div class="flex flex justify-around mt-5">
					<div>
						<p class="text-md my-auto">
							ends on: {formatDateForUser(offering.PostExtraData.endDate)}
						</p>
						<p>comments</p>
						<p>pot size</p>
						<p>favorite</p>
						<p>created by</p>
					</div>

					<div>
						<div class="flex flex-col justify-around mt-5">
							<p class="{appBorder}  bor rounded-md py-2 px-3 text-primet">
								{offering.PostExtraData.option1}
							</p>
							<p class="{appBorder} rounded-md py-2 px-3 text-primet">
								{offering.PostExtraData.option2}
							</p>
							<p class="{appBorder} rounded-md py-2 px-3 text-primet">
								{offering.PostExtraData.option3}
							</p>
							<p class="{appBorder} rounded-md py-2 px-3 text-primet">
								{offering.PostExtraData.option4}
							</p>
						</div>
						<div>
							<h1 class="text-center text-lg my-auto">amount</h1>
						</div>
					</div>
				</div>
			{/if}
			<!-- <div class="flex justify-start flex-col h-[100%] my-auto"> -->
			<!-- 	<div class="flex justify-between min-w-[100%]"> -->
			<!-- 		<div class="flex-1"> -->
			<!-- 			<div class="text-center"> -->
			<!-- 				<h1 class="text-lg my-auto">{offering.Body}</h1> -->
			<!-- 				<h2 class="text-md my-auto">{offering.PostExtraData.endDate}</h2> -->
			<!-- 			</div> -->
			<!-- 		</div> -->
			<!-- 	</div> -->
			<!-- </div> -->
			<!-- <div class="flex justify-end"> -->
		</div>
	{/each}
</main>
