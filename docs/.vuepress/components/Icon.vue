<template>
    <Icon :icon="name" :style="`font-size: ${size}px;`" />
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    props: {
        name: String,
        size: {
            type: String,
            default: '24',
        },
    },
    components: {
        Icon
    }
}
</script>