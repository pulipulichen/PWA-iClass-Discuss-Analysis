const defaultStylesheet = require('./CytoscapeStyle.js')
require('./cytoscape-markov-cluster.js')

const cytoscape = require('cytoscape');

// https://github.com/iVis-at-Bilkent/cytoscape.js-layout-utilities
const layoutUtilities = require('cytoscape-layout-utilities');
cytoscape.use( layoutUtilities ); // register extension

// https://www.npmjs.com/package/cytoscape-fcose
const fcose = require('cytoscape-fcose');
cytoscape.use( fcose ); // register extension

// https://www.npmjs.com/package/cytoscape-cose-bilkent
// let coseBilkent = require('cytoscape-cose-bilkent');
// cytoscape.use( coseBilkent ); // register extension

// https://www.npmjs.com/package/cytoscape-cise
// let cise = require('cytoscape-cise');
// cytoscape.use( cise ); // register extension

// https://www.npmjs.com/package/cytoscape-no-overlap
// let noOverlap = require('cytoscape-no-overlap');
// cytoscape.use( noOverlap ); // register extension

// https://www.npmjs.com/package/cytoscape-popper
// const popper = require('cytoscape-popper');
// cyqtip( popper );

const $ = require('jquery')

// console.log(cyqtip)
// console.log(defaultStylesheet)

