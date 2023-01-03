let app = {
  props: ['db'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      isDragging: false,
      isDragFromWindow: false,
      stringTypes: [
        'text/uri-list',
        'text/html'
      ]
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    
  },
  mounted() {
    this.initEvents()
  },
  methods: {
    initEvents () {
      window.addEventListener('dragstart', () => {
        // console.log('dragstart')
        this.isDragFromWindow = true
      })

      window.addEventListener('dragenter', () => {
        // console.log('dragenter')
        if (this.isDragFromWindow === false) {
          this.isDragging = true
        }
      })

      // window.addEventListener('mouseleave', () => {
      //   console.log('mouseleave')
      //   this.isDragging = false
      // })

      // window.addEventListener('dragleave', () => {
      //   console.log('dragleave')
      //   this.isDragging = false
      // })

      window.addEventListener('dragend', () => {
        // console.log('dragend')
        this.isDragFromWindow = false
      })
    },
    dropHandler (event) {

      this.db.file.importFilesByEvent(event)
        
      this.isDragging = false
      this.isDragFromWindow = false
    },
    dragOverHandler(ev) {
      // console.log('File(s) in drop zone');
    
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();
    },
    dragLeaveHandler (ev) {
      // console.log('dragLeaveHandler');
      this.isDragging = false
      ev.preventDefault();
    }
  }
}

export default app