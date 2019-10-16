<template>
	<b-container fluid class='pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>以 IIS 做為開發測試環境</h4>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col>
				<div class='text-left w-100'>
					微軟的 IIS 是 Windows PC 上最容易取得的網站服務(http service), 在作業系統安裝好時就會預載其安裝檔, 但不會被架設起來.<br>
					我們的工作常常會需要多個網站在本機上供我們開發測試, Windows 10 上的 IIS 是容許同時存在多個網站的, 也可以使用 SSL 憑證來為網站啟動 https protocal.<br>
					但是, 因為只是本機上的開發測試, 大概不會去付費註冊個 internet domain 來用, 所以就有些設定得做.<br>
					<br>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\IIS0001.jpg'/>
			</b-col>
			<b-col>
				<div class='text-left w-100'>
					如果你的 PC 還沒把 IIS 架設起來, 以下是安裝的步驟:
					<ul>
						<li>開始 > Windows 系統 > 控制台 > 程式集 > 開啟或關閉 Windows 功能 > 看圖勾選要安裝的東東
							<div class="callout callout-danger">
								<h6>註:</h6>
								<ul class="mb-0 text-danger">
									<li>在( 一般 HTTP 功能 )項下的[ <span class='text-primary font-weight-bold'>WebDAV 發行</span> ] 是<b>絕對不可以裝</b>, 否則日後跑後台的 RESTful API 時會出麻煩!</li>
								</ul>
							</div>
						</li>
						<li>安裝 <span class='font-weight-bold'>Web Platform Installer</span>
							<div class="callout callout-primary">
								這是 IIS 擴充功能官方安裝機制, 也是必須項目
								<ul class="mb-0 text-primary">
									<li>請至 <a target='_blank' href='https://www.microsoft.com/web/downloads/platform.aspx'>官方網頁</a> 點擊[ <span class='font-weight-bold'>Install this extension</span>]鈕 </li>
								</ul>
							</div>
						</li>
						<li>安裝 <span class='font-weight-bold'>IIS URL Rewrite Module</span>
							<div class="callout callout-primary">
								這是在 IIS 下運作 routing 或 URL 轉址的模組, 是 Vue.js 專案的必要項目
								<ul class="mb-0 text-primary">
									<li>請至 <a target='_blank' href='https://www.iis.net/downloads/microsoft/url-rewrite'>官方網頁</a> 點擊[ <span class='font-weight-bold'>Install this extension</span>]鈕 </li>
									<li>如果, 下載或安裝時遇到困難, 請來找我要安裝檔...</li>
								</ul>
							</div>
						</li>
						<li>(<span class='text-info'>非必要性的</span>) 安裝 <span class='font-weight-bold'>Microsoft UrlScan Filter</span>
							<div class="callout callout-info">
								這是在 IIS 下的安全性模組, <b>-- 如果你沒把握使用它, 就先別安裝...</b>
								<ul class="mb-0 text-info">
									<li>很可惜, 目前官方網站上找不到下載點, 也沒辦法用 Web Platform Installer 來安裝, 請來找我要安裝檔...</li>
									<li>安裝完成後, <a download href='/downloads/UrlScan.ini'>請下載我預製的 ini 檔</a> 並以<b>系統管理員身份</b>複製(覆蓋)到[ <b>C:\Windows\System32\inetsrv\urlscan\</b> ]目錄下</li>
									<li>我預製的 ini 檔已先開放必要的 RESTful API Verb. 及相關安全項目來方便開發測試了</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'><b-col><hr></b-col></b-row>
		<b-row>
			<b-col>
				<div class='text-left w-100'>
					要讓 IIS 在本機上能同時運作多個網站的關鍵就是: <b>為每個網站設定[ <span class='text-danger'>主機名稱</span> ]</b>
					<ul>
						<li>先規劃並列出你要開設的網站有那些?
							<div class="callout callout-primary">
								以我自己的機器來說, 我要這些:
								<ul class="mb-0 text-primary">
									<li>MNDsite - 陸軍官網前台</li>
									<li>MNDdesk - 陸軍官網後台</li>
									<li>ARI - 空審/空轉簡介網站</li>
									<li>PSP - 2019年總統盃黑客松競賽後台網站</li>
									<li>其他還有像是 MNDsum, WCEnc, WCFTest, 15today, armybas, gitserver 這幾個各有目的的測試網站</li>
								</ul>
							</div>
						</li>
						<li>以<b>系統管理員身份</b>執行 <b>記事本</b> 來開啟[ <b>C:\Windows\System32\drivers\etc\hosts</b> ], 並於檔尾加入:
							<div class='border border-warning bg-dark pl-2'>
								<pre class='mb-0'>
									<code class='font-weight-bold text-white'>
