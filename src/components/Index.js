/* global Node */

let Index = {
  props: ['db', 'view', 'search'],
  components: {
    DropZone: () => import(/* webpackChunkName: "components/DropZone" */ './DropZone/DropZone.vue'),
    DataFileManager: () => import(/* webpackChunkName: "components/DataFileManager" */ './DataFileManager/DataFileManager.vue'),
    NavigationBar: () => import(/* webpackChunkName: "components/NavigationBar" */ './NavigationBar/NavigationBar.vue'),
    FileList: () => import(/* webpackChunkName: "components/FileList" */ './FileList/FileList.vue'),
    FileController: () => import(/* webpackChunkName: "components/FileController" */ './FileController/FileController.vue'),
    FilterController: () => import(/* webpackChunkName: "components/FilterController" */ './FilterController/FilterController.vue'),
    TagCloud: () => import(/* webpackChunkName: "components/TagCloud" */ './TagCloud/TagCloud.vue'),
    TagList: () => import(/* webpackChunkName: "components/TagList" */ './TagList/TagList.vue'),
		ClustersList: () => import(/* webpackChunkName: "components/ClustersList" */ './ClustersList/ClustersList.vue'),
    TermsRelationshipNetwork: () => import(/* webpackChunkName: "components/TermsRelationshipNetwork" */ './TermsRelationshipNetwork/TermsRelationshipNetwork.vue'),
    ScoreList: () => import(/* webpackChunkName: "components/ScoreList" */ './ScoreList/ScoreList.vue'),
  },
  data() {
    this.$i18n.locale = this.db.config.localConfig
    return {
    }
  },
  computed: {
    isInIframe () {
      try {
        if (window.self !== window.top) {
          return false
        }
      } catch (e) {
        return true
      }
    },
  },
  watch: {
    'db.config.inited'(inited) {
      if (inited === false) {
        return false
      }
    },
  },
  mounted() {
    this.setupAPI()
  },
  methods: {
		setupAPI() {
      this.db.utils.postMessageAPI.addReceiveListener(async (data) => {
        // console.log('收到資料了', data)
				this.db.localConfig.files = []

        if (typeof (data) === 'string') {
          this.db.localConfig.analysisResult = data
        } else {
          for (let key in data) {
            this.db.localConfig[key] = data[key]
          }
        }

				setTimeout(() => {
					this.$refs.NavigationBar.focus('Network')
				}, 3000)
      })
      //console.log('設定好了')
    },
  }
}
// import IndexMethodsPostMessage from './IndexMethodsPostMessage.js'
// IndexMethodsPostMessage(Index)

//import IndexMethodsTest from './IndexMethodsTest.js'
//IndexMethodsTest(Index)

// import IndexMethodsTask from './IndexMethodsTask.js'
// IndexMethodsTask(Index)

export default Index