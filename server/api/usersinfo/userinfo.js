<script setup>
	import os from 'os'
	definePageMeta({
		layout: "custom",
	})
	
	console.log(os.userInfo())
</script>