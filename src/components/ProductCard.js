import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  background-color: 	#FFEFD5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductName = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 10px;
`;


const BuyButton = styled.button`
  background-color: #FFA07A;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF6347;
  }

  &:active {
    background-color: #FF4500;
  }
`;

const ProductCard = () => {
  return (
    <Card>
      <ProductName>Tacon Cristal</ProductName>
      <p>$99.999</p>
      <BuyButton>Comprar Ahora</BuyButton>
    </Card>
  );
};

export default ProductCard;
