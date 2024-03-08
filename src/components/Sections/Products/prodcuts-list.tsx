import { client } from "@/app/lib/sanity"
import { ProdSection } from "./products"

async function ProdcutList () {
    const data = await getData()
    console.log(data.length)
    return <ProdSection data={data} />
  }


  async function getData() {
    const query = `*[_type == "product"][]{
      _id,
      name,
      "category":category->name,
      "imageUrl":images[].asset->url
}`
  
    const data = await client.fetch(query)
  
    return data
  }

  export {ProdcutList}