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
    focus (id) {
      let element = document.getElementById(id)
      if (!element) {
        return false
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'center', });
    }
  }
}

export default app