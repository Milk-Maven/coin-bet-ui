<script lang="ts">
	import marked from 'marked';
	import '../page.css';
	import AppContainer from '../../components/appContainer.svelte';

	const roadmapContent = `
    # The Golden Calf App Roadmap

    ## Version 1.0 (MVP)

    - **Feature 1:** participate in markts 
    - **Feature 2:** display offering data 
    - **Feature 3:** offerings appear in feed

    ![Golden Calf](/calf.jpeg)

    ## Version 2.0 (Upcoming)

    - **Feature 4:** user inspired pots
    - **Feature 5:** winners nfts 
    - **Feature 6:** lottery

    ## Version 3.0 (Future)

    - **Feature 7:** accept more tokens as payment
    - **Feature 8:** crowd inspired roadmap
    - **Feature 9:**  

    *In the quiet echoes of The Golden Calf, gratitude for your interest in our app.*
  `;
	const htmlContent = marked(roadmapContent);
</script>

<div>
	<AppContainer>
		<div class="flex justify-center text-primet2">
			{@html htmlContent}
		</div>
	</AppContainer>
</div>

<style>
	/* Add your custom styles if needed */
</style>
