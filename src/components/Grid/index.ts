import styled from "styled-components";

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps {
  size?: ColumnSize;
}

// Define Container
export const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

// Define Row
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Define Col
export const Col = styled.div<ColumnProps>`
  position: relative;
  width: 100%;
  flex-basis: ${(props) =>
    props.size ? `${(props.size / 12) * 100}%` : "100%"};
  max-width: ${(props) =>
    props.size ? `${(props.size / 12) * 100}%` : "100%"};
`;
