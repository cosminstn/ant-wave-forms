<template>
    <!-- :value="value" @input="emitInput" -->
    <a-input v-model:value="data" :placeholder="label"></a-input>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TextWidget",
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: null,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
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
