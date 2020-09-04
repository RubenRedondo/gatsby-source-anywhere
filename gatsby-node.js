const fetch = require("node-fetch");

exports.sourceNodes =  async ({ actions, reporter, createNodeId, createContentDigest }, configOptions) => {


    const { createNode } = actions

    //const apiOptions = queryString.stringify(configOptions)
    const {types} = configOptions;

    types.forEach( async type => {

        if(!type.nodeType ){
            return reporter.panic(
                "gatsby-source-anywhere :  You must provide the nodeType "
            )
        }
        if (!type.apiUrl) {
            return reporter.panic(
                "gatsby-source-anywhere :  You must provide the apiUrl "
            )
        }
        if (!type.option) {
            return reporter.panic(
                "gatsby-source-anywhere :  You must provide the option or leave it empty "
            )
        }
        

        const nodeType = type.nodeType;
        const option = type.option;
        const apiUrl = type.apiUrl;

        const response = await fetch(apiUrl)
        const data = await response.json()

        if (option.length > 0){
            Object.keys(data[option]).forEach(key => {
                console.log(data[option][key])
                const record = data[option][key];
                const nodeContent = JSON.stringify(record)
                const nodeMeta = {
                    id: record.id,
                    parent: null,
                    children: [],
                    internal: {
                        type: nodeType,
                        content: nodeContent,
                        contentDigest: createContentDigest(record),
                    },
                }
                const node = Object.assign({}, record, nodeMeta)
                createNode(node)
            })
        } else {
            Object.keys(data).forEach(key => {
                console.log(data[key])
                const record = data[key];
                const nodeContent = JSON.stringify(record)
                const nodeMeta = {
                    id: record.id,
                    parent: null,
                    children: [],
                    internal: {
                        type: nodeType,
                        content: nodeContent,
                        contentDigest: createContentDigest(record),
                    },
                }
                const node = Object.assign({}, record, nodeMeta)
                createNode(node)
            })
        }


    })

    
    //const { option, nodeType} = configOptions


    
}
