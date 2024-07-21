import React from 'react';
import { Layout } from '../components';
import { gql } from '../__generated__/';
import { useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

/** GET_TRACKS query to retrieve all tracks */
const GET_TRACKS = gql(`
  # Query goes here (keep it here to show the comment inside of gql)
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
