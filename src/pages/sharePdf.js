import React from 'react';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

import {pdf} from '../services/pdf-html';
import {Container, Text, Buttom} from '../style/styled';

const SharePdf = ({navigation}) => {
  const createPDF = async () => {
    let optionsPDF = {
      html: pdf.html,
      fileName: 'Teste',
    };

    let file;
    try {
      file = await RNHTMLtoPDF.convert(optionsPDF);
    } catch (e) {
      console.error('Erro ao criar arquivo', e);
    } finally {
      console.log('arquivo criado com sucesso');
    }

    // Verifica se o arquivo existe
    const fileExists = await RNFS.exists(file.filePath);
    if (!fileExists) {
      console.error(`O arquivo ${file.filePath} não foi criado com sucesso!`);
      return;
    }

    // Configuração do compartilhamento do arquivo
    const options = {
      type: 'application/pdf',
      url: `file://${file.filePath}`,
    };

    // Compartilha o arquivo
    try {
      await Share.open(options);
    } catch (error) {
      console.log('usuário cancelou ou houve um erro ao compatilhar', error);
    }
  };

  return (
    <Container>
      <Buttom title="Compartilhar arquivo" onPress={createPDF}>
        <Text>Compartilhar PDF</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text>Ir para pagina Main</Text>
      </Buttom>
    </Container>
  );
};

export default SharePdf;
