module.exports = function () {
  return [
    {
      selector: 'node',
      style: {
        // 'shape': 'diamond',
        'shape': 'round-rectangle',
        'width': 'label',
        'height': 'label',
        // 'padding': '5',
        // 'width': '300',
        // 'height': '100',
        // 'background-color': '#bdd3d4',
        'label': 'data(id)',
				// "shadow-color": "red",
        'text-valign': 'center',
        'background-opacity': 0,
        "text-wrap": "wrap",
        "cursor": "pointer",
        // "color": "mapData(weight, 0, 100, blue, red)",
        // "z-index": "mapData(weight, 0, 100, 0, 1)",
        // 'background-opacity': "mapData(weight, 0, 100, 0.3, 0.7)",
        "font-size": "mapData(weight, 0, 100, 6, 36)",
				"opacity": "mapData(weight, 0, 100, 0.7, 1)",
      }
    },

    {
      selector: ':parent',
      style: {
        //      'background-opacity': 0.333,
        'background-color': '#e8e8e8',
        'border-color': '#DADADA',
        //      'border-width': 3,
        'text-valign': 'bottom'
      }
    },

    {
      selector: 'edge',
      style: {
        // 'shape': 'arrow',
        'curve-style': 'straight',
        // 'line-color': '#bdd3d4',
        "line-color": "mapData(weight, 0, 100, #CCCCCC, #333333)",
        "width": 1,
        // 'target-arrow-shape': 'triangle',
        // 'opacity': 0.7,
        // "z-index": "mapData(weight, 0, 100, 0, 100)",
        'opacity': "mapData(weight, 0, 100, 0.3, 0.9)",
      }
    },

    {
      selector: 'node:selected',
      style: {
        'background-color': '#33ff00',
        'border-color': '#22ee00',
        'background-opacity': 0.5,
      }
    },

    // {
    //   selector: 'node.fixed',
    //   style: {
    //     'shape': 'diamond',
    //     'background-color': '#9D9696',
    //   }
    // }, 

    {
      selector: 'node.highlighted',
      style: {
        'background-color': '#ffff00',
        'border-color': '#22ee00',
        'background-opacity': 1,
        'z-index': 101
      }
    }, 
    {
      selector: 'node.focused',
      style: {
        'background-color': '#33ff00',
        'border-color': '#22ee00',
        'background-opacity': 1,
        'z-index': 102
      }
    },

    // {
    //   selector: 'node.fixed:selected',
    //   style: {
    //     'background-color': '#33ff00',
    //   }
    // },

    // {
    //   selector: 'node.alignment',
    //   style: {
    //     'shape': 'round-heptagon',
    //     'background-color': '#fef2d1',
    //   }
    // },

    // {
    //   selector: 'node.alignment:selected',
    //   style: {
    //     'background-color': '#33ff00',
    //   }
    // },  

    // {
    //   selector: 'node.relative',
    //   style: {
    //     'shape': 'rectangle',
    //     'background-color': '#fed3d1',
    //   }
    // },

    // {
    //   selector: 'node.relative:selected',
    //   style: {
    //     'background-color': '#33ff00',
    //   }
    // },  

    // {
    //   selector: 'edge:selected',
    //   style: {
    //     'line-color': '#33ff00'
    //   }
    // },
    // {
    //   selector: 'edge.reference',
    //   style: {
    //     'line-color': '#ffff00'
    //   }
    // },

    {
      selector: 'edge.highlighted',
      style: {
        'line-color': '#ffff00',
        'opacity': 1,
        'z-index': 101
      }
    },
    
    // {
    //   selector: '#BT,#USE',
    //   style: {
    //     "text-valign": 'top',
    //   }
    // },
    // {
    //   selector: '#BT',
    //   style: {
    //     'background-color': '#f6e7ff',
    //   }
    // },
    // {
    //   selector: '#NT',
    //   style: {
    //     'background-color': '#f1e2d3',
    //   }
    // },
    // {
    //   selector: '#RT',
    //   style: {
    //     'background-color': '#ffedde',
    //   }
    // },
    // {
    //   selector: '#USE',
    //   style: {
    //     'background-color': '#fbfdef',
    //   }
    // },
    // {
    //   selector: '#UF',
    //   style: {
    //     'background-color': '#e1f7f7',
    //   }
    // },
  ];

}