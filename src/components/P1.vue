<template>
    <div>
        <h4>步骤一：/tv/p1</h4>
        <!-- 下一页控制按钮 -->
    <button @click="nextPage">下一步</button>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    name: 'P1',
    components: { },
    // 声明接收steps组件传递的数据
    props: {
        formData: Object
    },
    // 声明事件
    emits: ['prevPage', 'nextPage', 'complete'],

    setup(props, ctx) {
        console.log('步骤一, Steps传递的数据:', props.formData)

        // 当前组件的数据, nextPage事件发出时传递给Steps组件
        const data = ref({
            formData: {
                msg: '我是步骤一'
            },
            index: 0
        })

        /**
         * @function 向steps组件发出nextPage事件，让steps组件控制router跳转到下一页
         */
        const nextPage = () => {
            ctx.emit('nextPage', data)
        }

        return {
            nextPage
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