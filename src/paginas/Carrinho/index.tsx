import React from 'react'
import { useCarrinho } from '../../graphql/carrinho/hooks'

const Carrinho = () => {
    const carrinho = useCarrinho()
    console.log(carrinho?.data)
  return (
    <div className='container'>
        <ul>
            {carrinho?.data}
        </ul>
    </div>
  )
}

export default Carrinho