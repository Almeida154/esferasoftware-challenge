import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.a`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.9rem;
  text-align: center;
  outline: 2px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: pointer;
  height: 48px;
  transition: 0.3s;

  :hover {
    background-color: ${props => rgba(props.theme.colors.primary, 0.2)};
  }
`;
