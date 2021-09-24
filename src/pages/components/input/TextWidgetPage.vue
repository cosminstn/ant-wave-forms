<template>
    <a-row type="flex" justify="center">
        <a-col :xs="12">
            <p>Basic use case</p>
            <TextWidget v-model="text1" label="Hai noroc! Cf?" />
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "TextWidgetPage",
    data() {
        return {
            text1: null,
        };
    },
});
</script>
