import React, { Component } from 'react';
import Poster from './Poster';
import { Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap'; // Replace Grid with Container

export default class MovieList extends Component {
  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
    };

    let movies = this.props.movies
      .filter((movie) => movie.poster_path != null)
      .map((movie) => {
        return (
          <Col xs={6} sm={4} md={3} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Poster
                info
                id={movie.id}
                path={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                release_date={movie.release_date}
                responsive
              />
            </Link>
          </Col>
        );
      });

    return (
      <Container fluid={false}> {/* Replace Grid with Container */}
        <Row style={style}>{movies}</Row>
      </Container>
    );
  }
}
