import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: column;

`;

export const Card = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items:center;
	padding: 25px 15px 15px;

	border-bottom-width: 0.5px;
	border-bottom-color: #69708D;

`;

export const Info = styled.View`
	max-width: 62%;
`;

export const Title = styled.Text`
	color: #343A54;

	font-size: 20px;
	font-weight: bold;

	margin-bottom: 10px;
`;

export const Options = styled.View`
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: flex-end;
	
`;

export const Date = styled.Text`
	font-size: 11px;
	font-style: italic;
	margin-top:10px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  background: #343A54;
  width: 14%;
  height: 9%;
  border-radius: 100px;
  

  z-index: 11;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 15px 15px;
`;