<template>
	<b-container fluid class='pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>基本環境安裝</h4>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='4'>
				<expandable-image src='\img\vue0001.jpg'/>
			</b-col>
			<b-col md='*'>
				<div class='text-left'>
					<b>Node.js</b> 安裝請至 <a target='_blank' href='https://nodejs.org/en/'>https://nodejs.org/</a> 下載 <b>LTS</b> (Long Term Support)版本.<br>
					安裝檔預設會安裝 <b>NPM</b> (Node Package Manager, Node.js 套件管理器), 這是必須的元件.<br>
					請使用<b class='text-danger'>預設值</b>來進行安裝就好.<br>
					<br>
					安裝完畢後, 請開啟 cmd 或 powershell 視窗, 輸入以下指令來檢查安裝的版本:
					<ul>
						<li><code>$ node -v</code></li>
						<li><code>$ npm -v</code></li>
					</ul>
					<div class="callout callout-primary">
						<h6>在這裡要特別提一下:</h6>
						<ul class="mb-0 text-primary">
							<li>透過 npm 安裝的元件, 區分為: <b>全域</b> (參數 <b class='text-danger'>-g</b> ) 及 <b>本地</b> 兩個模式:
								<ul>
									<li>全域元件儲存位置為 <code>C:\Users\[UserId]\AppData\Roaming\npm\node_modules</code> 之下</li>
									<li>而本地元件的儲存位置則為下 <code>npm i</code> 指令時, <b class='text-danger'>所在目錄</b>的 <b>node_modules</b> 子目錄下</li>
								</ul>
								這是為了避免不同專案之間, 使用同一元件但不同版本時, 會造成的衝突
							</li>
							<li>Node.js, NPM 以及接下來會用到的 Vue CLI 等等工具,<br>
								都靠 windows 的 <b>PATH</b> 這個環境變數來在 cmd 或 powershell 視窗下運作,<br>
								而這個環境變數可容納的字數有限, 一旦爆掉, 就無法正常在 command line 下執行了!<br>
								所以, 如果前述的安裝版本檢查指令出現錯誤訊息時, 請檢查 PATH 是不是爆掉了?
							</li>
							<li class='text-danger'>並不是 npm 模組倉庫裡所有的套件都能直接用在 Vue.js 專案上, 甚至, 套件之間都可能出現彼此衝突的狀況!</li>
						</ul>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col>
				<div class='text-left'>
					Vue.js 在開發專案時, 必須使用 <b>Vue CLI</b> 來作業, 請以全域模式來安裝, 命令如下:
					<ul>
						<li><code>$ npm i @vue/cli -g</code></li>
					</ul>
					安裝完畢後, 請以下列指令檢查安裝的版本:
					<ul>
						<li><code>$ vue -V</code><br>
							請注意: 是<b>大寫的 V, 這裡列出的版本編號是 Vue CLI 的, 並非 Vue core 的</b>
						</li>
					</ul>
				</div>
			</b-col>
			<b-col><expandable-image src='\img\vue0011.jpg'/></b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row class='mb-2'>
			<b-col md='4'><expandable-image src='\img\vue0023.jpg'/></b-col>
			<b-col md='8'>
				<div class='text-left'>
					Vue.js 除了 command line interface 之外, 也提供了 <b>GUI</b>,  請以下列命令啟動:
					<ul>
						<li><code>$ vue ui</code></li>
					</ul>
					預設的網址是 <a target='_blank' href='http://localhost:8000/'>http://localhost:8000/</a><br>
					上述指令會自動啟動預設 browser 並進入上述網址,<br>
					這個 GUI 在開發時會非常方便, 也十分建議使用, 後續如有機會, 再多加介紹
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Sc02',
	created() {
		console.log('created')
	}
}
</script>