<template>
        <button class="close" @click="$emit('close')"> </button>
</template>

<script>
export default {
    name: "CloseButton"
}
</script>

<style scoped>

.close {
    width: 32px;
    height: 32px;
    opacity: 0.5;
}


.close:hover {
    opacity: 1;

}
.close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
}
.dark .close:before,.dark .close:after {
   background-color: white;
}
.close:before {
    transform: rotate(45deg);
}
.close:after {
    transform: rotate(-45deg);
}

</style>