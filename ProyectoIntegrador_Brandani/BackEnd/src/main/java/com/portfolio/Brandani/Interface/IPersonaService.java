
package com.portfolio.Brandani.Interface;

import com.portfolio.Brandani.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    
    //traer lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //eliminar objeto buscado por ID
    public void deletePersona(Long id);
    
    //Buscar Persona
    public Persona findPersona(Long id);
    
}
