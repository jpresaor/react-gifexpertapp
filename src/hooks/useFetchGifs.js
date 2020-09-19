import { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'


//custom hook, es como un function component (hecho con el snnipet rafcp borrando cosas)
export const useFetchGifs = ( category ) => {
    
    //cuando se renderize este hook, se cargara el state con este objeto por defecto
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // //el hook useEffect sirve para que lo que va dentro solo se dispare cuando cambie la categoriy (o solo una vez si
    // no metemos nada
    useEffect( () => {
    
        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })
    }, [ category ])

    return state;
}
