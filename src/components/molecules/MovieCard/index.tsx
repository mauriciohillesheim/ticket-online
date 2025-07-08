// Ex 3 – Ticket Online: Componente Filme
// Requisito: Criar componente de Filmes com nome, imagem, genero, idade e botão.

import { Link } from "react-router-dom";
import "./style.css";

// Interface atualizada para ser completa
interface Movie {
    id: number;
    nome: string;
    imagem: string;
    genero: string; // CORRETO: sem acento
    idadeIndicada: number;
    sinopse: string; // ADICIONADO para consistência
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img
                src={movie.imagem}
                alt={`Pôster do filme ${movie.nome}`}
                className="movie-card-image"
            />
            <div className="movie-card-body">
                <h3>{movie.nome}</h3>
                <p>Gênero: {movie.genero}</p> {/* CORRETO: sem acento */}
                <p>
                    Classificação:{" "}
                    {movie.idadeIndicada === 0
                        ? "Livre"
                        : `${movie.idadeIndicada} anos`}
                </p>
                <Link to={`/filmes/${movie.id}`} className="btn-details">
                    Ver mais informações
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;