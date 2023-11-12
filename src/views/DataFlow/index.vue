<script setup></script>

<template>
	<div class="dataflow">
		<div class="des">
			<p>管道/过滤器 体系结构风格</p>
            <p>惯用模式：</p>
            <p>主要包括过滤器和管道两种元素。在这种结构中，构件被称为过滤器，负责对数据进行加工处理。每个过滤器都有一组输入端口和输出端口，从输入端口接收数据，经过内部加工处理之后，传送到输出端口上。数据通过相邻过滤器之间的连接件进行传输，连接件可以看作输入数据流和输出数据流之间的通路，这就是管道。</p>
            <p style="color:black;font-weight:600;">优点： </p>
            <p>简单性。</p>
            <p>支持复用。</p>
            <p>系统具有可扩展性和可进化型。</p>
            <p>系统并发性（每个过滤器可以独立运行，不同子任务可以并行执行，提高效率）。</p>
            <p>便于系统分析。 </p>
            <p style="color:black;font-weight:600;">缺点：</p>
            <p>系统处理工程是批处理方式。 </p>
            <p>不适合用来设计交互式应用系统。</p>
            <p>由于没有通用的数据传输标准，因此每个过滤器都需要解析输入数据和合成数据。</p>
            <p>难以进行错误处理。</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.dataflow{
    .des{
        p{
            padding: 5px;
            color: rgb(69, 68, 68);
            line-height: 30px;
        }
    }
}
</style>
