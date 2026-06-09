# TaskFlow 

App de gerenciamento de tarefas (TODO) desenvolvido com React Native + Expo Bare Workflow como teste técnico para vaga de Estagiário.

---

## Screenshots

<img width="300" height="720" alt="LockPage" src="https://github.com/user-attachments/assets/d36a66c9-f161-488e-9813-6d2839c78dfc" />
<img width="300" height="720" alt="BemVindo" src="https://github.com/user-attachments/assets/ef0889e3-f5f9-4b84-9573-1ea0baec199b" />
<img width="300" height="720" alt="Fav" src="https://github.com/user-attachments/assets/ef33547f-0628-405b-9cf2-d42547a95101" />
<img width="300" height="720" alt="Label" src="https://github.com/user-attachments/assets/efa8504a-47a5-4b4d-a6b8-163591277654" />

---

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Android Studio + Android SDK
- Variável de ambiente `ANDROID_HOME` configurada
- Na pasta `android/` do projeto, crie o arquivo `local.properties` com o caminho do seu SDK:
- JDK 17
- Expo CLI
  
```properties
# Windows
sdk.dir=C:\\Users\\SeuUsuario\\AppData\\Local\\Android\\Sdk

```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gilvan-almeida/TesteReactNative
cd TesteReactNative

# Instale as dependências
npm install

#

