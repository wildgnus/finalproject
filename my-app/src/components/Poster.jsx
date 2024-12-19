import React from 'react';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { StarFill } from 'react-bootstrap-icons';

export default function Poster(props) {
  const StyledImg = styled.div`
    &:hover .image {
      opacity: 1;
    }
    &:hover .title {
      opacity: ${props.info ? 1 : 0};
    }
  `;
  const Info = styled.div`
    position: absolute;
    top: 75%;
    margin: 10px;
    color: white;
    font-weight: bold;
    opacity: 0;
  `;
  return (
    <StyledImg>
      <Image
        className="image"
        key={props.id}
        src={`${URL_IMG}${IMG_SIZE_LARGE}${props.path}`}
        responsive
      />
      {props.info && (
        <Info className="title">
          <h4>{props.title}</h4>
          <StarFill /> {props.voteAverage} &nbsp;&nbsp;{' '}
          {props.release_date.substring(0, 4)}
        </Info>
      )}
    </StyledImg>
  );
}