export default function (app) {

  app.methods.ready = function (cy, vue) {

    let {relativePlacementConstraint, alignmentConstraint} = vue
    // console.log(this)       
    let layoutUtilities = cy.layoutUtilities({
      desiredAspectRatio: cy.width() / cy.height()
    });

    // cy.nodes().forEach(function (node) {
    //   // let size = Math.random()*40+30;
    //   // node.css("width", size);
    //   // node.css("height", size);
    // });

    let initialLayout = cy.layout({
      name: 'fcose',
      // name: 'cise',
      // quality: "proof",
      // step: 'all', 
      // animationEasing: 'ease-out',
      // relativePlacementConstraint,
      // alignmentConstraint,
      // nestingFactor: 1,
      // gravity: 0.1,
      // numIter: 100000,
      // padding: 100,
      // fit: true,
      // gravityRange: 0.8,
      // gravityCompound: 5,
      // gravityRangeCompound: 0.7,
      // tilingPaddingVertical: 10,
      // nodeSep: 300,
      avoidOverlap: true,
      // step: "all",
      // nodeSeparation: 100,
      // gravity: 0.0000000000000001,
      // nodeRepulsion: 4500,
      // gravityRange: 0.00008, 
      // nodeSeparation: 5000,
      // animationDuration: 500,
      // animate: false,
    });
    // initialLayout.pon('layoutstart').then(function( event ){
    //   constraints.fixedNodeConstraint = JSON.parse(JSON.stringify(fixedNodeConstraint));
    // });

    initialLayout.run();
    
		// setTimeout(() => {
		this.cluster(cy)
		// }, 3000)
  }

	let clusterColors = [
		"#DB444B",
		"#006BA2",
		"#3EBCD2",
		"#379A8B",
		"#EBB434",
		"#B4BA39",
		"#9A607F",
		"#D1B07C",
		"#758D99",
		"#4D4D4D",
		"#5DA5DA",
		"#FAA43A",
		"#60BD68",
		"#F17CB0",
		"#B2912F",
		"#B276B2",
		"#DECF3F",
		"#F15854"
	]
	app.methods.cluster = function (cy) {
		this.db.config.clusterResults = this.db.config.clusterResults.slice(0, 0)


    // console.log('go')
		var clusters = cy.elements().markovCluster({
			// expandFactor: 1,
			inflateFactor: 10,
			// multFactor: 0.5, 
			// maxIterations: 200,
		});
		// console.log(clusters)

		for (var c = 0; c < clusters.length; c++) {
			// clusters[c].style( 'background-color', '#' + Math.floor(Math.random()*16777215).toString(16) );
			// clusters[c].style( 'color', '#' + Math.floor(Math.random()*16777215).toString(16) );
			// console.log('#' + Math.floor(Math.random()*16777215).toString(16))
			clusters[c].style( 'color', clusterColors[(c % clusterColors.length)] );


		}

		// --------------------------
		this.db.config.clusterResults = this.db.config.clusterResults
			.concat(clusters.map(cluster => {
				return cluster.map(element => {
					return {
						text: element.data('term'),
						weight: element.data('weight')
					}
				})
			}))
		this.db.config.clusterResults.sort((a, b) => {
			return b.length - a.length
		})

		for (let i = 0; i < this.db.config.clusterResults.length; i++) {
			this.db.config.clusterResults[i].sort((a, b) => {
				let weight = b.weight - a.weight
				if (weight !== 0) {
					return weight
				}
				return a.text.localeCompare(b.text)
			})
		}

		this.cyReady = true	
		setTimeout(() => {
			cy.fit()
		}, 1000)
	}

  // cyqtip(cytoscape)
  app.methods.initCytoscapeVis = function () {
    
    if (this.db.config.inited === false) {
      return false
    }
		
    clearTimeout(this.cyTimer)
		
    this.cyTimer = setTimeout(() => {
			
      let vue = this
      cy = window.cy = cytoscape({
        container: this.$refs.cy,
        ready: function () {
          vue.ready(this, vue)
          // console.log('ready')

          // setTimeout(() => {
          //   this.nodes().noOverlap({ padding: 500 });
          // }, 3000)
          
        },
        layout: { 
          name: 'preset',
          // gravity: 0.0001,
          // avoidOverlap: true,
        },
        style: defaultStylesheet(),
        elements: this.graphElements,
        wheelSensitivity: 0.3,
      });

      this.setupCYEvents(cy)
    }, 100)
      

    // set nodeHtmlLabel for your Cy instance
    

    // let constraints = {
    //   fixedNodeConstraint: undefined,
    //   alignmentConstraint: undefined,
    //   relativePlacementConstraint: undefined
    // };
  }

  app.methods.setupCYEvents = function (cy) {
    let vue = this

    cy.on('click', 'node', function (event) {
      // // console.log(this.data('classes'))
      // if (!this.classes() || this.classes().indexOf('term') === -1) {
      //   return false
      // }

      // if (this.classes().indexOf('root') === -1) {
      //   // window.alert(this.data('id'))
      //   // vue.localConfig.termFocus = this.data('term')
      // }
      // else {
      //   vue.scrollToTermFocus(this.data('term'))
      // }
			let isCancel = false
			if (event.target.hasClass('focused')) {
				isCancel = true
			}

      cy.$('.focused').removeClass('focused')
      cy.$('.highlighted').removeClass('highlighted')

			if (isCancel) {
				return false
			}


      event.target.addClass('focused')
      var connectedEdges = event.target.connectedEdges()
      for (let i = 0; i < connectedEdges.length; i++) {
        
        connectedEdges[i].addClass('highlighted');
        connectedEdges[i].connectedNodes().forEach(node => {
          node.addClass('highlighted')
        })
      }
    });

    cy.on('mouseover', 'node', function (e) {
      // console.log(this.classes())
      if (!this.classes() || this.classes().indexOf('term') === -1) {
        return false
      }
      // console.log('aaa')
      $('body').css('cursor', 'pointer');

      // var node = e.cyTarget;
      // node.qtip({
      
      // this.qtip({
      //      content: 'hello',
      //      show: {
      //         event: e.type,
      //         ready: true
      //      },
      //      hide: {
      //         event: 'mouseout unfocus'
      //      }
      // }, e);
    });

    cy.on('mouseout', 'node', function (e) {
      if (!this.classes() || this.classes().indexOf('term') === -1) {
        return false
      }
      // console.log(this.data('classes'))
      $('body').css('cursor', 'default');
    });
  }

  // app.methods.setupGraphData = function () {
  //   if (this.db.config.inited === false) {
  //     return false
  //   }

  //   // let index = this.$parent.$refs.ListIndex.graphData
  //   // if (!index) {
  //   //   console.error('no index')
  //   //   // return false
  //   // }

  //   // // console.log(index)
  //   // let thesaurus = this.$parent.$refs.ListThesaurus.graphData
  //   // if (!thesaurus) {
  //   //   console.error('no thesaurus')
  //   //   window.alert(this.$t(`"${this.localConfig.termFocus}" is not found in thesaurus.`))
  //   //   return false
  //   // }

  //   // let data = {
  //   //   ...thesaurus
  //   //   // locators: index.locators
  //   // }

  //   // if (index && index.locators) {
  //   //   data.locators = index.locators
  //   // }

  //   // // console.log(data)
  //   // // return data
  //   // this.graphData = data

  //   this.graphData = {}

  //   setTimeout(() => {
  //     this.initCytoscapeVis()
  //   }, 100)
  // }

  app.methods.hasChinese = function (text) {
    return /[\u4e00-\u9fa5]/.test(text)
  }

  let nodeWidth = 5
  app.methods.nodeBreakLine = function (term) {
    let output = []
    term.split(' ').map(word => {
      if (this.hasChinese(word) === false) {
        output.push(word)
        return false
      }
      
      while (word.length > nodeWidth) {
        let part = word.slice(0, nodeWidth)
        word = word.slice(nodeWidth)

        output.push(part.trim())
      }
      
      if (word.length > 0 && word.trim() !== '') {
        output.push(word.trim())
      }
    })


    // console.log(output.join('\n'))
    return output.join('\n')

    // return term.split(' ').join('\n')
  }

  app.methods.nodeJoinLine = function (term) {
    return term.split('\n').join(' ')
  }
}