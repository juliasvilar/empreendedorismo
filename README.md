# ⚡ EletroLink — MVP Web

Protótipo navegável do **EletroLink**, uma plataforma de **navegação preditiva e agregação neutra de eletropostos** que reúne carregadores de múltiplas redes em um só lugar, calcula o menor desvio de rota e utiliza check-outs colaborativos para estimar a liberação de vagas em tempo real.

Projeto desenvolvido para a disciplina de **Empreendedorismo Tecnológico (UNICAP)**.

---

## 📍 Escopo Piloto e Premissas da Demonstração

Para tornar os testes e a apresentação do MVP reproduzíveis, previsíveis e sem dependência de backend ou credenciais pagas, a versão web (`eletrolink-site`) opera sobre um **recorte geográfico real** e um **perfil estático pré-configurado**:

- **Corredor Urbano Piloto:** **Boa Viagem, Recife – PE**, com **9 eletropostos reais** mapeados na região (redes *Tupi / Zon Charge*, *Duo Eletroposto*, *Stop Seek*, *EZvolt*, *Porsche Destination*, *Audi Charging*, *BMW Public Charging* e ponto em manutenção na *Av. Conselheiro Aguiar, 2860*).
- **Posição Fixa do Motorista (`Você`):** o usuário inicia em uma coordenada fixa central de Boa Viagem (`-8.1235, -34.9032`), identificada no mapa por um **pin escuro exclusivo com a etiqueta "Você"**. Todos os cálculos de distância real (Haversine), tempo estimado de carro/a pé, círculo de raio de busca e menor desvio de rota partem dessa posição.
- **Perfil Estático (sem login):** a aplicação simula um motorista já autenticado para agilizar a demonstração:
  - **Veículo configurado:** `BYD Dolphin` com conectores **CCS2 & Tipo 2** (alterável a qualquer momento no botão **Meu Carro** no cabeçalho).
  - **Histórico e gamificação:** `148,6 kWh` consumidos no mês, `820 pts` na comunidade (*Colaborador Ouro*) e histórico de recargas anteriores.
  - **Persistência local:** filtros aplicados, alertas ativados, sessões de recarga e check-outs ficam salvos no navegador (`localStorage`). Para reiniciar os dados antes de uma nova demonstração, basta clicar no **avatar** (ou em **Minhas Recargas** no rodapé) e selecionar **"Restaurar dados iniciais da demonstração"**.

---

## 🎯 Como o Site Contempla as Funcionalidades do MVP

| ID | Funcionalidade do MVP | Como está implementada no site |
| :--- | :--- | :--- |
| **F1** | **Mapa de eletropostos multirrede com marcadores** | Mapa interativo real com **Leaflet** centrado em Boa Viagem (camadas alternáveis entre *Mapa Clean*, *OpenStreetMap* e *Satélite*), marcadores customizados por status (**Disponível**, **Previsto**, **Ultra DC** e **Manutenção**), popup interativo sincronizado com os cards da lista lateral, controles de zoom/centralização e busca rápida (`Ctrl + K` / `⌘K`). |
| **F3** | **Roteamento e desvio mínimo** | Botão **Planejar Rota** em destaque no cabeçalho de todas as telas: permite escolher destinos reais de Recife/Boa Viagem (*Aeroporto*, *Shopping Recife*, *Parque Dona Lindu*, *Segundo Jardim* e *Shopping RioMar*) e ordena os eletropostos pelo **menor desvio em minutos** no percurso. Na tela de detalhes do posto, exibe mapa de aproximação com rota de carro e a pé + botão **Ir até aqui (Google Maps / Waze)** com rota real. |
| **F4** | **Previsão estatística e alerta de liberação da vaga** | Estações parcialmente ocupadas ou ocupadas exibem o tempo estimado de liberação (ex.: `Livre em ~12m`), horário previsto, nível de confiança preditiva baseado em check-outs recentes e botão **Atualizar** para recálculo. É possível ativar o botão **Avisar** (ou testar o gatilho **Simular check-out** no banner superior do mapa) para acompanhar em tempo real a transição **`Ocupado → Liberando → Livre`** com notificação (toast). |
| **F5** | **Check-out ágil em 1 toque** | Ao clicar em **Estou aqui e comecei a recarregar** na página do eletroposto, **1 conector livre é ocupado imediatamente por você** (reduzindo a contagem de vagas disponíveis no mapa e na lista). Caso o usuário feche a janela da sessão pelo **X** sem finalizar, uma **barra flutuante fixa na parte inferior** permanece visível em todo o site lembrando que há uma recarga ativa, com acesso rápido para abrir a sessão ou fazer o **Check-out em 1 toque** (**Terminei, liberar o carregador**), liberando a vaga, somando `+15 pts` e recalibrando a previsão. |
| **F6** | **Filtros rápidos e avançados (plugue, potência, tarifa e raio)** | Chips rápidos visíveis na barra lateral (**Livres agora**, **Ultra-rápido DC**, **Tipo 2**, **Gratuito**) com destaque colorido quando selecionados, além do painel completo de **Filtros** (tipo de plugue `CCS2` / `Tipo 2` / `CHAdeMO`, potência mínima, tarifa gratuita/econômica e slider de raio de `300m` a `3km`) que atualiza ao vivo o círculo de raio no mapa, os marcadores visíveis e a estimativa de probabilidade de vaga livre. |

---

## ▶️ Como Abrir o Site

O projeto é 100% front-end estático (HTML, CSS e JavaScript puro), sem necessidade de instalar dependências ou rodar servidor:

1. Acesse a pasta `eletrolink-site/`.
2. Abra o arquivo `index.html` diretamente no navegador (Chrome, Edge ou Firefox).

*(Recomendado ter conexão com a internet para carregar os tiles do mapa interativo e as fontes.)*

