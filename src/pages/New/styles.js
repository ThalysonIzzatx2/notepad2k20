import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: #fff;
  justify-content: center;
`;

export const TitleInput = styled.TextInput`
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

export const NoteInput = styled.TextInput`
  margin-top: 15px;
  padding:0 20px 10px;
  color: #343A54;
`;

export const DateText = styled.Text`
	font-size: 11px;
  color: #343A54;
	font-style: italic;
  padding: 0 20px 0;
`;