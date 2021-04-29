# Contributors

<div v-for="i in items">
    <h2>{{i.login}}</h2>
    <div class="author">
      <img :src="i.avatar_url" class="contrib-avatar"/>
      <div>
        <code>contributions: {{i.contributions}}</code>
        <br />
        <br />
        <code>quote: <i>"{{quotes[i.login] ? quotes[i.login] : "quote undefined"}}"</i></code>
      </div>
    </div>
</div>

::: footer
Want to be on this list ? [get started](/contributing).
:::

<script>
const axios = require('axios')
export default {
  data () {
      return {
          items: [],
          quotes: {
            "masterkram": "Gallivanting around.", "Daniel-Lizarazo-Fuentes": "I ambush the enemy from the front",
            "Windemuller": "Tis but a scratch"
            },
      }
  },
  beforeMount() {
    axios.get('https://api.github.com/repos/masterkram/bytehub/contributors')
    .then(response => {
       this.$data.items = response.data;
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>