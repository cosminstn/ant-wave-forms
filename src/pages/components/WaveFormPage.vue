<template>
    <a-row>
        <a-col :xs="12">
            <p>Wave Form example:</p>

            <highlightjs autodetect :code="JSON.stringify(schema)" />
        </a-col>
    </a-row>
    <a-row :gutter="12">
        <a-col :xs="12">
            <WaveForm :schema="schema" v-model="formData" />
        </a-col>
    </a-row>

    <a-row>
        <highlightjs
            v-if="formData != null"
            autodetect
            :code="JSON.stringify(formData)"
        />
    </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            schema: {
                firstName: {
                    type: "text",
                    required: true,
                    label: "First Name",
                },
                lastName: {
                    type: "text",
                    required: true,
                    label: "Last Name",
                },
                birthDate: {
                    type: "date",
                    required: false,
                    label: "Birth Date",
                },
            },
            formData: {},
        };
    },
});
</script>
