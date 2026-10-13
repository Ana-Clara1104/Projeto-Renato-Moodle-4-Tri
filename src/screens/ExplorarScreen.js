import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Badge, Chip, Searchbar, Text, useTheme } from 'react-native-paper';
import GrupoCard from '../components/GrupoCard';
import { GRUPOS } from '../data/grupos';
import { useLista } from '../context/ListaContext';

const SELOS = ['Todos', 'HYBE', 'SM', 'JYP', 'YG', 'Outras'];

export default function ExplorarScreen({ navigation }) {
  const { colors } = useTheme();
  const { statusPorGrupo } = useLista();
  const [busca, setBusca] = useState('');
  const [selo, setSelo] = useState('Todos');
  const totalSalvos = Object.keys(statusPorGrupo).length;

  const termo = busca.toLowerCase();
  const gruposFiltrados = GRUPOS.filter(
    (g) =>
      (selo === 'Todos' || g.selo === selo) &&
      (g.nome.toLowerCase().includes(termo) || g.empresa.toLowerCase().includes(termo))
  );

  return (
    <View style={[styles.tela, { backgroundColor: colors.background }]}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.Content title="Catálogo K-pop" color={colors.primary} titleStyle={styles.titulo} />
        <View>
          <Appbar.Action icon="playlist-star" onPress={() => navigation.navigate('MinhaLista')} />
          {totalSalvos > 0 && <Badge style={styles.badge}>{totalSalvos}</Badge>}
        </View>
      </Appbar.Header>

      <Searchbar
        placeholder="Buscar grupo ou empresa"
        value={busca}
        onChangeText={setBusca}
        elevation={0}
        style={[styles.busca, { backgroundColor: colors.surfaceVariant }]}
      />

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtros}>
          {SELOS.map((nome) => (
            <Chip
              key={nome}
              selected={selo === nome}
              mode={selo === nome ? 'flat' : 'outlined'}
              onPress={() => setSelo(nome)}
            >
              {nome}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <View style={styles.resumo}>
        <Text variant="labelLarge">{gruposFiltrados.length} grupos</Text>
        <Text variant="labelLarge" style={{ color: colors.primary }}>{totalSalvos} na sua lista</Text>
      </View>

      <FlatList
        data={gruposFiltrados}
        keyExtractor={(grupo) => grupo.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum grupo encontrado. Tente outro nome ou outra empresa.</Text>
        }
        renderItem={({ item }) => (
          <GrupoCard
            grupo={item}
            status={statusPorGrupo[item.id]}
            aoPressionar={() => navigation.navigate('Detalhes', { idGrupo: item.id })}
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
  badge: { position: 'absolute', top: 6, right: 6 },
  busca: { marginHorizontal: 16, marginBottom: 12 },
  filtros: { paddingHorizontal: 16, gap: 8 },
  resumo: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12 },
  lista: { paddingHorizontal: 16, paddingBottom: 32 },
  vazio: { textAlign: 'center', padding: 24 },
});
