<template>
    <div :class="inputConfig?.cssClass ?? ''">
        <QInput
            v-if="inputConfig?.inputType === 'text' || inputConfig?.inputType === 'password' || inputConfig?.inputType === 'number' || inputConfig?.inputType === 'textarea' || inputConfig?.inputType === 'file'"
            :label="inputConfig?.label ?? 'NA'"
            :type="inputConfig?.inputType ?? 'text'"
            :rules="inputConfig?.rules ?? []"
            :model-value="modelValue"
            :mask="inputConfig.mask"
            @update:model-value="value = $event"
            :cssClass="inputConfig?.cssClass"
            :ref="inputConfig?.label ?? ''"
            outlined
            dense
            >
            <template
            v-if="inputConfig.icon"
            #prepend
            >
            <QIcon :name="inputConfig.icon" />
            </template>
        </QInput>
        <QSelect
            v-if="inputConfig?.inputType === 'select'"
            :label="inputConfig?.label"
            :options="inputConfig?.options"
            :option-value="inputConfig.selectOptionValueKey"
            :option-label="inputConfig.selectOptionLabelKey"
            :rules="inputConfig.rules"
            :model-value="modelValue"
            @update:model-value="value = $event"
            :cssClass="inputConfig?.cssClass"
            map-options
            emit-value
            outlined
            dense
            >
            <template
            v-if="inputConfig.icon"
            #prepend
            >
            <QIcon :name="inputConfig.icon" />
            </template>
        </QSelect>
        <QCheckbox
            v-if="inputConfig?.inputType === 'checkbox'"
            :label="inputConfig.label"
            :class="inputConfig.cssClass"
            :model-value="modelValue"
            @update:model-value="value = $event"
            :cssClass="inputConfig?.cssClass"
            />
        <QInput
            v-if="inputConfig?.inputType === 'date'"
            dense
            outlined
            :model-value="modelValue"
            @update:model-value="value = $event"
            :label="inputConfig.label ?? ''"
            :rules="inputConfig.rules ?? []"
            :cssClass="inputConfig?.cssClass"
            >
            <template #append>
            <QIcon
                name="event"
                class="cursor-pointer"
                >
                <QPopupProxy
                cover
                transition-show="scale"
                transition-hide="scale"
                >
                <QDate
                    :model-value="modelValue"
                    @update:model-value="value = $event"
                    mask="MM/DD/YYYY"
                    minimal
                    >
                    <div class="row items-center justify-end">
                    <QBtn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                        />
                    </div>
                </QDate>
                </QPopupProxy>
            </QIcon>
            </template>
        </QInput>
    </div>
</template>
<script setup lang="ts">
    import {QInput, QSelect, QIcon, QCheckbox, QBtn, QPopupProxy, QDate} from "quasar";
    import type {GenInputType} from "../utils/types/GenInputType";
    import {ref, watch} from "vue";
    interface Props {
        inputConfig: GenInputType;
        modelValue?: string | number | undefined | null;
    }
    defineProps<Props>()
    const emit = defineEmits(["update:modelValue"])
    const value = ref<string | number | undefined | null>('')
    watch(() => value.value, (val) => {
        emit('update:modelValue', val)
    }, {deep: true})
</script>
    