# Rode no Android
npx expo run:android
```

### Dispositivo físico (recomendado para biometria)
Para testar a autenticação biométrica é necessário um dispositivo físico com:
- **Depuração USB habilitada** — Configurações → Sobre o telefone → toque 7x em "Número da versão" → Configurações do desenvolvedor → Depuração USB
- Biometria cadastrada no dispositivo

> Testado em **Samsung Galaxy A07 — Android 13**


### Verificar TypeScript

```bash
npx tsc --noEmit
```

---

## Stack e Bibliotecas

### Obrigatórias
| Biblioteca | Versão | Uso |
|---|---|---|
| React Native | 0.76+ | Framework principal |
| Expo (Bare Workflow) | SDK 52+ | Plataforma |
| TypeScript | 5.x | Tipagem estática |
| React Navigation | 6.x | Navegação Stack + Tab |
| expo-local-authentication | última | Biometria / PIN |
| React Native Reanimated | 3.x | Animações |
| styled-components | 6.x | Estilização com tema |
| AsyncStorage | última | Persistência local |

### Adicionais (justificadas)
| Biblioteca | Motivo |
|---|---|
| `lucide-react-native` | Ícones SVG modernos sem dependência de fonte, evitando problemas de carregamento do `@expo/vector-icons` |
| `react-native-calendars` | Seletor de range de datas com UI visual — requisito T-10 |
| `react-native-safe-area-context` | Controle preciso de SafeArea em todas as telas |
| `expo-crypto` | Geração de UUIDs para IDs das tarefas e labels |

---

##  Arquitetura e Decisões

### Estrutura de pastas

```
src/
├── components/         # Componentes reutilizáveis
│   ├── DateCard/       # Seletor de range de datas
│   ├── SearchBar/      # Barra de busca
│   ├── SelectBox/      # Chips de filtro horizontal
│   └── TaskCard/       # Card de tarefa com ações
├── config/             # Constantes e configurações
│   ├── AuthConfig.ts   # Tempos e limites de autenticação
│   └── LabelConfig.ts  # Labels padrão e cores disponíveis
├── context/            # Contextos React
│   └── TaskContext.tsx # Provider com detecção de erro de storage
├── database/           # Chaves do AsyncStorage
├── hooks/              # Hooks customizados
│   ├── AuthBiometricHook.ts   # Lógica de biometria + tentativas + bloqueio
│   ├── AuthPinHook.ts         # Lógica do PIN de 4 dígitos
│   ├── BackgroundHookLock.ts  # Bloqueio após 2min em background
│   ├── LabelHook.ts           # CRUD de labels
│   └── TaskHook.ts            # CRUD de tarefas + filtros + ordenação
├── pages/              # Telas do app
│   ├── CreateLabel/    # Criar/editar label
│   ├── CreateTaskPage/ # Criar/editar tarefa (reuso com isEditing)
│   ├── ErrorPage/      # Tela de erro de storage com reset
│   ├── FavoritePage/   # Tarefas favoritas
│   ├── HomePage/       # Lista principal de tarefas
│   ├── LabelPage/      # Gerenciamento de labels
│   ├── LockPage/       # Tela de bloqueio biométrico
│   └── PasswordPage/   # Fallback de PIN
├── routers/            # Configuração de navegação
│   ├── AppRouter.tsx   # Stack principal
│   ├── AuthRouter.tsx  # Stack de autenticação
│   ├── TabNavigation.tsx # Tab inferior
│   └── index.tsx       # Raiz — alterna Auth/App
├── service/            # Camada de serviços
│   ├── AuthBiometricService.ts
│   ├── LabelService.ts
│   └── TasksServices.ts
├── styles/             # Tema e estilos globais
│   ├── global.ts       # Componentes globais reutilizáveis
│   └── theme.ts        # Design tokens (cores, espaçamentos, tipografia)
├── types/              # Tipos TypeScript
└── utils/              # Utilitários (formatDate)
```

### Principais decisões de arquitetura

**1. Reuso de tela Create/Edit**
A `CreateTaskPage` serve tanto para criar quanto editar tarefas. A flag `isEditing` é derivada de `route.params?.task` — se vier uma task, está editando; se não, está criando. Isso evita duplicação de código.

**2. Hooks separados por domínio**
`useTask` e `useLabel` encapsulam toda a lógica de negócio. O contexto apenas os instancia e provê — sem lógica própria.

**3. Detecção de erro de storage no Provider**
O `AppProvider` detecta `storageError` de qualquer hook e renderiza a `ErrorPage` automaticamente, sem precisar passar props pela árvore de componentes.

**4. Autenticação condicional no router raiz**
O `Routes` controla um estado `verifyAuthentic` booleano. Se `false`, renderiza `AuthRouter`; se `true`, renderiza `AppRouter`. O `useBackgroundHookLock` seta para `false` após 2 minutos em background.

**5. styled-components com tema centralizado**
Todos os estilos usam `theme.colors`, `theme.spacing`, `theme.fontSize` e `theme.borderRadius`. Zero cores ou tamanhos hardcoded nos componentes — qualquer mudança de design é feita em um único arquivo.

**6. Labels padrão com IDs fixos**
As labels padrão (Pessoal, Trabalho, Estudos) usam IDs fixos ao invés de `randomUUID()`. Isso evita duplicatas se o usuário reinstalar o app e o storage for resetado.

---

## ✅ Funcionalidades implementadas

### Autenticação
- [x] B-01 — Tela de bloqueio ao abrir o app com biometria automática
- [x] B-02 — Máximo 3 tentativas, bloqueio de 30 segundos com countdown
- [x] B-03 — Fallback para PIN de 4 dígitos se biometria não disponível
- [x] B-04 — Bloqueio automático após 2 minutos em background
- [x] B-05 — Animação de transição (scale + fade) ao autenticar

### Tarefas
- [x] T-01 — Criar tarefa com título, descrição, datas e label
- [x] T-02 — Validação de formulário (título obrigatório, data fim >= início)
- [x] T-03 — Editar tarefa existente (mesma tela de criação com isEditing)
- [x] T-04 — Marcar como concluída com feedback visual (tachado + ícone verde)
- [x] T-05 — Excluir com confirmação via Alert dialog
- [x] T-06 — Favoritar/desfavoritar com feedback visual
- [x] T-07 — Mover tarefa entre labels via modal (long-press no card)
- [x] T-08 — Filtros: todas, hoje, favoritas, concluídas, por label
- [x] T-09 — Ordenação: por data, por criação, alfabética
- [x] T-10 — Seletor de range de datas com calendário visual

### Persistência
- [x] P-01 — Tarefas persistem após fechar o app
- [x] P-02 — Labels persistem
- [x] P-03 — Estado de favorito, concluído e label persistem
- [x] P-04 — Tela de erro amigável com opção de reset total

### Labels
- [x] L-01 — Labels padrão: Pessoal, Trabalho, Estudos
- [x] L-02 — Criar label com nome e cor personalizada
- [x] L-03 — Renomear e excluir labels (tarefas vão para sem categoria)
- [x] L-04 — Mover tarefa entre labels via modal
- [x] L-05 — Contador de tarefas por label

---

##  Observações

### Biometria no emulador
A biometria não funciona em emuladores Android sem configuração especial. Para testar:
1. No emulador: **Settings → Security → Fingerprint** e configure uma digital virtual
2. Ou use um dispositivo físico — recomendado para testar o fluxo completo

O fallback de PIN funciona normalmente em qualquer ambiente senha "1234".

### Animações
As animações de swipe (A-01), favoritar com spring (A-02), checkbox com fade (A-03), entrada/saída de itens (A-04/A-05) e transição de label (A-06) não foram implementadas com Reanimated 3 para evitar conflitos com os gestos nativos do `TouchableOpacity` (long-press para mover label). A animação de autenticação (A-07) foi implementada com a Animated API.

##  Aviso sobre TypeScript

O projeto apresenta erros de tipo relacionados ao `styled-components` 
com a declaração do `DefaultTheme`. O app funciona normalmente em runtime.
Este é um problema de compatibilidade entre 
`styled-components/native` e o TypeScript strict mode no Expo Bare que não consegui resolver.


---

##  Gerando o APK

```bash
# Via EAS Build (recomendado)
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

---
## Como Instalar e Testar o Aplicativo (Android)

-Fazer Download do APK:** Acesse a aba Releases
-Permissão de Fontes Desconhecidas:Ao clicar no arquivo para instalar, o Android poderá solicitar uma permissão de segurança.
-Aceite de fontes Desconhecidas, clique em *Instalar* e o aplicativo estará pronto!


