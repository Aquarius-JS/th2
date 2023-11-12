<script setup>
	import { ref } from "vue";
    import { UploadFilled } from '@element-plus/icons-vue'

	let state = ref("");
    let loading = ref(false);
    let result = ref("");
    function handler(){
        loading.value = true;
        result.value = "";
        setTimeout(()=>{
            loading.value = false;
            result.value = [
                "a b c",
                "a test this is",
                "b c a",
                "c a b",
                "is student zhang pei",
                "is a test this",
                "pei is student zhang",
                "sudent zhang pei is",
                "test this is a",
                "this is a test",
                "zhang pei is student",
            ]
        },3000)
    }

	const options = [
		{
			value: 0,
			label: "主程序-子程序",
			disabled: false,
		},
		{
			value: 1,
			label: "面向对象",
			disabled: false,
		},
		{
			value: 2,
			label: "事件系统",
			disabled: false,
		},
		{
			value: 3,
			label: "管道-过滤器",
			disabled: false,
		},
	];
</script>

<template>
	<div class="home">
		<div class="left">
			<el-select v-model="state" placeholder="请选择一种风格">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
					:disabled="item.disabled"
				/>
			</el-select>
			<el-upload
				class="upload-demo"
				drag
				action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
				multiple
			>
				<el-icon class="el-icon--upload"><upload-filled /></el-icon>
				<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
				<template #tip>
					<div class="el-upload__tip">请选择txt文件，大小不超过100MB</div>
				</template>
			</el-upload>
            <el-button type="primary" @click="handler">检测</el-button>
		</div>
		<div class="right">
            <p class="tip">结果:</p>
            <div class="result" v-loading="loading">
                <p v-for="item in result" :key="item">{{ item }}</p>
            </div>
        </div>
	</div>
</template>

<style scoped lang="scss">
.home{
    display: flex;
    flex-direction: row;
    gap:50px;
    .left{
        flex: 0 0 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 350px;
    }
    .right{
        padding: 20px;
        .tip{
            color: gray;
            font-weight: 600;
            font-size: 18px;
        }
        .result{
            height: 300px;
            width: 400px;
            padding: 20px;
            p{
                height: 30px;
            }
        }
    }
}
</style>
