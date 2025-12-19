// Histórico de buscas (será resetado ao recarregar a página)
const searchHistory = [];

// Mapeamento de tipos para cores
const pokemonTypes = {
    normal: { color: '#A8A878', class: 'card-normal' },
    fire: { color: '#F08030', class: 'card-fire' },
    water: { color: '#6890F0', class: 'card-water' },
    electric: { color: '#F8D030', class: 'card-electric' },
    grass: { color: '#78C850', class: 'card-grass' },
    ice: { color: '#98D8D8', class: 'card-ice' },
    fighting: { color: '#C03028', class: 'card-fighting' },
    poison: { color: '#A040A0', class: 'card-poison' },
    ground: { color: '#E0C068', class: 'card-ground' },
    flying: { color: '#A890F0', class: 'card-flying' },
    psychic: { color: '#F85888', class: 'card-psychic' },
    bug: { color: '#A8B820', class: 'card-bug' },
    rock: { color: '#B8A038', class: 'card-rock' },
    ghost: { color: '#705898', class: 'card-ghost' },
    dragon: { color: '#7038F8', class: 'card-dragon' },
    dark: { color: '#705848', class: 'card-dark' },
    steel: { color: '#B8B8D0', class: 'card-steel' },
    fairy: { color: '#EE99AC', class: 'card-fairy' }
};

// Variáveis para paginação
let currentPage = 1;
let allPokemonList = [];
const itemsPerPage = 20;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Buscar um Pokémon inicial
    fetchPokemon('pikachu');
    
    // Carregar lista inicial de Pokémon
    fetchInitialPokemonList();
    
    // Permitir busca com Enter
    const searchInput = document.getElementById('pokemon-search');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchPokemon();
        }
    });
});

