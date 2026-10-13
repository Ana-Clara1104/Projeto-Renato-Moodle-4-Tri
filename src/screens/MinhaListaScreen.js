import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Divider, List, Text, useTheme } from 'react-native-paper';
import StatusChip from '../components/StatusChip';
import { STATUS } from '../constants/status';
import { GRUPOS } from '../data/grupos';
import { useLista } from '../context/ListaContext';

export default function MinhaListaScreen({ navigation }) {
  const { colors } = useTheme();
  const { statusPorGrupo } = useLista();
  const [filtro, setFiltro] = useState('favorito');

  const gruposDoFiltro = GRUPOS.filter((g) => statusPorGrupo[g.id] === filtro);
  const contar = (valor) => Object.values(statusPorGrupo).filter((s) => s === valor).length;

  return (
    <View style={[styles.tela, { backgroundColor: colors.background }]}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Minha lista" color={colors.primary} titleStyle={styles.titulo} />
      </Appbar.Header>

      <View style={styles.filtros}>
        {STATUS.map((s) => (
          <StatusChip
            key={s.value}
            status={s}
            ativo={filtro === s.value}
            rotulo={`${s.label} (${contar(s.value)})`}
            aoPressionar={() => setFiltro(s.value)}
          />
        ))}
      </View>

      <FlatList
        data={gruposDoFiltro}
        keyExtractor={(grupo) => grupo.id}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum grupo aqui ainda. Abra um grupo e marque como você se sente sobre ele.</Text>
        }
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            titleStyle={styles.nomeItem}
            description={`${item.empresa} • ${item.destaque}`}
            left={(props) => (
              <Avatar.Text size={44} label={item.sigla} color="#FFFFFF" style={[props.style, { backgroundColor: item.cor }]} />
            )}
            onPress={() => navigation.navigate('Detalhes', { idGrupo: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1 },
  cabecalho: { backgroundColor: 'transparent' },
  titulo: { fontWeight: '900', letterSpacing: 1 },
  filtros: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, padding: 16 },
  nomeItem: { fontWeight: '700' },
  vazio: { textAlign: 'center', padding: 24 },
});
