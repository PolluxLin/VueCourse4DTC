<template>
	<div id="app">
		<MainMenu />
		<div class="pageContent">
			<router-view />
		</div>
	</div>
</template>

<script>
require("@/assets/magnific-popup/jquery.magnific-popup.js");
import MainMenu from "@/components/navbarMainMenu.vue";
export default {
	name: "App",
	components: { MainMenu },
	created() {},
	mounted() {
		var targetId = "app";
		console.log("jquery functional test > #" + targetId + ".offset().top = (" + $("#" + targetId).offset().top + ")");
	},
};
/*
$(function() {
	var targetId = 'app'
	console.log('jquery functional test > #' + targetId + '.offset().top = (' + $('#' + targetId).offset().top + ')')
})
$(document).ready(function() {
	$('.image-link').magnificPopup({type:'image'});
});
*/
</script>

<style lang="scss">
.callout {
	padding: 10px;
	margin: 0;
	border: 1px solid #eee;
	border-left-width: 5px;
	border-radius: 3px;
	h4,
	h5,
	h6 {
		margin-top: 0;
		margin-bottom: 5px;
	}
	p:last-child {
		margin-bottom: 0;
	}
	code {
		border-radius: 3px;
	}
	& + .bs-callout {
		margin-top: -5px;
	}
}
@each $name, $color in (default, #777), (primary, #428bca), (success, #5cb85c), (danger, #d9534f), (warning, #f0ad4e), (info, #5bc0de), (bdc, #29527a) {
	.callout-#{$name} {
		border-left-color: $color;
		h4,
		h5,
		h6 {
			color: $color;
		}
	}
}
</style>
