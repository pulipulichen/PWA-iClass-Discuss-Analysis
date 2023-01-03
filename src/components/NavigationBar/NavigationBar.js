let app = {
  props: ['db'],
  components: {
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
  },
  computed: {
    computedNavigationBarClasses () {
      let classes = []

      // console.log(classes)
      return classes
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app