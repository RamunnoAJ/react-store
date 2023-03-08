import { Formik } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { createBuyOrder, updateProduct, getProduct } from '../utils/functions'
import { toast } from 'react-toastify'

export const Checkout = () => {
  const { cart, emptyCart, getTotalPrice } = useCartContext()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    name: Yup.string().lowercase().required('Debe ingresar un nombre válido'),
    email: Yup.string()
      .lowercase()
      .email('Debe ingresar un mail válido')
      .required('El email no puede estar vacío'),
    repeatEmail: Yup.string()
      .lowercase()
      .email('Debe ingresar un mail válido')
      .oneOf(
        [Yup.ref('email'), null],
        'Confirmar email debe coincidir con email'
      )
      .required('El campo confirmar email no puede estar vacío'),
    dni: Yup.number().required('Debe ingresar un dni válido'),
    phone: Yup.number().required('Debe ingresar un teléfono válido'),
    address: Yup.string()
      .lowercase()
      .required('Debe ingresar una dirección válida'),
  })

  const handleSubmit = values => {
    const aux = [...cart]
    const client = values

    aux.forEach(product => {
      getProduct(product.id).then(productDB => {
        productDB.stock -= product.quantity
        updateProduct(productDB.id, productDB)
      })
    })

    createBuyOrder(client, aux, getTotalPrice(), new Date().toISOString()).then(
      buyOrder => {
        toast(
          `Muchas gracias por su compra!, su orden de compra con el id ${
            buyOrder.id
          } por un total de $${new Intl.NumberFormat('de-DE').format(
            getTotalPrice()
          )} fue realizada con éxito`,
          {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
          }
        )
      }
    )

    emptyCart()
    navigate('/')
  }

  return (
    <div className='max-w-7xl mx-auto w-11/12'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          repeatEmail: '',
          dni: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, errors) => {
          handleSubmit(values, errors)
        }}>
        {({ values, errors, handleSubmit, handleChange }) => {
          const errorsArray = Object.entries(errors)
          return (
            <>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col mx-auto max-w-xl bg-slate-300 p-4 md:p-8 gap-4 shadow-xl rounded-md'>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label
                    htmlFor='name'
                    className={errors.name && 'text-red-500'}>
                    Nombre completo:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='text'
                    id='name'
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                </div>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label
                    htmlFor='email'
                    className={errors.email && 'text-red-500'}>
                    Email:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange('email')}
                  />
                </div>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label
                    htmlFor='repeatEmail'
                    className={errors.repeatEmail && 'text-red-500'}>
                    Confirmar email:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='email'
                    id='repeatEmail'
                    value={values.repeatEmail}
                    onChange={handleChange('repeatEmail')}
                  />
                </div>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label htmlFor='dni' className={errors.dni && 'text-red-500'}>
                    Documento:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='number'
                    id='dni'
                    value={values.dni}
                    onChange={handleChange('dni')}
                  />
                </div>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label
                    htmlFor='phone'
                    className={errors.phone && 'text-red-500'}>
                    Telefóno:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='tel'
                    id='phone'
                    value={values.phone}
                    onChange={handleChange('phone')}
                  />
                </div>
                <div className='flex justify-between gap-1 md:gap-4 items-center'>
                  <label
                    htmlFor='address'
                    className={errors.address && 'text-red-500'}>
                    Dirección:
                  </label>
                  <input
                    className='rounded-sm py-1 px-2'
                    type='text'
                    id='address'
                    value={values.address}
                    onChange={handleChange('address')}
                  />
                </div>
                <button
                  type='submit'
                  className='bg-green-400 hover:bg-green-500 py-2 px-4 rounded-full font-medium text-sm transition-all duration-300 ease-in-out self-end'>
                  Finalizar compra
                </button>
              </form>
              {errorsArray.length > 0 && (
                <div className='mt-8 bg-red-300 flex items-center justify-center max-w-xl mx-auto rounded-md p-4'>
                  <ul className='flex flex-col gap-1 justify-center items-start'>
                    {errorsArray.map(error => {
                      return <li key={error}>{error[1]}</li>
                    })}
                  </ul>
                </div>
              )}
            </>
          )
        }}
      </Formik>
    </div>
  )
}
