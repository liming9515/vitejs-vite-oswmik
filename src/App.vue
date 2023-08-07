<script setup>
import { ref } from 'vue';
import { defineAsyncComponent, provide } from 'vue';
import { usePosition } from './scripts/mouse'
import Modal from './components/Modal.vue';

provide('my-name', 'ming.li')

const display = ref(false)

const MyComponent = defineAsyncComponent({
  loader: () =>
    import('./components/MyComponent.vue')
  ,
  delay: 2000
})

const vClick = {
  mounted: (el, binding, vNode, preNode) => {
    console.log(el, binding, vNode, preNode)
  }
}

const { x, y } = usePosition()

</script>

<template>
  <MyComponent />
  <button v-click="'abc'" @click="display = true">Click Me</button>
  <Modal header="这是标题" message="这是内容" v-if="display" @cancel="display=false"></Modal>
  your position {{ x }} - {{ y }}
</template>
