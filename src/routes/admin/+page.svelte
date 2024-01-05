<script>
    import {endpoints} from '../../lib/shared/utils'

    async function startWeek(description, init){
        //request to request to backend
        try{
            const response = await fetch(`http://localhost:3000/${endpoints.startWeek}`,{ 
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({description, init}),
            });
            if(!response.ok){
                throw new Error('failed to start week')
            }
            const responseData = await response.json();
            console.log(responseData)
        }catch(error){
            console.error('error', error.message)
        }
    }

    async function createNewOffering(offering){
        try{
            const response = await fetch(`http://localhost:3000/${endpoints.offeringCreate}`,{ 
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: {JSON.stringify('functions')},
            });
            if(!response.ok){
                throw new Error('failed to create new offering')
            }
            const responseData = await response.json();
            console.log(responseData)
        }catch(error){
            console.error('error', error.message)
        }

    }
 
  
</script>


<div>

todos
<ul>
<li>start new week</li>
<li>create new offering</li>
<li>zod frontend type check</li>
</ul>
</div>

<div>
    <h1>Admin options</h1>
    <button class="btn variant-filled-primary" on:click={()=>startWeek('week 1 data', false)}>start new week</button>
    <button class="btn variant-filled-primary" on:click={()=>createNewOffering('data')}>create new offering</button>
</div>