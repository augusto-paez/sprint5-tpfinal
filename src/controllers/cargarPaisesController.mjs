export async function cargarPaisesController(req, res) {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/americas');
        const data = await response.json();

        if (!Array.isArray(data)) {
            return res.status(500).json({ mensaje: 'Error al obtener datos de RestCountries', data });
        }

        // Filtrar solo países con español
        const paisesEspanol = data.filter(p =>
            p.languages && 
            p.languages.spa === 'Spanish' &&
            p.region === 'Americas'
        );

        // Limpiar propiedades no deseadas y agregar creador
        const paises = paisesEspanol.map(p => {
            const { translations, tld, cca2, ccn3, cca3, cioc, idd, altSpellings, car, coatOfArms, postalCode, demonyms, ...resto } = p;
            return {
                ...resto,
                creador: 'Augusto'
            };
        });

        for (const pais of paises) {
            await crearPais(pais);
        }

        res.status(201).json({ mensaje: `${paises.length} países hispanohablantes de América cargados correctamente` });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cargar países', error: error.message });
    }
}