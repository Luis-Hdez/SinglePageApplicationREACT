import { createContext, useState } from "react";

export const LibraryContext = createContext();

export const LibraryDataProvider = ({ children }) => {
  // crear el estado de los favoritos
  const [currentTrack, setCurrentTrack] = useState(null);

  const [albums] = useState([
    {
      id: 1,
      title: "Midnight Vibes",
      artist: "Luna Rodriguez",
      cover: "/electronic-music-album-cover.png",
      genre: "Electronic",
    },
    {
      id: 2,
      title: "Urban Beats",
      artist: "DJ Marcus",
      cover: "/hip-hop-album-cover.png",
      genre: "Hip Hop",
    },
    {
      id: 3,
      title: "Acoustic Dreams",
      artist: "Sarah Chen",
      cover: "/acoustic-folk-album.png",
      genre: "Folk",
    },
    {
      id: 4,
      title: "Neon Nights",
      artist: "Synthwave Collective",
      cover: "/synthwave-album-cover.png",
      genre: "Synthwave",
    },
  ]);

  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <main className="flex-grow-1 p-3 overflow-auto">{children}</main>
    </div>
  );
};
