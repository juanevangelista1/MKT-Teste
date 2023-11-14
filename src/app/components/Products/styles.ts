"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  background-color: #e5e5e5;
  display: grid;
  justify-items: center;
  padding: 20px 0 50px;
  height: 90vh;
  overflow-y: auto;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 15px 0;
  margin: 10px 0;
  height: 100%;
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
