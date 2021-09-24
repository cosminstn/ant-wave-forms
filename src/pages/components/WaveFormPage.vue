<template>
    <a-row>
        <a-col :xs="12">
            <p>Wave Form example:</p>

            <highlightjs autodetect :code="serialize(schema)" />
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
            :code="serialize(formData)"
        />
    </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as JSONfn from "json-fn";
export default defineComponent({
    data() {
        return {
            schema: {
                firstName: {
                    type: "text",
                    required: true,
                    label: "First Name",
                    validator: function (value) {
                        return value.length > 10 ? true : "Value too short!";
                    },
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
    methods: {
        serialize(data: Object): String {
            return JSONfn.stringify(data);
        },
        deserialize(string: String): Object {
            return JSONfn.parse(string);
        },
    },
});
</script>
