import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifItem } from './GridGifItem';


export const GifGrid = ({ category }) => {

    // llamada al custom hook y desestructuracion para obtener el campo del objeto de retorno "loading"
    // renombrado de la data
    const { data:images, loading } = useFetchGifs( category );

   
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map( img => {
                        return <GridGifItem key= {img.id} 
                                            {...img} />
                    }) 
                }
            </div>
        </>
    )
}
