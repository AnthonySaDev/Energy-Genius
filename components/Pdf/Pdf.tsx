import { Document, Page, Text, Image, StyleSheet, View } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#059669',
    color: '#ffffff',
    padding: 8,
    fontWeight: 'bold',
  },
  image: {
    width: '400px',
    height: `${(400 * 9) / 16}px`, 
    marginBottom: 20,
  },
  textBlack: {
    fontSize: 12,
    marginBottom: 10,
    color: '#000000', 
  },
  textGreen: {
    fontSize: 12,
    marginBottom: 10,
    color: '#059669', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export interface IData {
    user: string;
    address: string;
    cpf: string;
    installationNumber: string;
    referenceMonth: string;
    emissionDate: string;
    dueDate: string;
    amountToPay: string;
    economy: string;
    discount: string;
    currentConsumption: string;
    energyConsumption: number;
    totalCost: string;
    graphImage: string;
}

export const Pdf = ({ data }: { data: IData }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>Energy Genius</Text>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Endereço: </Text><Text style={styles.textGreen}>{data.address}</Text></View>
        <View style={styles.textBlack}><Text>CPF: </Text><Text style={styles.textGreen}>{data.cpf}</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Número de instalação: </Text><Text style={styles.textGreen}>{data.installationNumber}</Text></View>
        <View style={styles.textBlack}><Text>Mês de referência: </Text><Text style={styles.textGreen}>{data.referenceMonth}</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Data de emissão: </Text><Text style={styles.textGreen}>{data.emissionDate}</Text></View>
        <View style={styles.textBlack}><Text>Data de vencimento: </Text><Text style={styles.textGreen}>{data.dueDate}</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Valor a pagar: </Text><Text style={styles.textGreen}>{data.amountToPay}</Text></View>
        <View style={styles.textBlack}><Text>Economia: </Text><Text style={styles.textGreen}>{data.economy}</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Desconto: </Text><Text style={styles.textGreen}>{data.discount}</Text></View>
        <View style={styles.textBlack}><Text>Consumo atual: </Text><Text style={styles.textGreen}>{data.currentConsumption}</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlack}><Text>Usuário: </Text><Text style={styles.textGreen}>{data.user}</Text></View>
        <View style={styles.textBlack}><Text>Consumo de energia: </Text><Text style={styles.textGreen}>{data.energyConsumption} kWh</Text></View>
      </View>
      <View style={[styles.textBlack, {backgroundColor: '#059669', color: '#ffffff', padding: 8, fontWeight: 'bold', borderRadius: 5}]}><Text>Custo total: </Text><Text >R$ {data.totalCost}</Text></View>
      <View style={{marginTop: 20, textAlign: 'center', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textGreen}>Indicativos de economia e energia limpa</Text>
      <Image src={data.graphImage} style={styles.image} />
      </View>
    </Page>

  </Document>
);
