import React from 'react';
import { Layout } from '../components';
import { gql } from '../__generated__/';

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
  return <Layout grid> </Layout>;
};

export default Tracks;
