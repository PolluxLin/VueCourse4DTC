<template>
	<b-navbar id="mainMenu" toggleable="md" fixed="top">
		<b-navbar-brand to="/" replace class="d-flex w-50 mr-auto">
			<span>Vue.js 課程</span>
		</b-navbar-brand>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav class="ml-auto">
			<b-navbar-nav>
				<b-nav-item-dropdown text="第一章">
					<b-dropdown-item to="/Ch01/Sc01" replace>前言</b-dropdown-item>
					<b-dropdown-item to="/Ch01/Sc02" replace>基本環境安裝</b-dropdown-item>
					<b-dropdown-item to="/Ch01/Sc03" replace>建立專案</b-dropdown-item>
					<b-dropdown-item to="/Ch01/Sc04" replace>VSCode</b-dropdown-item>
					<b-dropdown-item to="/Ch01/Sc05" replace>同場加映</b-dropdown-item>
					<b-dropdown-item to="/Ch01/Sc06" replace>IIS 開發測試</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'MainMenu',
}
</script>

<style scope>
#mainMenu {
	background-color: rgb(240, 95, 64);
}
#mainMenu .navbar-brand {
	font-size: 1rem;
	color: #fff;
	font-weight: 600;
}
#mainMenu .navbar-nav .nav-link {
	font-size: 1rem;
}
#mainMenu .navbar-nav > li.nav-item > a.nav-link,
#mainMenu .navbar-nav > li.nav-item > a.nav-link:focus {
	color: rgba(255, 255, 255, 0.9);
}
#mainMenu .navbar-nav > li.nav-item > a.nav-link:hover,
#mainMenu .navbar-nav > li.nav-item > a.nav-link:focus:hover {
	color: rgba(255, 255, 255, 1);
	font-weight: 700;
}
#logout {
	white-space: nowrap;
}
#logout > a.nav-link, #logout > a.nav-link:focus {
	color: rgba(0, 0, 255, .9) !important;
}
#logout > a.nav-link:hover, #logout > a.nav-link:focus:hover {
	color: rgba(255, 255, 255, 1) !important;
	font-weight: 700;
}
#logo {
	width: 24px;
	margin-top: -3px;
}
</style>
