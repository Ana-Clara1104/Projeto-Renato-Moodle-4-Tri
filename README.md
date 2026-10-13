# K-pop Groups (Expo + React Native Paper)

## 1. Pesquisa sobre a biblioteca — react-native-paper

> Preencha cada item com dados reais e a fonte (documentação, npm, GitHub). Não deixe sem link.

1. **Nome, documentação, repositório e licença:** _..._
2. **Quem mantém e data da última versão:** _..._
3. **Popularidade (estrelas no GitHub e downloads semanais no npm):** _..._
4. **Plataformas e compatibilidade com Expo (Expo Go ou development build):** _..._
5. **Instalação e configurações (PaperProvider, tema):** _..._
6. **Principais componentes (descreva pelo menos 5):** _..._
7. **Personalização (tema, cores, props):** _..._
8. **Pontos positivos e negativos que observei:** _..._
9. **Comparação com outra biblioteca (ex.: @rneui/themed ou @ui-kitten/components) e por que escolhi esta:** _..._

## 2. Projeto de exemplo

App que lista grupos de K-pop e permite classificar cada um como Favorito, Gostei, Pretendo ver ou Não gostei.

### Como executar

```bash
npm install
npx expo start
```

### Componentes da biblioteca usados

| Componente | Arquivo |
|---|---|
| `PaperProvider`, `MD3LightTheme` (tema próprio) | `App.js`, `src/theme/tema.js` |
| `Appbar` (Header, Content, Action, BackAction) | as 3 telas em `src/screens/` |
| `Searchbar` | `src/screens/ExplorarScreen.js` |
| `Card` (Title, Content) | `src/components/GrupoCard.js`, `src/screens/DetalhesScreen.js` |
| `Avatar.Text` | `GrupoCard.js`, `DetalhesScreen.js`, `MinhaListaScreen.js` |
| `Chip` | `GrupoCard.js`, `DetalhesScreen.js`, `MinhaListaScreen.js` |
| `Badge` | `src/screens/ExplorarScreen.js` |
| `List.Item`, `List.Icon` | `DetalhesScreen.js`, `MinhaListaScreen.js` |
| `Divider` | `src/screens/MinhaListaScreen.js` |
| `Button` | `src/screens/DetalhesScreen.js` |
| `Snackbar` | `src/screens/DetalhesScreen.js` |

### Capturas de tela

_Adicione aqui as imagens das 3 telas: Explorar, Detalhes e Minha lista._
