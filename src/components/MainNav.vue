<template>
  <header class="w-full text-sm">
    <div class="fix top-0 left-0 w-full h-16 ba-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="#" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto h-full flex items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign in" type="primary" @click="loginUser" />
        </div>
      </div>

      <TheSubnav v-if="isLoggedIn" />
      <!-- 也可以這樣寫 <the-subnav /> -->
    </div>
  </header>
</template>

// vue Options API 寫法
<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import TheSubnav from '@/components/TheSubnav.vue'

export default {
  name: 'MainNav',
  components: { ActionButton, ProfileImage, TheSubnav },
  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>
