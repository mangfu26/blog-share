<template>
    <h3>PrimeVue Steps 组件测试视图</h3>
    <!-- 
        sreps组件本身 
        :model="stepsItems" 绑定步骤信息，每个步骤项为一个对象，指定步骤名称和要跳转的子路由地址
        :readonly="true" 只读步骤，步骤条不可点击，如果为false，则可以点击相应的步骤项跳转到的子路由
    -->
    <Steps :model="stepsItems" :readonly="true" />
    <!-- 
        嵌套路由渲染区, 用于渲染步骤组件
        :formData="formObject" 向子路由传递数据。可选，一般用于给子路由的组件传递初始值，如果不需要可以忽略
        @prevPage="prevPage($event)" 监听子路由prevPage事件, 用于跳转到上一页(上一步)
        @nextPage="nextPage($event)" 监听子路由nextPage事件, 用于跳转到下一页(下一步)
        @complete="complete" 监听子路由complete事件，该事件触发时表示步骤完成
    -->
    <router-view 
        v-slot="{ Component }" 
        :formData="formObject" 
        @prevPage="prevPage($event)" 
        @nextPage="nextPage($event)"
        @complete="complete($event)"
    >
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script>
import { ref } from 'vue'
// 导入router, 用于控制子路由
import { useRouter } from 'vue-router'
// 导入 steps 组件
import Steps from 'primevue/steps'

export default {
    name: 'TestView',
    components: { Steps },
    setup() {
        // 路由实例, 控制子由跳转
        const router = useRouter()
        // 步骤条信息
        const stepsItems = ref([
            { label: '步骤1', to: '/tv/p1' },
            { label: '步骤2', to: '/tv/p2' },
            { label: '步骤3', to: '/tv/p3' },
        ])
        // 数据
        const formObject = ref({
            msg: 'Steps数据'
        })

        /**
         * @function 子路由事件处理函数, 跳转到下一页(下一个步骤)
         * @param {*} data 子路由组件传递的数据
         */
        const nextPage = (data) => {
            // 这里进行子路由组件数据的处理
            // 这里为了演示只是向控制台打印传递的数据
            console.info(`Steps: ${stepsItems.value[data.value.index].label}传递的数据`, data.value)
            // 跳转到下一个步骤, 下一个步骤的路由信息由stepsItems定义
            router.push(stepsItems.value[data.value.index + 1].to);
        }

        /**
         * @function 子路由事件处理函数, 跳转到上一页(上一个步骤)
         * @param {*} index 子路由组件的下标
         */
        const prevPage = (data) => {
            router.push(stepsItems.value[data.value.index - 1].to);
        };

        /**
         * @function 子路由事件处理函数, 步骤完成
         */
        const complete = (data) => {
            // 这里做步骤完成后的操作, 这里为了演示只是进行了简单的提示,和打印控制台
            console.info(`Steps: ${stepsItems.value[data.value.index].label}传递的数据`, data.value)
            alert('步骤完成')
        };

        return {
            stepsItems, formObject,
            nextPage, prevPage, complete
        }
    }
}
</script>