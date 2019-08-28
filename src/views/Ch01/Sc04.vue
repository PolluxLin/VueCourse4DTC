<template>
	<b-container fluid class='pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>VSCode</h4>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\vue0061.jpg'/>
			</b-col>
			<b-col>
				<div class='text-left w-100'>
					<b>VSCode</b> - Microsoft Visual Studio Code 是免費且開源的程式碼編輯器, 也是目前最受歡迎的編輯器之一.<br>
					在 Vue.js 專案開發上非常地便利且有效率, 所以推薦使用, 下載網址為 <a target='_blank' href='https://code.visualstudio.com/'>https://code.visualstudio.com/</a><br>
					<br>
					<b-container fluid>
						<b-row no-gutters>
							<b-col md='2'>
								<expandable-image src='\img\vue0065.jpg' class='inlinImage'/>
							</b-col>
							<b-col>
								<div class="callout callout-primary">
									<h6>註:</h6>
									<ul class="mb-0 text-primary">
										<li>為了完全發揮 VSCode 的便利性, 請用左側小圖的選項來安裝</li>
										<li>因為也是用了 <b class='text-danger'>PATH</b> 這個環境變數, 所以還是要注意有沒有爆掉?<br>
											檢查的方式很簡單:
											<ul>
												<li>開啟 cmd 或 powershell 視窗</li>
												<li>切換到專案所在的目錄</li>
												<li>輸入以下的命令:<br>
													<code class='font-weight-bold'>$ code .</code>
												</li>
												<li>看看 VSCode 是否啟動且載入了專案?</li>
											</ul>
										</li>
									</ul>
								</div>
							</b-col>
						</b-row>
					</b-container>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\vue0067.jpg'/>
			</b-col>
			<b-col>
				<div class='text-left w-100'>
					VSCode 之所以強大且受歡迎的原因之一是: 有數量眾多且非常豐富的擴充元件(Extensions).<br>
					一如左側畫面截圖所示, 點擊視窗左緣的 Extensions 圖示(icon)就可以管理這些擴充元件了.<br>
					<br>
					<div class="callout callout-danger">
						<h6>為了便利 Vue.js 專案的開發, 強烈建議安裝以下的 extension:</h6>
						<ul class="mb-0 text-danger">
							<li>Vetur</li>
							<li>npm</li>
							<li>npm Intellisense</li>
							<li>ESLint</li>
							<li>vscode-icons</li>
							<li>Prettier - Code formatter</li>
							<li>Debug for Chrome</li>
							<li>Debug for Firefox <span class='text-primary'>(如果有要在 Firefox 上偵錯的話)</span></li>
							<li>GitLens</li>
							<li>TabNine</li>
						</ul>
						安裝的方式是如上述以點擊 icon 的方式啟動 extension 管理器, 並在 [Search Extensions in Marketplase] 方塊裡輸入擴充元件的英文名稱,<br>
						管理器會自動上網搜尋並列示在清單裡, 給你點擊安裝.<br>
						<br>
						不習慣英文界面? 沒問題, 只要在 extension 管理器搜尋欄內輸入 <span class='text-primary font-weight-bold'>chinese</span> 字樣,<br>
						就有專屬的繁體中文語言套件可以安裝使用了.<br>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row class='mb-2'>
			<b-col md='3'><expandable-image src='\img\vue0070.jpg'/></b-col>
			<b-col md='3'><expandable-image src='\img\vue0071.jpg'/></b-col>
			<b-col>
				<div class='text-left w-100'>
					VSCode 有 <span class='text-primary font-weight-bold'>Debug Console (偵錯主控台)</span>, 如左側兩個畫面截圖所示.<br>
					其中有 <span class='text-primary font-weight-bold'>Terminal (終端機)</span> 頁籤, 可以直接下 powershell 指令, 也能同時開啟多個終端機,<br>
					便利我們在不離開編輯器視窗下, 執行各式各樣的工作.
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Sc04',
	created() {
		console.log('created')
	}
}
</script>

<style scope>
.inlinImage { width: 200px }
</style>
