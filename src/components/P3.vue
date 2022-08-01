<template>
    <div>
        <h4>步骤三：/tv/p3</h4>
        <!-- 上一页,下一页控制按钮 -->
        <button @click="prevPage">上一步</button>
        <button @click="complete">完成/确定</button>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    name: 'P3',
    components: { },
    // 声明接收steps组件传递的数据
    props: {
        formData: Object
    },
    // 声明事件
    emits: ['prevPage', 'nextPage', 'complete'],

    setup(props, ctx) {
        console.log('步骤三, Steps传递的数据:', props.formData)

        // 当前组件的数据, nextPage事件发出时传递给Steps组件
        const data = ref({
            formData: {
                msg: '我是步骤三'
            },
            index: 2
        })

        /**
         * @function 向steps组件发出prevPage事件，让steps组件控制router跳转到下一页
         */
        const prevPage = () => {
            ctx.emit('prevPage', data)
        }

        /**
         * @function 向steps组件发出complete事件，告知steps组件步骤完成
         */
        const complete = () => {
            ctx.emit('complete', data)
        }

        return {
            prevPage, complete
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