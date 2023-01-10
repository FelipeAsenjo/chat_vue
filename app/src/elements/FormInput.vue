<template>
    <input :message="message"/>
    {{ message }}
</template>

<script>
export default {
   data() {
        return {
            message: ''
        }
   } 
}
</script>
