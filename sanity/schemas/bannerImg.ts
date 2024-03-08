 

export default {
    name:"bannerImg",
    type:"document",
    title:"Banner Images",
    fields:[
      
        {
            name:'banner_images',
            type:'array',
            title:'Banner images',
            of: [{type:'image'}],
        },
    ]
}