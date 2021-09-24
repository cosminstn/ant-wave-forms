<template>
    <a-input :value="value" @input="emitInput"></a-input>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TextWidget",
    props: {
        value: {
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
    data() {},
    methods: {
        emitInput($event) {
            this.$emit("input", $event);
        },
    },
});
</script>
