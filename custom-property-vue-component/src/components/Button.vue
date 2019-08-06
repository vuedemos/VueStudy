<template>
  <div class="button">{{ text }}</div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style scoped>
.button {
  --backgroundColor: #fff;
  --borderColor: #ccc;
  --borderRadius: 5px;
  --fontSize: 16px;
  --color: #333;
  --padding: 5px 10px;

  /* base style */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  color: var(--color);
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
}
</style>
