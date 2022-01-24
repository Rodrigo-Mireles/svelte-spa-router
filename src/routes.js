import Inicio from './Principal/Inicio.svelte'
import Error  from './Principal/Error.svelte'
import Contacto from './Principal/Contacto.svelte'

const routes = {
    '/':Inicio,
    '/contacto':Contacto,  
    '*':Error
     
}

export default routes