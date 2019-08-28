<template>
	<b-container fluid class='pt-3'>
		<b-row class='mb-2'>
			<b-col class='text-center'>
				<h4 class='font-weight-bold'>同場加映</h4>
			</b-col>
		</b-row>
		<b-row class='my-2'>
			<b-col><hr></b-col>
		</b-row>
		<b-row>
			<b-col md='3'>
				<expandable-image src='\img\Cmder01.jpg'/>
			</b-col>
			<b-col>
				<div class='text-left w-100'>
					<b>Cmder</b> 是一套免費的終端機模擬器, 支援 cmd, powershell, bash, ... 等等, 也是各家高手愛用的工具<br>
					下載網址為 <a target='_blank' href='https://cmder.net/'>https://cmder.net/</a>, 請點擊 <span class='text-primary font-weight-bold'>Download Mini</span> 鈕下載並解壓縮到您想存放的位罝.<br>
					<br>
					是的, Cmder 是所謂的 <span class='text-success font-weight-bold'>綠色軟體</span> , 不必安裝就可以直接使用了,<br>
					可以多視窗開啟, 也可以在同一視窗內以多頁籤方式開啟各式終端機或 command line 環境.<br>
					<br>
					<expandable-image src='\img\Cmder03.jpg' class='inlinImage'/>
					<br>
					好東東, 不妨試用看看.<br>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Sc05',
	created() {
		console.log('created')
	}
}
</script>

<style scope>
.inlinImage { width: 200px }
</style>
