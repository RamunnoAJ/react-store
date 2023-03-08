/* eslint-disable object-shorthand */

import { db } from './firebase'
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

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

export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, 'products', id), info)
}

export const deleteProduct = async id => {
  await deleteDoc(doc(db, 'products', id))
}

export const createBuyOrder = async (client, products, totalPrice, date) => {
  const buyOrder = await addDoc(collection(db, 'buyOrders'), {
    clientData: client,
    products: products,
    totalPrice: totalPrice,
    date: date,
  })

  return buyOrder
}

export const getBuyOrder = async id => {
  const buyOrderDB = await getDoc(doc(db, 'buyOrders', id))
  const buyOrder = { ...buyOrderDB.data(), id: buyOrderDB.id }

  return buyOrder
}
