<template>
	<code>
		<q-badge
			multi-line
			class="bg-blue-grey-10 q-pb-xs"
			v-text="msg">
		</q-badge>
	</code>
</template>

<script>
export default {
	name: 'CodeHighlight',
	props: {
		msg: String
	}
}
</script>