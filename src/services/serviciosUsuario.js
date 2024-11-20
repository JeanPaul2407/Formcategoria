export function registrarUsuario(datosUsuario){

}


export function actualizarUsuario(datosUsuario){
        const url="http://localhost:8080/usuarios"

        let peticion={
        method:"GET"
    }
    
    let respuestaInicial=await fetch(URL,peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios

}

export async function buscarUusario