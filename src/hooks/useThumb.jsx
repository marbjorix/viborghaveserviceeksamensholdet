import { useState } from 'react'

const useThumb = () => {

    // state til at rumme det skabte billede
    const [ thumbImage, setThumbImage ] = useState()

    // FUNKTIONEN der skaber et image ud fra en filestream
    const makeThumb = file => {

        if ( file ) {
            // lav image
            let reader = new FileReader()

            // når reader loades/sættes i gang ...
            reader.onload = ( r ) => {

                setThumbImage( <img src={ r.target.result } width="100" alt="Thumb-visning af billede" className="imagethumb" /> )
                //setThumbImage( r.target.result ) // så får man image src - men IKKE et image-tag

            }

            // sæt reader i gang (load) ved at læse den file/fil som er sendt med
            reader.readAsDataURL( file )


        } else {

            // tøm state så der ikke er et image
            setThumbImage()
        }

    }


    // det der sendes ud fra hooket
    return [ makeThumb, thumbImage ]

}

export default useThumb