import Inicio from './Principal/Inicio.svelte'
import Error  from './Principal/Error.svelte'
import Contacto from './Principal/Contacto.svelte'
import Nosotros from './Principal/Nosotros.svelte'

const routes = {
    '/':Inicio,
    '/contacto':Contacto,  
    '/nosotros':Nosotros,
    '*':Error
     
}

export default routes