127.0.0.1   MNDdesk
127.0.0.1   MNDsite
127.0.0.1   MNDsum
127.0.0.1   PSP
127.0.0.1   ARI
127.0.0.1   WCEnc
127.0.0.1   WCFTest
127.0.0.1   15today
127.0.0.1   armybas
127.0.0.1   gitServer
									</code>
								</pre>
							</div>
							這些都是指向本機( <b>127.0.0.1</b> 或 <b>localhost</b> )的主機名稱, 搭配 IIS 網站的設定, 就可以用像是 http://mndDesk/, http://WCEnc/ 之類的網址連到測試網站了,<br>
							即: 同一個 IP address 但用名稱來對應指向特定網站<br>
							這個檔案其實就是 Windows 下的本機 DNS entry
						</li>
					</ul>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'><b-col><hr></b-col></b-row>
		<b-row>
			<b-col>
				<div class='text-left w-100'>
					接下來要處理[ <b class='text-danger'>SSL 憑證</b> ]了, 這是讓你的網站可以用[ <b>https://</b> ]叫用的關鍵, 但不論是花錢或免費的 SSL 憑證都需要實體的 internet domain name 才能 issue, 我們的本機當然沒有...<br>
					所以, 我們需要使用[ <b>自我簽章的加密憑證</b> ]工具 -- <a target='_blank' href='https://github.com/FiloSottile/mkcert'>MKCERT</a>
					<ul>
						<li>安裝 <b>chocolatey</b>
							<div class="callout callout-info">
								這是 Windows 下的<b>軟體安裝管理套件</b>, 功能強大又好用, 有空自己研究一下, 這裡先不多做介紹.<br>
								安裝的方式是:
								<ul class="mb-0 text-info">
									<li>以[ <b>系統管理員身份</b> ]執行 <b>PowerShell</b></li>
									<li>輸入或複製貼上以下指令
										<div class='border border-warning bg-dark pl-2'>
											<pre class='mb-0'>
												<code class='font-weight-bold text-white'>
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))												</code>
											</pre>
										</div>
									</li>
									<li>用 <b class='text-danger'>choco /?</b> 指令確認是否安裝成功?</li>
								</ul>
							</div>
						</li>
						<li>以 <b class='text-danger'>choco install mkcert</b> 指令安裝 MKCERT</li>
						<li>以 <b class='text-danger'>mkcert -help</b> 指令確認是否安裝成功?</li>
						<li>以 <b class='text-danger'>mkcert -install</b> 指令建立 local CA 儲存區</li>
						<li>關閉 PowerShell 視窗, 並以[ <b>系統管理員身份</b> ]執行 <b>CMD</b></li>
						<li>輸入以下指令來建立並切換到 MKCERT 憑證檔案的專屬目錄:<br>
							<b class='text-primary'>MD C:\MKCertKeys</b><br>
							<b class='text-primary'>CD C:\MKCertKeys</b>
						</li>
						<li>輸入以下指令來建立前述網站群所需的憑證檔案<br>
							<b class='text-primary'><b class='text-dark mr-1'>mkcert</b> <b class='text-danger'>-pkcs12</b> MNDsite MNDdesk PSP ARI WCEnc WCFTest 15today armybas gitserver localhost 127.0.0.1 ::1</b>
							<div class="callout callout-info">
								其中:
								<ul class="mb-0 text-info">
									<li>[ <b>-pkcs12</b> ]是指要建立 <b>PKCS#12 (PFX)</b> 格式的憑證檔(副檔名為 <b>.p12</b>), 等一下才能轉換成給 IIS 專用的 PFX 檔</li>
									<li>後面那一大串就是[ <span class='text-danger'>主機名稱</span> ]了, 必須包含 localhost, 127.0.0.1, ::1 這三個預設本機別名</li>
									<li>第一個主機名稱就會是憑證檔的主要檔名, 以上述的命令就會產生 <b>MNDsite+11.p12</b> 這個檔案, <b>+11</b> 意即: MNDsite 的後面還跟了 11 個主機名稱</li>
								</ul>
							</div>
						</li>
						<li>以指令 <b class='text-primary'>dir</b> 來檢查一下目標檔案產生了沒?</li>
						<li>以指令 <b class='text-primary'>COPY /y "MNDsite+11.p12" "MNDsite+11.pfx"</b> 來複製成 IIS 專用的 PFX 檔</li>
					</ul>
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'><b-col><hr></b-col></b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\IIS0002.jpg'/>
			</b-col>
			<b-col>
				<div class='text-left w-100'>
					接下來是啟動 <b>Internet Information Services (IIS) 管理員</b> 來匯入憑證
					<ul>
						<li>開始 > Windows 系統管理工具 > Internet Information Services (IIS) 管理員<br>
							<span class='text-success'>注意: 別點到[ Internet Information Services (IIS) <b class='text-danger'>6.0</b> 管理員 ], 那是舊版 IIS 的管理界面</span>
						</li>
						<li>點擊兩下[ <b class='text-danger'>伺服器憑證</b> ], 會出現如左圖的畫面</li>
						<li>點擊畫面右側的( 動作 )項下的[ <b class='text-danger'>匯入...</b> ], 會出現如右圖的畫面</li>
						<li>選擇 <b>C:\MKCertKeys\MNDsite+11.pfx</b> 這個剛才做出來的憑證檔案</li>
						<li>密碼請輸入 <b class='text-danger'>changeit</b></li>
						<li>點擊[ 確認 ]鈕, 完成匯入作業</li>
					</ul>
				</div>
			</b-col>
			<b-col md='2'>
				<expandable-image src='\img\IIS0003.jpg'/>
			</b-col>
		</b-row>
		<b-row class='my-2'><b-col><hr></b-col></b-row>
		<b-row>
			<b-col>
				<div class='text-left w-100'>
					接著, 我們以新增 WCEnc 這網站的方式來介紹<b>如何繫結憑證?</b>
					<ul>
						<li>先建立日後網站要發佈的實體目錄, 我個人是放在 <b>C:AppData\WebSites\WCEnc</b> 下</li>
						<li>啟動 <b>Internet Information Services (IIS) 管理員</b></li>
						<li>應用程式集區 (右鍵 menu > <b>新增應用程式集區</b>)</li>
						<li>名稱輸入 <b>WCEnc</b> 然後點[ 確認 ]鈕</li>
						<li>站台 (右鍵 menu > <b>新增網站</b>)</li>
						<li>站台名稱輸入 <b>WCEnc</b></li>
						<li>實體路徑選擇 <b>C:AppData\WebSites\WCEnc</b></li>
						<li>繫結 > 類型 > <b class='text-danger'>https</b></li>
						<li>主機名稱輸入 <b>WCEnc</b></li>
						<li>SSL憑證選擇 <b>MNDsite</b> 然後點[ 確定 ]鈕</li>
						<li>這時候會出現一個警告對話框, 先不必理會, 點[ 確定 ]鈕</li>
					</ul>
					以上步驟請參考下面的幾個截圖
				</div>
			</b-col>
		</b-row>
		<b-row class='mt-2'>
			<b-col md='2'><expandable-image src='\img\IIS0004.jpg'/></b-col>
			<b-col md='2'><expandable-image src='\img\IIS0005.jpg'/></b-col>
			<b-col md='2'><expandable-image src='\img\IIS0006.jpg'/></b-col>
			<b-col md='2'><expandable-image src='\img\IIS0007.jpg'/></b-col>
			<b-col md='2'><expandable-image src='\img\IIS0008.jpg'/></b-col>
		</b-row>
		<b-row class='mt-2'>
			<b-col>
				<div class='text-left w-100'>
					等你把網站發佈到實體目錄之後, 就可以直接以 <b><span class='text-danger'>https</span>//wcenc</b> 來瀏覽了
				</div>
			</b-col>
		</b-row>
		<b-row class='my-2'><b-col><hr></b-col></b-row>
		<b-row>
			<b-col>
				<div class='text-left w-100'>
					<h4>結語</h4>
					以上, 我們介紹了如何架設安裝 IIS 做為多個專案網站的載體平台, 也介紹了自我簽章的 SSL 憑證用法.<br>
					到這裡, 就完成了以 IIS 做為開發測試環境的基礎設定, 日後我們再時間聊一聊如何把 .NET C# back-end 和 Vue.js front-end 放到同一個網站裡運作.
				</div>
			</b-col>
		</b-row>
		<b-row class='mt-3 mb-4'><b-col><hr></b-col></b-row>
	</b-container>
</template>