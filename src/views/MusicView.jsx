import React, { useState } from 'react'

export const MusicView = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const songs = [
    {
      id: 1,
      title: "Only Wanna Sing(Live)",
      artist: "Hillsong Young & Free",
      album: "Youth Revival",
      duration: "3:15",
      cover: "https://cdn.hillsong.com/wp-content/uploads/2016/10/22021412/03-Only-Wanna-Sing_Card.jpg",
      genre: " ",
      plays: "3.2B"
    },
    {
      id: 2,
      title: "Vino Nuevo",
      artist: "Twice",
      album: " ",
      duration: "4:23",
      cover: "https://i.scdn.co/image/ab67616d00001e02ff3716c2df0664920bde162c",
      genre: " ",
      plays: "7.8k"
    },
    {
      id: 3,
      title: "Cornerstone",
      artist: "TobyMac",
      album: "Life After Death",
      duration: "3:23",
      cover: "https://images.genius.com/6a423c5286ceebda1bab84bcfbf72a8b.720x720x1.jpg",
      genre: " ",
      plays: "32M"
    }
  ];

  const featuredPlaylists = [
    {
      id: 1,
      name: "Top Hits Global",
      description: "Los éxitos más populares del momento",
      cover: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
      tracks: "50 canciones"
    },
    {
      id: 2,
      name: "Chill Vibes",
      description: "Música relajante para cualquier momento",
      cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842128d1e7b21f4f57fa1d0174",
      tracks: "80 canciones"
    },
    {
      id: 3,
      name: "Workout Mix",
      description: "Energía para tu entrenamiento",
      cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84124bd0cf5122f4e1aa2a65b7",
      tracks: "65 canciones"
    }
  ];

  const toggleFavorite = (songId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(songId)) {
      newFavorites.delete(songId);
    } else {
      newFavorites.add(songId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="music-page">
      {/* Header con gradiente */}
      <div className="music-header">
        <div className="header-content">
          <h1 className="page-title">Explora la Música</h1>
          <p className="page-subtitle">Descubre los éxitos más populares y encuentra tu nueva canción favorita</p>
        </div>
      </div>

      {/* Sección de playlists destacadas */}
      <section className="music-section">
        <div className="section-header">
          <h2 className="section-title">Playlists Destacadas</h2>
          <button className="see-all-btn">Ver todo</button>
        </div>
        
        <div className="playlists-grid">
          {featuredPlaylists.map((playlist) => (
            <div key={playlist.id} className="playlist-card">
              <div className="playlist-cover">
                <img src={playlist.cover} alt={playlist.name} />
                <div className="play-overlay">
                  <button className="play-btn-large">▶</button>
                </div>
              </div>
              <div className="playlist-info">
                <h3 className="playlist-name">{playlist.name}</h3>
                <p className="playlist-description">{playlist.description}</p>
                <span className="playlist-tracks">{playlist.tracks}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de canciones populares */}
      <section className="music-section">
        <div className="section-header">
          <h2 className="section-title">Canciones Populares</h2>
          <button className="see-all-btn">Ver todo</button>
        </div>

        <div className="songs-container">
          <div className="songs-header">
            <span className="header-number">#</span>
            <span className="header-title">Título</span>
            <span className="header-album">Álbum</span>
            <span className='header-actions'></span>
            <span className="header-duration">⏱</span>
          </div>
          
          {songs.map((song, index) => (
            <div 
              key={song.id} 
              className="song-item"
            >
              <div className="song-number">
                <span className="number">{index + 1}</span>
              </div>

              <div className="song-main-info">
                <div className="song-cover">
                  <img src={song.cover} alt={song.title} />
                </div>
                
                <div className="song-details">
                  <h4 className="song-title">{song.title}</h4>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>

              <div className="song-album">
                <span>{song.album}</span>
              </div>

              <div className="song-actions">
                <button 
                  className={`favorite-btn ${favorites.has(song.id) ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(song.id)}
                  aria-label={favorites.has(song.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  {favorites.has(song.id) ? '❤️' : '🤍'}
                </button>
                <button className="more-btn" aria-label="Más opciones">
                  ⋯
                </button>
              </div>

              <div className="song-duration">
                <span>{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de géneros */}
      <section className="music-section">
        <div className="section-header">
          <h2 className="section-title">Explorar por Género</h2>
        </div>
        
        <div className="genres-grid">
          {[
            { name: "Pop", color: "#ff6b6b", songs: "1,234" },
            { name: "Rock", color: "#4ecdc4", songs: "892" },
            { name: "Hip Hop", color: "#45b7d1", songs: "756" },
            { name: "Electronic", color: "#96ceb4", songs: "543" },
            { name: "Jazz", color: "#ffeaa7", songs: "321" },
            { name: "Classical", color: "#dda0dd", songs: "198" }
          ].map((genre, index) => (
            <div 
              key={index} 
              className="genre-card"
              style={{ backgroundColor: genre.color }}
            >
              <h3 className="genre-name">{genre.name}</h3>
              <p className="genre-count">{genre.songs} canciones</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};