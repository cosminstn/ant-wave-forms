<template>
    <a-row justify="center">
        <a-col v-for="field in Object.keys(schema)">
            <!-- TODO: component :is seems to only work with globally registered components. Have to dig a bit deeper -->
            <component
                :is="getWidgetType(schema[field].type)"
                v-bind="schema[field]"
                v-model="formData[field]"
            />

            <!-- <text-widget v-bind="schema[field]"></text-widget> -->
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const KNOWN_WIDGET_TYPES = ["text", "date"];

export default defineComponent({
    name: "WaveForm",
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    created() {
        // TODO: Check that the schema is fully valid
        for (let field of Object.keys(this.schema)) {
            if (this.schema[field] == null) {
                throw new Error(`Schema for field ${field} cannot be null!`);
            }
            if (this.schema[field].type == null) {
                throw new Error(`Field type not specified for ${field}!`);
            }
            if (
                !KNOWN_WIDGET_TYPES.includes(
                    this.schema[field].type.toLowerCase()
                )
            ) {
                throw new Error(
                    `Unrecognized field type ${this.schema[field].type} for field ${field}`
                );
            }

            // configure form data value
            this.formData[field] = null;
        }
    },
    data() {
        return {
            formData: {},
        };
    },
    methods: {
        getWidgetType(fieldType: String): String {
            return fieldType + "-widget";
        },
    },
});
</script>
