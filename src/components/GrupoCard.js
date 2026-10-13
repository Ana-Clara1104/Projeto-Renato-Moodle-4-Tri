import { StyleSheet, View } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';
import { buscarStatus } from '../constants/status';
import StatusChip from './StatusChip';

export default function GrupoCard({ grupo, status, aoPressionar }) {
  const infoStatus = buscarStatus(status);

  return (
    <Card style={styles.card} onPress={aoPressionar}>
      <View style={[styles.faixa, { backgroundColor: grupo.cor }]}>
        <Text style={styles.marcaDagua}>{grupo.sigla}</Text>
        <Text variant="titleLarge" style={styles.nome} numberOfLines={1}>{grupo.nome}</Text>
        <Text variant="labelMedium" style={styles.estreia}>estreia em {grupo.estreia}</Text>
      </View>
      <Card.Content style={styles.corpo}>
        <Text variant="bodyMedium" style={styles.empresa}>{grupo.empresa}</Text>
        <View style={styles.chips}>
          <Chip compact icon="account-group">{grupo.integrantes} integrantes</Chip>
          {infoStatus && <StatusChip status={infoStatus} compact />}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 14 },
  faixa: { padding: 16, borderTopLeftRadius: 18, borderTopRightRadius: 18, overflow: 'hidden' },
  marcaDagua: { position: 'absolute', right: 12, top: -6, fontSize: 76, fontWeight: '900', color: 'rgba(255,255,255,0.22)' },
  nome: { color: '#FFFFFF', fontWeight: '800', letterSpacing: 0.5 },
  estreia: { color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  corpo: { paddingTop: 12, paddingBottom: 14 },
  empresa: { marginBottom: 10, opacity: 0.8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
