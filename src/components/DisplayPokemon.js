const DisplayPokemon = props => {
    const {pokemon} = props;

    return(
        <div>
            <ul className="list-group">
                <li>{pokemon.name}</li>
            </ul>
        </div>
    );
}

export default DisplayPokemon;