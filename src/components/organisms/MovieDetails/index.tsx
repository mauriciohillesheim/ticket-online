// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar componente de detalhes do Filme com sinopse e botão de voltar.

import { useParams, useNavigate } from 'react-router-dom';
import { mockMovies } from '../../../data/mockMovies';
import './style.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Lógica de busca corrigida para mais segurança
  const movie = mockMovies.find((m) => m.id === parseInt(id || '0'));

  if (!movie) {
    return <div>Filme não encontrado!</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.imagem} alt={movie.nome} className="details-image" />
      <div className="details-info">
        <h1>{movie.nome}</h1>
        {/* CORRETO: sem acento */}
        <p><strong>Gênero:</strong> {movie.genero}</p>
        <p><strong>Classificação:</strong> {movie.idadeIndicada === 0 ? 'Livre' : `${movie.idadeIndicada} anos`}</p>
        <p><strong>Sinopse:</strong> {movie.sinopse}</p>
        <button onClick={() => navigate(-1)} className="btn-back">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;