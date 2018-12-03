<template>
  <div class="hello">

    <p>
      Enter Email
    </p>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>

    <h1>{{ msg }}</h1>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
