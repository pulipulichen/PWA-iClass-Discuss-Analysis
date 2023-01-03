import $ from 'jquery'
import './jQCloud/jqcloud.webpack.js'

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.config.resultRows' () {
      this.setJQCloud()
    }
  },
  // computed: {
    
  // },
  // mounted() {
    
  // },
  methods: {
    setJQCloud () {

      // console.log(this.resultRows)
      // $(this.$refs.jQCloud).jQCloud(this.resultRows);
      /*
      var words = [
        {text: "Lorem", weight: 13},
        {text: "Ipsum", weight: 10.5},
        {text: "Dolor", weight: 9.4},
        {text: "Sit", weight: 8},
        {text: "Amet", weight: 6.2},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
      ];
      
      $('#jqcloud').jQCloud(words);
      console.log($('#jqcloud')[0])
      */

      // var words = [
      //   {text: "Lorem", weight: 13},
      //   {text: "Ipsum", weight: 10.5},
      //   {text: "Dolor", weight: 9.4},
      //   {text: "Sit", weight: 8},
      //   {text: "Amet", weight: 6.2},
      //   {text: "Consectetur", weight: 5},
      //   {text: "Adipiscing", weight: 5},
      // ];

      let words = []
      this.db.config.resultRows.forEach(({term, count}) => {
        words.push({
          text: term,
          weight: count,
          handlers: {
            click: function () {
              let term = this.innerText.trim()
              let element = document.getElementById(`term_${term}`)
              element.scrollIntoView({ behavior: 'smooth', block: 'center'});
              $(element).addClass('focus')
              setTimeout(() => {
                $(element).removeClass('focus')
              }, 3000)
            }
          }
        })
      })

      // words = words.slice(0, 5)

      // console.log(words)
      if (words.length === 0) {
        return false
      }

      let options = {
        autoResize: true
      }

      let $jqcloud = $(this.$refs.jqcloud)
      // console.log($jqcloud.jQCloud)
      // console.log($jqcloud[0])
      if ($jqcloud.children().length === 0) {
        // $('#jqcloud').jQCloud(words, options)
        $jqcloud.jQCloud(words, options)
      }
      else {
        $jqcloud.jQCloud('update', words, options)
      }
    }
  }
}

export default app