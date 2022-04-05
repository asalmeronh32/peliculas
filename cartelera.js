let pagina = 1;
let peliculas = '';

const cargarPeliculas = async() => {
	try {
		const respuesta = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
			params: {
				language: 'es-ES',
				page: pagina
			},
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJlMGI5ODIxNTY0ZjI2ZjUyOTQ5NzU4ZWEzYzQ3MyIsInN1YiI6IjYxODQyMWZlOGVkMDNmMDAyZDA4ZjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrCdKCx2dZQ7d0WaJpXJaPO_De2iP2rYg9bPon1O3V0'
			}
		})
		if(respuesta.status === 200){
			respuesta.data.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
					<a href="https://www.themoviedb.org/movie/${pelicula.id}-${pelicula.title}"><img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
						 <h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
		}

	} catch(error){
		console.log(error);
	}
}
cargarPeliculas();