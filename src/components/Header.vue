<template>
    <header>
        <div>
            Home
            About
        </div>
    </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },

}
</script>