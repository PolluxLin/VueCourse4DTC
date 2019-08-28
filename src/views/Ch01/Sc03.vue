<template>
	<b-container fluid class='pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>建立專案</h4>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\vue0032.jpg'/>
			</b-col>
			<b-col md='*'>
				<div class='text-left'>
					通常來說, 我們會將專案集中在特定目錄下, 這裡以 C:\Node.js 目錄來存放 Vue 專案群,<br>
					請先建立目錄, 並切換到該目錄.<br>
					然後啟動 Vue 的 GUI, 並用它來建立新專案, 假設專案名稱為 <b>MyVueNo1</b><br>
					請依序點開下列圖片來看如何進行?<br>
					當進行到第六張圖時, 會需要等待一段時間的, 端視您的設備效能如何...
					<div class="callout callout-primary">
						<h6>註:</h6>
						<ul class="mb-0 text-primary">
							<li>不論是以 command line 或 GUI 來開設新專案, 都是以 Vue 提供的樣版來建立的</li>
							<li class='text-danger'>不同版本的 Vue CLI 所提供的樣版會有差異, <b>極有可能不能相容!</b></li>
							<li>Vue GUI 會自動判斷 browser 的預設語系來呈現的對應文字, fall-back 是英文</li>
						</ul>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class='mt-2'>
			<b-col><expandable-image src='\img\vue0033.jpg'/></b-col>
			<b-col><expandable-image src='\img\vue0034.jpg'/></b-col>
			<b-col><expandable-image src='\img\vue0035.jpg'/></b-col>
			<b-col><expandable-image src='\img\vue0036.jpg'/></b-col>
			<b-col><expandable-image src='\img\vue0037.jpg'/></b-col>
			<b-col><expandable-image src='\img\vue0038.jpg'/></b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\vue0039.jpg'/>
			</b-col>
			<b-col md='*'>
				<div class='text-left'>
					當出現左側這個畫面時, 新專案已經建立好了.<br>
					<br>
					儘管 GUI 也可以協助進行接下來的 Plug-in 安裝工作, 但其細部行為模式會跟直接下 command line 有些許差異,<br>
					為了得到所需的效果, 我們先切換到 command line 下來進行:
					<ul>
						<li>開啟 cmd 或 powershell 視窗, 切換到專案目錄 ( C:\Node.js\MyVueNo1 )</li>
						<li>依序輸入下列指令, 如果過程中有提示問題, 請一律輸入 <b class='text-danger'>y</b> (不分大小寫)並按下 enter 鍵
							<ul>
								<li><code class='font-weight-bold'>$ vue add router</code></li>
								<li><code class='font-weight-bold'>$ vue add vuex</code></li>
								<li><code class='font-weight-bold'>$ vue add bootstrap-vue</code></li>
								<li><code class='font-weight-bold'>$ vue add fontawesome</code></li>
								<li><code class='font-weight-bold'>$ npm i --save axios vue-axios</code></li>
							</ul>
						</li>
					</ul>
					<div class="callout callout-primary">
						<h6>註:</h6>
						<ul class="mb-0 text-primary">
							<li>元件安裝過程, 有幾個 plug-in 會自動變更 Vue 專案樣版的內容</li>
						</ul>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class='mt-2'>
			<b-col md='3'><expandable-image src='\img\vue0051.jpg'/></b-col>
			<b-col md='3'><expandable-image src='\img\vue0052.jpg'/></b-col>
			<b-col class='text-left'>
				左側是上述的 plug-in 完畢後, 回到 GUI 並點擊 [<b>插件</b>] 及 [<b>專案依賴</b>] 兩個頁籤的畫面
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'><expandable-image src='\img\vue0082.jpg'/></b-col>
			<b-col class='text-left'>
				要執行專案, 請:
				<ul>
					<li>點擊 GUI 的 [<b>任務</b>] 頁籤</li>
					<li>點擊 [<b>serve</b>] 任務</li>
					<li>點擊 serve 任務框內的 [<b>執行</b>] 鈕</li>
				</ul>
				<div class="callout callout-danger">
					<h6>註:</h6>
					<ul class="mb-0">
						<li>這等同是下 <code class='font-weight-bold'>npm run serve</code> 指令</li>
						<li>會進行專案 compile 作業(但不會優化)並提供 <b>熱更新</b> -- 一旦原始碼變更並儲存時, 會自動 compile 並更新 browser 上的內容</li>
					</ul>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row class='mb-2'>
			<b-col md='3'><expandable-image src='\img\vue0083.jpg'/></b-col>
			<b-col md='3'><expandable-image src='\img\vue0084.jpg'/></b-col>
			<b-col class='text-left'>
				左側是 compile 完成並以 browser 開啟預設網址 <a target='_blank' href='http://localhost:8080/'>http://localhost:8080/</a> 的畫面<br>
				<br>
				到這裡, 我們還沒寫任何一行 code, 但已完成一個新網站的建立了, 賀!
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Sc03',
	created() {
		console.log('created')
	}
}
</script>