import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Card, List, Snackbar, Text, useTheme } from 'react-native-paper';
import StatusChip from '../components/StatusChip';
import { STATUS, buscarStatus } from '../constants/status';
import { GRUPOS } from '../data/grupos';
import { useLista } from '../context/ListaContext';

export default function DetalhesScreen({ route, navigation }) {
  const { colors } = useTheme();
  const { statusPorGrupo, definirStatus } = useLista();
  const [mensagem, setMensagem] = useState('');

  const grupo = GRUPOS.find((g) => g.id === route.params.idGrupo);
  const statusAtual = statusPorGrupo[grupo.id];

  const escolherStatus = (valor) => {
    definirStatus(grupo.id, valor);
    setMensagem(
      statusAtual === valor ? 'Removido da sua lista' : `Marcado como "${buscarStatus(valor).label}"`
    );
  };

  return (
    <View style={[styles.tela, { backgroundColor: colors.background }]}>
      <Appbar.Header style={{ backgroundColor: grupo.cor }}>
        <Appbar.BackAction color="#FFFFFF" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Detalhes" color="#FFFFFF" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={[styles.hero, { backgroundColor: grupo.cor }]}>
          <Avatar.Text size={88} label={grupo.sigla} color="#FFFFFF" style={styles.avatar} />
          <Text variant="headlineMedium" style={styles.nome}>{grupo.nome}</Text>
          <Text variant="bodyMedium" style={styles.fandom}>Fandom: {grupo.fandom}</Text>
        </View>

        <View style={styles.corpo}>
          <Card style={styles.card}>
            <List.Item title="Empresa" description={grupo.empresa} left={(p) => <List.Icon {...p} icon="domain" />} />
            <List.Item title="Estreia" description={String(grupo.estreia)} left={(p) => <List.Icon {...p} icon="calendar" />} />
            <List.Item title="Integrantes" description={String(grupo.integrantes)} left={(p) => <List.Icon {...p} icon="account-group" />} />
            <List.Item title="Música de destaque" description={grupo.destaque} left={(p) => <List.Icon {...p} icon="music" />} />
          </Card>

          <Text variant="titleMedium" style={styles.pergunta}>O que você achou?</Text>
          <View style={styles.chips}>
            {STATUS.map((s) => (
              <StatusChip
                key={s.value}
                status={s}
                ativo={statusAtual === s.value}
                aoPressionar={() => escolherStatus(s.value)}
              />
            ))}
          </View>

          <Button
            mode="contained"
            icon="playlist-star"
            style={styles.botao}
            contentStyle={styles.botaoConteudo}
            onPress={() => navigation.navigate('MinhaLista')}
          >
            Ver minha lista
          </Button>
        </View>
      </ScrollView>

      <Snackbar visible={!!mensagem} onDismiss={() => setMensagem('')} duration={2000}>
        {mensagem}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1 },
  conteudo: { paddingBottom: 32 },
  hero: { alignItems: 'center', paddingTop: 8, paddingBottom: 32, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  avatar: { backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 12 },
  nome: { color: '#FFFFFF', fontWeight: '900', letterSpacing: 0.5, textAlign: 'center', paddingHorizontal: 16 },
  fandom: { color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  corpo: { padding: 16, paddingTop: 20 },
  card: { marginBottom: 24 },
  pergunta: { marginBottom: 12, fontWeight: '700' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  botao: { marginTop: 28 },
  botaoConteudo: { paddingVertical: 6 },
});
