<template>
    <div>
        <h4>步骤二：/tv/p2</h4>
        <!-- 上一页,下一页控制按钮 -->
        <button @click="prevPage">上一步</button>
        <button @click="nextPage">下一步</button>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    name: 'P2',
    components: { },
    // 声明接收steps组件传递的数据
    props: {
        formData: Object
    },
    // 声明事件
    emits: ['prevPage', 'nextPage', 'complete'],

    setup(props, ctx) {
        console.log('步骤二, Steps传递的数据:', props.formData)

        // 当前组件的数据, nextPage事件发出时传递给Steps组件
        const data = ref({
            formData: {
                msg: '我是步骤二'
            },
            index: 1
        })

        /**
         * @function 向steps组件发出nextPage事件，让steps组件控制router跳转到下一页
         */
        const nextPage = () => {
            ctx.emit('nextPage', data)
        }

        /**
         * @function 向steps组件发出prevPage事件，让steps组件控制router跳转到上一页
         */
        const prevPage = () => {
            ctx.emit('prevPage', data)
        }

        return {
            nextPage, prevPage
        }
    }

    
}
</script>

<style scoped>
    div {
        width: 100%;
        height: 100px;
        border-radius: 10px;
        margin-top: 10px;
        box-shadow: 0px 0px 10px 5px #666666;
    }
</style>