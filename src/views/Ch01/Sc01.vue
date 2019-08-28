<template>
	<b-container fluid class='text-left pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>前言</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b>Vue.js</b> 是架構在 <b>Node.js</b> 上的 <b>JavaScript</b> Framework. 想要有效率地用 Vue 來開發, 前提條件是必須熟捻以下的項目:
				<ul>
					<li><b>HTML</b> (5)</li>
					<li><b>CSS</b> (3), 如果可以, 對其衍生的 <b>SASS</b> 和 <b>SCSS</b> 也應該盡量有所瞭解和掌握</li>
					<li><b>JavaScript</b>, 主要標準是 ECMAScript 6 (2015), 還在持續更新中</li>
					<li><b>DOM</b>, 雖然大多數的狀況下並不會直接操作 DOM, 但相當的認知是絕對有幫助的</li>
					<li><b>Bootstrap</b>, 不論是否要開發 RWD, 網頁上的視覺元素、UI/UX用它來做會更有效率和具備共通性</li>
					<li><b>AJAX</b>、<b>RESTful API</b> 和 <b>JSON</b>, 這是最主要的資料處理要素了</li>
				</ul>
				鑑於大家手邊都有諸多工作在忙, 如果以學校上課的方式來進行 Vue 的課程, 是種極沒有效率的方式.<br>
				所以, 會先以: <b>環境架設</b>, 一路到<b>建立新專案</b> 為起手式, 為大家介紹 Vue, 讓大家可以順利地在自己的環境裡, 親手去研究和嘗試.<br>
				之後, 就請各位自行研讀學習資源, 再抽時間以每次最多一小時為限, 針對大家的疑問來舉辦小型的研討會, 一起深入探討.<br>
				<br>
				<div class="callout callout-primary">
					<h6>註:</h6>
					<ul class="mb-0">
						<li>本課程預設環境為 <b>Windows 10 x64</b></li>
						<li>Front-End framework 改版頻率很高, 請務必注意各元件使用的版本, 以今天(2019/08/27)為基準的話:
							<ol>
								<li><b>Node.js</b> = <b class='text-danger'>10.16.3</b></li>
								<li><b>npm</b> = <b class='text-danger'>6.9.0</b></li>
								<li><b>Vue CLI</b> = <b class='text-danger'>3.11.0</b></li>
							</ol>
						</li>
					</ul>
				</div>
				<br>
				依據 技術長的 Best Practice, 請鎖定以下項目來自修:
				<ul>
					<li><b>Vue.js</b> (Core 2.x版)</li>
					<li><b>Vue CLI</b> (CLI 3.x版, <b>C</b>ommand-<b>L</b>ine <b>I</b>nterface 和 Core 的版本編號是各自獨立的)</li>
					<li><b>Vue Router</b> (Vue 官方 Router 元件)</li>
					<li><b>Vuex</b> (Vue 官方 State Management 元件)</li>
					<li><b>Bootstrap for Vue</b> (專為 Vue.js 打包的 Bootstrap 4.x 元件, 無需 jQuery 即可運作)</li>
					<li><b>Axios</b> (Promise based HTTP client for the browser and node.js)</li>
				</ul>
			</b-col>
		</b-row>
		<b-row class='mt-3'>
			<b-col>
				<h6 class='font-weight-bold'>學習資源</h6>
			</b-col>
		</b-row>
		<b-row class='mb-2'>
			<b-col>
				<ul>
					<li>基礎閱讀．各家解讀
						<ul>
							<li><a target='_blank' href='https://ithelp.ithome.com.tw/users/20111956/ironman/1784'>網頁設計靠 Vue.js 轉前端 系列文章 (2018/10/16)</a></li>
							<li><a target='_blank' href='https://ithelp.ithome.com.tw/users/20107789/ironman/1710'>勇者鬥Vue龍 系列文章 (2018/10/16)</a></li>
							<li><a target='_blank' href='https://ithelp.ithome.com.tw/users/20107702/ironman/1904'>菜菜菜的 Vue 30天 系列文章 (2018/10/16)</a></li>
							<li><a target='_blank' href='https://ithelp.ithome.com.tw/users/20107107/ironman/1243'>用範例理解 Vue.js 系列文章 (2017/12/11)</a></li>
							<li><a target='_blank' href='https://dotblogs.com.tw/wasichris/series/1?qq=Vue'>跟著 Vue 闖蕩前端世界 系列文章 (2017/03/02)</a></li>
							<li><a target='_blank' href='https://www.slideshare.net/kurotanshi/vuejs-62131923'>第一次用 Vue.js 就愛上 [改] (2016/05/18)</a> (注意:這是 Vue 版本較舊的教學!)</li>
						</ul>
					</li>
					<li>基礎閱讀．官方文件
						<ul>
							<li><a target='_blank' href='https://vuejs.org/v2/guide/index.html'>Vue.js</a></li>
							<li><a target='_blank' href='https://cli.vuejs.org/guide/'>Vue CLI</a></li>
							<li><a target='_blank' href='https://router.vuejs.org/'>Vue Router</a></li>
							<li><a target='_blank' href='https://vuex.vuejs.org/'>Vuex</a></li>
							<li><a target='_blank' href='https://bootstrap-vue.js.org/docs/'>Bootstrap for Vue</a></li>
							<li><a target='_blank' href='https://vuejs.org/v2/cookbook/index.html#The-Cookbook-vs-the-Guide'>Vue.js Cookbook</a></li>
							<li><a target='_blank' href='https://github.com/axios/axios'>Axios</a></li>
							<li><a target='_blank' href='https://github.com/vuejs/vue-devtools'>Vue Devtools</a></li>
						</ul>
					</li>
					<li>進階探討
						<ul>
							<li><a target='_blank' href='https://github.com/ChaoLiou/Blog/issues'>ChaoLiou/Blog</a> (請參考標題有 Vue.js 字樣的 issue)</li>
							<li><a target='_blank' href='https://www.youtube.com/watch?v=yo1zTr2b2FY'>[ Vue.js 手牽手，一起嗑光全家桶 ] 主廚的話 - 餐點簡介與相關說明</a> (影音)</li>
							<li><a target='_blank' href='https://github.com/vuejs-tips'>Vue.js Tips</a> (英文)</li>
						</ul>
					</li>
					<li>相關領域
						<ul>
							<li><a target='_blank' href='https://ithelp.ithome.com.tw/users/20107433/ironman/1356'>如何成為工程師? (從工地到前端工程師) 系列文章 (2017/12/04)</a></li>
							<!--
							<li><a target='_blank' href=''></a></li>
							-->
						</ul>
					</li>
					<li>Cheat Sheets
						<ul>
							<li><a target='_blank' href='/pdf/css-cheat-sheet.pdf'>CSS Cheat Sheet</a></li>
							<li><a target='_blank' href='/pdf/es6cheatsheet.pdf'>ECMAScript 6 Cheat Sheet</a></li>
							<li><a target='_blank' href='/pdf/Vue-Essentials-Cheat-Sheet.pdf'>Vue Essentials Cheat Sheet (by VueMastery)</a></li>
							<li><a target='_blank' href='https://marozed.ma/vue-cheatsheet/'>Vue Cheat Sheet (by Marozed.ma)</a></li>
							<li><a target='_blank' href='https://github.com/lysla/cheatsheet-vuejs'>Vue Cheat Sheet (by Lysla)</a></li>
							<li><a target='_blank' href='https://flaviocopes.com/vue-cheat-sheet/'>Vue Cheat Sheet (by Flavio Copes)</a></li>
							<li><a target='_blank' href='https://devhints.io/vue'>Vue Cheat Sheet (by DevHints.io)</a></li>
							<li><a target='_blank' href='https://vuejs-tips.github.io/vuex-cheatsheet/'>VueX Cheat Sheet</a></li>
						</ul>
					</li>
				</ul>
			</b-col>
		</b-row>
	</b-container>
</template>