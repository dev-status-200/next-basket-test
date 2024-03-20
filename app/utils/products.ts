let url = process.env.NEXT_PUBLIC_BASE_API_URL;

const getItems = async(params: any) =>  {
  const res = await fetch(`${url}/products?`+ new URLSearchParams(params));
  if (!res.ok) {
    throw new Error('Opps an error occured')
  }
  return res.json()
}

const getItemById = async(id: string) => {
  const res = await fetch(`${url}/products/`+ id);
  if (!res.ok) {
    throw new Error('Opps an error occured')
  }
  return res.json()
}

export { getItems, getItemById }