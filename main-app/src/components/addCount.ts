import { ref } from "vue"
const count = ref(0)
export function useCount() {
    count.value++
    return count
}