<template>
    <a-date-picker v-model:value="data" :placeholder="label" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DateWidget",
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            data: this.modelValue,
        };
    },
    watch: {
        data(val) {
            this.$emit("update:modelValue", val);
        },
    },
});
</script>
