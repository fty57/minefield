import React from 'react'
import { Dimensions } from "react-native"

const params = {
     blockSize: 30,       // Tamanho do bloco
     borderSize: 5,       // Tamanho da borda
     fontSize: 15,        // Tamanho da fonte
     headerRatio: 0.15,   // Proporção do painel superior na tela
     difficultLevel: 0.1, // Dificuldade do jogo
     getColumnsAmount(){  // Saber quantos blocos consigo colocar no X e no Y coluna
          const width = Dimensions.get("window").width
          return Math.floor(width / this.blockSize) // Math.floor arredonda pra baixo
     },
     getRowsAmount(){ // Linha
          const totalHeight = Dimensions.get("window").height
          const boardHeight = totalHeight * (1 - this.headerRatio)
          return Math.floor(boardHeight / this.blockSize) // Quantidade de blocos que posso armazenar
     }
}

export default params;
