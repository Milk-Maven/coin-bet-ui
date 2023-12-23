<script lang="ts">
	import { appBorder } from '$lib/util';
	import type { PostEntryResponse } from 'deso-protocol';
	export let offerings: PostEntryResponse[];
	import { GOLDEN_CALF_LOGO } from '$lib/util';
</script>

<main>
	{#each offerings as offering}
		<div class="{appBorder} rounded-md p-5 py-10 m-10 mt-0">
			<div class="flex justify-start flex-col h-[100%]">
				<div class="flex justify-between">
					<img class="max-h-[70px] my-auto" src={GOLDEN_CALF_LOGO} alt="calf" />
					<div>
						<div class="text-center">
							<h1 class="text-lg my-auto">{offering.Body}</h1>
						</div>
						<div>
							<div class="flex justify-around gap-16 mt-5">
								<p class="{appBorder} rounded-md py-2 px-3 text-primet">
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
							<!-- <div> -->
							<!-- 	<h1 class="text-center text-lg my-auto">amount</h1> -->
							<!-- </div> -->
						</div>
					</div>
					<img class="max-h-[70px] my-auto" src={GOLDEN_CALF_LOGO} alt="calf" />
				</div>
			</div>
			<!-- <div class="flex justify-end"> -->
			<!-- 	<p>comments</p> -->
			<!-- 	<p>favorite</p> -->
		</div>
	{/each}
</main>
