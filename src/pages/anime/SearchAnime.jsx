import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SearchAnime.css';

const SearchAnime = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedSynopsis, setSelectedSynopsis] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [isSearching, setIsSearching] = useState(false); // Nuevo estado para indicar si se está realizando una búsqueda

    const searchAnime = async (query) => {
        setIsSearching(true); // Marcar que se está realizando una búsqueda
        const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=12`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSearchResults(data.data);
        } catch (error) {
            console.error('Error fetching anime:', error);
        } finally {
            setIsSearching(false); // Indicar que la búsqueda ha finalizado
        }
    };

    useEffect(() => {
        // Realizar una búsqueda al cargar la página, solo si hay un término de búsqueda
        if (searchTerm.trim() !== '') {
            searchAnime(searchTerm);
        }
    }, []); // El efecto se ejecuta solo una vez al cargar la página, ya que el array de dependencias está vacío

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            searchAnime(searchTerm);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSynopsisClick = (synopsis, title) => {
        const cleanedSynopsis = synopsis.replace(/\\"/g, '"').replace(/\\n/g, '<br>');
        setSelectedSynopsis(cleanedSynopsis);
        setSelectedTitle(title);
    };

    const renderSearchResults = () => {
        if (isSearching) {
            return <div>Loading...</div>; // Muestra un indicador de carga mientras se realiza la búsqueda
        }

        if (searchResults.length === 0) {
            return <div>No results found.</div>; // Muestra un mensaje si no hay resultados de búsqueda
        }

        return searchResults.map((result, index) => {
            const synopsisString = JSON.stringify(result.synopsis).replace(/\\"/g, '"').replace(/'/g, "&apos;").replace(/"/g, "&quot;");
            return (
                <div className="col-md-3 mt-3 g-2" key={index}>
                    <div className="card formbg">
                        <img
                            className="card border-0"
                            style={{ height: '40vh', objectFit: 'cover', objectPosition: 'top' }}
                            src={result.images.jpg.large_image_url}
                            alt={result.title}
                        />
                        <div className="card-body text-center">
                            <h6 className="text-title fs-4" style={{ color: '#9500ff' }}>N. {result.rank}</h6>
                            <h4 className="text-title" style={{ color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{result.title}</h4>
                            <p className="text-title fs-5">Score: {result.score}</p>
                            <button
                                type="button"
                                className="btn btn-secondary animebutton"
                                data-bs-toggle="modal"
                                data-bs-target="#synopsisModal"
                                onClick={() => handleSynopsisClick(synopsisString, result.title)}
                            >
                                Synopsis
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <section className="container-fluid mt-2 mb-2">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="searchInput"
                            placeholder="Search Anime"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button
                            className="btn btn-secondary animebutton"
                            type="button"
                            id="searchButton"
                            onClick={handleSearch}
                        >
                            Search Anime
                        </button>
                    </div>
                </div>
            </div>
            {searchResults.length > 0 && ( // Renderizar solo si hay resultados de búsqueda
                <div className="row" id="row-search-results">
                    {renderSearchResults()}
                </div>
            )}
            {/* Modal */}
            <div className="modal fade" id="synopsisModal" tabIndex="-1" aria-labelledby="synopsisModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="synopsisModalLabel">{selectedTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <p dangerouslySetInnerHTML={{ __html: selectedSynopsis }}></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { SearchAnime };