// 1. FUNÇÃO PRINCIPAL DE BUSCA
async function fetchPokemon(pokemonName) {
    const normalizedName = pokemonName.toLowerCase().trim();
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizedName}`);
        
        if (!response.ok) {
            throw new Error('Pokémon não encontrado!');
        }
        
        const pokemon = await response.json();
        
        // Adicionar ao histórico
        addToHistory(pokemon.name);
        
        // Exibir Pokémon
        displayPokemon(pokemon);
        
    } catch (error) {
        alert(error.message);
        console.error('Erro na busca:', error);
    }
}

// 2. ADICIONAR AO HISTÓRICO
function addToHistory(pokemonName) {
    // Evitar duplicados
    const index = searchHistory.indexOf(pokemonName);
    if (index > -1) {
        searchHistory.splice(index, 1);
    }
    
    // Adicionar no início
    searchHistory.unshift(pokemonName);
    
    // Limitar a 10 itens
    if (searchHistory.length > 10) {
        searchHistory.pop();
    }
    
    // Atualizar display do histórico
    displayHistory();
}

// 3. EXIBIR HISTÓRICO
function displayHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    searchHistory.forEach(pokemon => {
        const li = document.createElement('li');
        li.className = 'history-item';
        li.textContent = pokemon;
        li.onclick = () => {
            document.getElementById('pokemon-search').value = pokemon;
            fetchPokemon(pokemon);
            showDetailsView();
        };
        historyList.appendChild(li);
    });
}

// 4. EXIBIR DETALHES DO POKÉMON
function displayPokemon(pokemon) {
    // Atualizar informações básicas
    document.getElementById('pokemon-name').textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById('pokemon-id').textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    document.getElementById('pokemon-image').src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    document.getElementById('pokemon-height').textContent = `${(pokemon.height / 10).toFixed(1)} m`;
    document.getElementById('pokemon-weight').textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;
    
    // Habilidades
    const abilities = pokemon.abilities.map(a => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1));
    document.getElementById('pokemon-abilities').textContent = abilities.join(', ');
    
    // Tipos
    const typesContainer = document.getElementById('pokemon-types');
    typesContainer.innerHTML = '';
    pokemon.types.forEach(typeInfo => {
        const type = typeInfo.type.name;
        const span = document.createElement('span');
        span.className = `type-badge ${type}`;
        span.textContent = type;
        typesContainer.appendChild(span);
    });
    
    // Aplicar estilo baseado no tipo primário
    const primaryType = pokemon.types[0].type.name;
    const pokemonCard = document.querySelector('.pokemon-card');
    
    // Remover classes antigas
    Object.values(pokemonTypes).forEach(type => {
        pokemonCard.classList.remove(type.class);
    });
    
    // Adicionar nova classe
    pokemonCard.classList.add(pokemonTypes[primaryType].class);
    
    // Estatísticas (gráfico de barras)
    displayStats(pokemon.stats);
}

// 5. EXIBIR ESTATÍSTICAS COM BARRAS
function displayStats(stats) {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';
    
    // Valores máximos teóricos para normalização
    const maxStats = {
        hp: 255,
        attack: 190,
        defense: 230,
        'special-attack': 194,
        'special-defense': 230,
        speed: 180
    };
    
    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        const statName = document.createElement('span');
        statName.className = 'stat-name';
        statName.textContent = formatStatName(stat.stat.name);
        
        const statBarContainer = document.createElement('div');
        statBarContainer.className = 'stat-bar-container';
        
        const statBar = document.createElement('div');
        statBar.className = 'stat-bar';
        
        // Calcular largura baseada no valor máximo
        const maxValue = maxStats[stat.stat.name] || 100;
        const widthPercentage = Math.min((stat.base_stat / maxValue) * 100, 100);
        statBar.style.width = `${widthPercentage}%`;
        
        const statValue = document.createElement('span');
        statValue.className = 'stat-value';
        statValue.textContent = stat.base_stat;
        
        statBarContainer.appendChild(statBar);
        
        statItem.appendChild(statName);
        statItem.appendChild(statBarContainer);
        statItem.appendChild(statValue);
        
        statsContainer.appendChild(statItem);
    });
}

// 6. FORMATAR NOME DA ESTATÍSTICA
function formatStatName(statName) {
    const names = {
        'hp': 'HP',
        'attack': 'Ataque',
        'defense': 'Defesa',
        'special-attack': 'Ataque Especial',
        'special-defense': 'Defesa Especial',
        'speed': 'Velocidade'
    };
    return names[statName] || statName;
}

// 7. FUNÇÃO DE BUSCA DO INPUT
function searchPokemon() {
    const searchInput = document.getElementById('pokemon-search');
    const pokemonName = searchInput.value.trim();
    
    if (pokemonName) {
        fetchPokemon(pokemonName);
        searchInput.value = '';
    }
}

// 8. CARREGAR LISTA INICIAL DE POKÉMON
async function fetchInitialPokemonList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        allPokemonList = data.results;
        displayPokemonPage(1);
    } catch (error) {
        console.error('Erro ao carregar lista:', error);
    }
}

// 9. EXIBIR PÁGINA DA LISTA
function displayPokemonPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagePokemon = allPokemonList.slice(startIndex, endIndex);
    
    const grid = document.getElementById('pokemon-grid');
    grid.innerHTML = '';
    
    pagePokemon.forEach(async (pokemon, index) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card-list';
        
        try {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            
            pokemonCard.innerHTML = `
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <p>#${pokemonData.id.toString().padStart(3, '0')}</p>
                <div class="pokemon-types">
                    ${pokemonData.types.map(type => 
                        `<span class="type-badge ${type.type.name}">${type.type.name}</span>`
                    ).join('')}
                </div>
            `;
            
            pokemonCard.onclick = () => {
                fetchPokemon(pokemon.name);
                showDetailsView();
            };
            
        } catch (error) {
            console.error('Erro ao carregar Pokémon:', error);
            pokemonCard.innerHTML = `
                <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <p>Erro ao carregar</p>
            `;
        }
        
        grid.appendChild(pokemonCard);
    });
    
    // Atualizar informações da página
    document.getElementById('page-info').textContent = `Página ${page} de ${Math.ceil(allPokemonList.length / itemsPerPage)}`;
    currentPage = page;
    
    // Controlar botões de navegação
    document.getElementById('prev-page').disabled = page === 1;
    document.getElementById('next-page').disabled = endIndex >= allPokemonList.length;
}

// 10. CARREGAR MAIS POKÉMON
async function loadMorePokemon() {
    try {
        const nextPage = Math.ceil(allPokemonList.length / 150) + 1;
        const offset = allPokemonList.length;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=${offset}`);
        const data = await response.json();
        
        allPokemonList = [...allPokemonList, ...data.results];
        displayPokemonPage(currentPage);
        
    } catch (error) {
        console.error('Erro ao carregar mais Pokémon:', error);
    }
}

// 11. ALTERAR PÁGINA
function changePage(direction) {
    const newPage = currentPage + direction;
    const totalPages = Math.ceil(allPokemonList.length / itemsPerPage);
    
    if (newPage >= 1 && newPage <= totalPages) {
        displayPokemonPage(newPage);
    }
}

// 12. ALTERNAR ENTRE VISTAS
function toggleView() {
    const detailsView = document.getElementById('pokemon-details');
    const listView = document.getElementById('pokemon-list');
    const toggleButton = document.getElementById('toggle-view');
    
    if (detailsView.classList.contains('active')) {
        detailsView.classList.remove('active');
        listView.classList.add('active');
        toggleButton.textContent = 'Ver Detalhes';
    } else {
        detailsView.classList.add('active');
        listView.classList.remove('active');
        toggleButton.textContent = 'Ver Lista';
    }
}

// 13. MOSTRAR VISTA DE DETALHES
function showDetailsView() {
    const detailsView = document.getElementById('pokemon-details');
    const listView = document.getElementById('pokemon-list');
    const toggleButton = document.getElementById('toggle-view');
    
    detailsView.classList.add('active');
    listView.classList.remove('active');
    toggleButton.textContent = 'Ver Lista';
}