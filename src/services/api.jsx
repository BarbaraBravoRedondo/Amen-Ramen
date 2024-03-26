// Fichero src/services/api.jsx
const callToApi = () => {
    // Llamamos a la API
    return fetch(/*la url api*/ ) 
      .then((response) => response.json())
      .then((data) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const result = {
          name: data.name,
          birthYear: data.birth_year,
          height: data.height,
          mass: data.mass,
          eyeColor: data.eye_color,
        };
        return result;
      });
  };
  
  export default callToApi;