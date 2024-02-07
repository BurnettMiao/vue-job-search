<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  }
}
</script>
