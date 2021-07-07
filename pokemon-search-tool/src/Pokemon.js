import React, { Suspense } from 'react';
import PokemonData from './data/pokedex.json';

const PokemonCard = (props) => {
    return (
        <article onClick={() => openBulbapediaLink(props.name)}>
            <section>
                <span>#{props.id}</span>
                <span className='types'>{props.types}</span>
            </section>
            <Suspense fallback = {<span>Loading...</span>}>
            <img src={props.imageSrc} alt={props.name}></img>  
            </Suspense>        
            <span>{props.name}</span>
        </article>
    );
};

export const PokemonCardList = ({searchQuery}) => {
    // filter by name, id, or type(s)
    const filteredData = PokemonData.filter((p) => {
        return p.name.english.toLowerCase().includes(String(searchQuery).toLowerCase()) ||
            p.id.toString().includes(String(searchQuery)) ||
            p.type.join(', ').trimEnd(', ').toLowerCase().includes(String(searchQuery).toLowerCase());
    });

    return (
        <section className='cards'>
            {
                filteredData.map((p) => {
                return <PokemonCard 
                            key={p.id}
                            id={p.id} name={p.name.english} 
                            types={p.type.join(', ').trimEnd(', ')}
                            imageSrc={generateImageUrl(p.id)}>
                        </PokemonCard>
            })}
        </section>
    );
}

const openBulbapediaLink = (name) => {
    window.open(`https://bulbapedia.bulbagarden.net/wiki/${name}`, '_blank');
}

const generateImageUrl = (id) => {
    return process.env.PUBLIC_URL + '/images/' + id.toString().padStart(3, '0') + '.png';
}