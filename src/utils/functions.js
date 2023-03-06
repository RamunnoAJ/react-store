import { db } from './firebase'
import { addDoc, collection, getDocs, getDoc, doc } from 'firebase/firestore'

export const loadDB = async () => {
  const response = await fetch('./json/products.json')
  const products = await response.json()

  products.forEach(async product => {
    await addDoc(collection(db, 'products'), {
      name: product.name,
      price: product.price,
      image: product.image,
      categoryId: product.categoryId,
      category: product.category,
      stock: product.stock,
    })
  })
}

export const getDataFromDB = async () => {
  const products = await getDocs(collection(db, 'products'))
  const items = products.docs.map(product => {
    return { ...product.data(), id: product.id }
  })

  return items
}

export const getProduct = async id => {
  const product = await getDoc(doc(db, 'products', id))
  const item = { ...product.data(), id: product.id }

  return item
}
