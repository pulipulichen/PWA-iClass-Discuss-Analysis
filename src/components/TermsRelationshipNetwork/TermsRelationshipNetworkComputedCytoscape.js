export default function (app) {
  let demoNodes = [
    {data: {id: 'n1', weight: 20}},
    {data: {id: 'n2', weight: 2}},
    {data: {id: 'n3', parent: 'n8'}},
    {data: {id: 'n5'}},
    {data: {id: 'n6', parent: 'n8'}},
    {data: {id: 'n7', parent: 'n8'}},
    {data: {id: 'n8'}},
    {data: {id: 'f1'}, classes: ['fixed']},
    {data: {id: 'f2'}, classes: ['fixed']},
    {data: {id: 'f3', parent: 'n8'}, classes: ['fixed']}, 
  ]
  let demoEdges = [
    {data: {source: 'n1', target: 'f1', weight: 20}},
    {data: {source: 'n1', target: 'n3', weight: 2}},
    {data: {source: 'f1', target: 'n2'}},
    {data: {source: 'f1', target: 'n3'}},
    {data: {source: 'n3', target: 'f2'}},
    {data: {source: 'f2', target: 'n5'}},
    {data: {source: 'n5', target: 'n8'}},
    {data: {source: 'n6', target: 'n3'}},
    {data: {source: 'n6', target: 'n7'}},
    {data: {source: 'n6', target: 'f3'}}
  ]

  app.computed.graphElements = function () {

    let nodes = []
    let edges = []

    // nodes = demoNodes
    // edges = demoEdges

    
    let result = this.db.localConfig.analysisResult
    // console.log(result)
    let {nodesMap, edgesMap} = this.analyzeNodeEdgeMap(result)
    // console.log(edgesMap)
    nodesMap = weightNormalize(nodesMap)
    edgesMap = weightNormalize(edgesMap)
    // console.log(nodesMap)
    nodes = this.nodesMapToArray(nodesMap)
    edges = this.edgesMapToArray(edgesMap)
    // console.log(nodes)

    return {
      nodes,
      edges
    }
  }

  app.methods.analyzeNodeEdgeMap = function (input) {
    input = input.trim().replace(/\t/g, ' ')

    let nodesMap = {}
    let edgesMap = {}
    input.split('\n').forEach(line => {
      line = line.trim()

      let localNodes = {}
      line.split(' ').forEach(term => {
        term = term.trim()
        if (term === '') {
          return false
        }

        if (term.length > this.termMaxLength) {
          term = term.slice(0, this.termMaxLength).trim()
        }

        if (!localNodes[term]) {
          localNodes[term] = 0
        }
        localNodes[term]++

        if (!nodesMap[term]) {
          nodesMap[term] = 0
        }
        nodesMap[term]++
      })

      // https://stackoverflow.com/a/43241287
      let terms = Object.keys(localNodes)
      let pairs = [].concat(...terms.map( 
          (v, i) => terms.slice(i+1).map( w => [v, w] ))
      );

      pairs.forEach(pair => {
        pair.sort()

        let weight = Math.max(localNodes[pair[0]], localNodes[pair[1]])
        let edgeKey = pair.join('\t')
        
        if (!edgesMap[edgeKey]) {
          edgesMap[edgeKey] = 0
        }
        edgesMap[edgeKey] = edgesMap[edgeKey] + weight
      })
    })

    // console.log(edgesMap)

    return {nodesMap, edgesMap}
  }

  function weightNormalize(map, min = 0, max = 100) {
    let values = Object.values(map)
    // console.log(values)
    let valuesMin = Math.min(...values)
    let valuesMax = Math.max(...values)

    let output = {}
    let valuesInterval = (valuesMax - valuesMin)
    let interval = max - min
    Object.keys(map).forEach(key => {
      if (valuesInterval === 0 || interval === 0) {
        output[key] = min
        return false
      }

      let value = map[key]
      let ratio = (value - valuesMin) / valuesInterval
      // console.log(key, ratio, value, valuesMin, valuesMax, valuesInterval)
      value = Math.round((ratio * interval) + min)
      output[key] = value
    })

    // console.log(output)
    return output
  }

  app.methods.nodesMapToArray = function (nodesMap) {
    // {data: {id: 'n1', weight: 20}},
    return Object.keys(nodesMap).map(term => {
      return {
        data: {
          id: this.nodeBreakLine(term),
          term,
          weight: nodesMap[term],
        },
        classes: ['term']
      }
    })
  }

  app.methods.edgesMapToArray = function (edgesMap) {
    return Object.keys(edgesMap).map(key => {
      let part = key.split('\t')
      return {
        data: {
          source: this.nodeBreakLine(part[0]),
          target: this.nodeBreakLine(part[1]),
          weight: edgesMap[key]
        }
      }
    })
  }

  // app.computed.idRoot = function () {
  //   if (!this.graphData) {
  //     return false
  //   }
  //   let text = this.graphData.term

  //   text = this.nodeBreakLine(text)

  //   return text
  // }

  app.computed.relativePlacementConstraint = function () {
    let rel = []

    return rel
  }

  app.computed.alignmentConstraint = function () {
    let vertical = []
    let horizontal = []

    return {
      vertical,
      horizontal
    }
  }
}