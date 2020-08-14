import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-display';
export const Container = styled.View`
  flex:1;
  background: #fff;
  justify-content: center;
`;

export const Title = styled.Text`
	color: #343A54;

  font-size: 22px;
  font-weight: bold;
  padding:0 20px 10px;

  border-bottom-width: 0.5px;
  border-bottom-color: #69708D;
`;

export const Card = styled.View`
	padding: 0 0 105px;

`;

export const Mark = styled.View`
  margin-top: 15px;
  padding:0 20px 10px;
  color: #343A54;
`;

export const Date = styled.Text`
	font-size: 11px;
  color: #343A54;
	font-style: italic;
  padding: 0 20px 0;
`;