---

## 🧪 Roteiro Passo a Passo para Testar o MVP

Siga o fluxo abaixo diretamente pela interface do site:

### 1. Explorar o Mapa e os Eletropostos (F1)
1. Na tela inicial, localize o **pin escuro "Você"** no centro de Boa Viagem e os marcadores coloridos dos 9 eletropostos ao redor.
2. Clique em diferentes **cards na lista lateral** ou diretamente nos **marcadores do mapa** para ver a sincronização automática, distância calculada e popup com resumo do posto.
3. Teste os controles no canto inferior direito do mapa: **zoom (`+` / `-`)**, **centralizar em Boa Viagem** e **alternar camadas** (*Mapa Clean*, *OpenStreetMap* e *Satélite*).
4. Teste a **busca lateral** (ex.: digite `Porsche`, `Tupi` ou `CCS2`) ou clique na barra superior **"Para onde você vai?"** (atalho `Ctrl + K`).

### 2. Planejar Rota com Menor Desvio (F3)
1. Clique no botão **`Planejar Rota`** no cabeçalho superior.
2. Alterne entre os destinos disponíveis (ex.: *Aeroporto Internacional do Recife* ou *Parque Dona Lindu*) e observe o ranking dos eletropostos recalculando o **desvio em minutos** no caminho.
3. Clique em qualquer estação sugerida para abrir os detalhes e o mapa de aproximação.

### 3. Testar Filtros Rápidos e Avançados (F6)
1. Na tela inicial, clique nos chips **Livres agora**, **Ultra-rápido DC**, **Tipo 2** e **Gratuito** — perceba a mudança de cor nos filtros ativos e a atualização instantânea dos cards e pins.
2. Clique no botão **`Filtros`** (ou no ícone de ajustes ao lado da busca) para abrir o painel avançado.
3. Altere os tipos de plugue (`CCS2`, `Tipo 2`, `CHAdeMO`), a potência mínima, a tarifa e arraste o **slider de raio (`300m` a `3km`)** observando o mapa ao fundo, a probabilidade de disponibilidade e o contador de resultados mudarem em tempo real.
4. Clique em **`Aplicar Filtros`** para retornar ao mapa com o recorte aplicado. *(Dica: selecionar apenas `CHAdeMO` demonstra o estado de "Nenhum eletroposto encontrado" com o botão **Redefinir filtros**.)*

### 4. Testar Previsão e Alerta de Liberação em Tempo Real (F4)
1. Na lista lateral, selecione um eletroposto com selo âmbar de previsão (como **Duo Eletroposto – Boa Viagem** ou **Tupi Charging Station**).
2. Clique em **`Avisar`** no card para ativar o alerta de vaga livre — ou clique diretamente em **`Simular check-out`** no banner superior do mapa.
3. Acompanhe a notificação em tempo real e a mudança visual do status no mapa e na lista: **`Ocupado → Liberando... → Livre`**.
4. Dentro dos detalhes de um posto previsto, teste também o botão **`Atualizar`** no cartão de Previsão Preditiva.

### 5. Testar Detalhes, Ocupação Real e Check-out em 1 Toque (F3 + F5)
1. Em um posto com vaga livre (ex.: **Zon Charge** ou **EZvolt**), clique em **`Ver Detalhes e Rota`**.
2. Observe o mapa de aproximação (rota de carro em azul e a pé em verde tracejado) e teste o botão **`Ir até aqui (Google Maps / Waze)`** para abrir a navegação externa real.
3. Clique em **`Estou aqui e comecei a recarregar`** para iniciar a sessão ativa.
4. **Teste de resiliência (fechar sem finalizar):** clique no **`X`** no canto superior direito do modal da sessão para voltar ao mapa. Observe que:
   - A quantidade de vagas livres do posto foi **reduzida em 1** (pois você está ocupando um conector).
   - Uma **barra flutuante escura** aparece na parte inferior da tela lembrando que sua recarga está ativa, com os botões **`Ver sessão`** e **`Terminei (Check-out)`**.
5. Finalize a recarga clicando em **`Terminei, liberar o carregador`** (na tela da sessão) ou **`Terminei (Check-out)`** (na barra flutuante).
6. Confirme que a vaga volta a ficar disponível no mapa, que **`+15 pts`** foram adicionados e que a recarga aparece registrada ao clicar no **avatar** ou em **Minhas Recargas** no rodapé.

---

## 📂 Estrutura do Repositório

```text
empreendedorismo/
├── README.md
├── Cronograma de Desenvolvimento e Matriz de Responsabilidades (MVP EletroLink).pdf
├── eletrolink-site/        # Protótipo Web Desktop interativo (foco principal do MVP)
│   ├── index.html          # Mapa dinâmico + lista de estações + chips rápidos
│   ├── filtros.html        # Painel avançado de filtros com preview no mapa
│   ├── detalhes.html       # Detalhes da estação, previsão preditiva e rota de aproximação
│   ├── checkout.html       # Sessão de recarga ativa e check-out em 1 toque
│   ├── style.css           # Design system compartilhado
│   └── app.js              # Base de Boa Viagem, mapa Leaflet, filtros, previsão e estado
└── eletrolink-mobile/      # Telas conceituais da versão mobile
```

---

## 👥 Equipe

- **Ana Beatriz de Lima Romero** — Tech Lead & Engenharia de Dados / Backend
- **Júlia Saldanha Vilar** — Product Designer (UI/UX) & IA Prototyping
- **Pedro Henrique Afonso dos Santos** — Frontend & Integração de Mapas
- **Pedro Marques Bezerra dos Santos** — Product Manager & Engenharia de Roteamento
- **Rafael Viana Angelim** — QA Engineer & Frontend de Interação
