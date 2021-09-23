import { Component } from "react";
import Pokemonlist from "./components/pokemon-list";
import Searchbox from "./components/search-box";
import "bootstrap/dist/css/bootstrap.min.css";


import "./styles.css";
import DetailsModal from "./components/details-modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      stats: {},
      search: "",
      selPokemonIdx: -1,
      showModal: false
    };
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }

  getPokemonDetails(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => ({
        height: data.height,
        weight: data.weight,
        baseExperience: data.base_experience
      }));
  }

  onClickDetails = (name, url) => {
    const { stats } = this.state;
    const statsExist = stats[name] !== undefined;

    if (statsExist) {
      this.setState({ selPokemonName: name, showModal: true });
    } else {
      const statsPromise = this.getPokemonDetails(url);
      statsPromise.then((data) => {
        this.setState((prevState) => {
          const newState = {
            stats: {
              ...prevState.stats,
              [name]: data
            },
            selPokemonName: name,
            showModal: true
          };

          return newState;
        });
      });
    }
  };

  renderModal() {
    const { stats, selPokemonName } = this.state;

    const pokemonStats = stats[selPokemonName];

    return <DetailsModal {...pokemonStats} name={selPokemonName} />;
  }

  render() {
    const { pokemons, search, showModal } = this.state;
    const filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div className="App ">
        {showModal && this.renderModal()}
        <Searchbox searchChange={this.onSearchChange} />
        <div>
          <Pokemonlist
            pokemons={filteredPokemon}
            onClickDetails={this.onClickDetails}
          />
        </div>
      </div>
    );
  }
}

export default App;
