"use client";

import { memo } from "react";

const FilmList = ({
  films,
}: {
  films: { title: string; episode_id: number; release_date: string }[];
}) => {
  if (films.length === 0) {
    return <div className="py-2 text-gray-400">No films found</div>;
  }

  return (
    <ul className="space-y-2">
      {films.map(
        (
          film: { title: string; episode_id: number; release_date: string },
          index: number
        ) => (
          <li key={index} className="p-3 bg-gray-800 rounded-md">
            <h3 className="font-medium text-white">{film.title}</h3>
            <p className="text-sm text-gray-400">
              Episode {film.episode_id} • Released: {film.release_date}
            </p>
          </li>
        )
      )}
    </ul>
  );
};

export default memo(FilmList);
