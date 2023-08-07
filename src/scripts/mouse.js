import { onMounted, onUnmounted, ref } from "vue"

export const usePosition = () => {
    const x = ref('0')
    const y = ref('0')

    const update = (evt) => {
        x.value = evt.pageX
        y.value = evt.pageY
    }

    onMounted(() => { window.addEventListener('mousemove', update) })
    onUnmounted(() => { window.removeEventListener('mousemove', update) })

    return {
        x,
        y
    }
}