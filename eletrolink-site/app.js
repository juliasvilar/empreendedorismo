/* EletroLink MVP – Boa Viagem, Recife (F1, F3, F4, F5, F6) */
(function () {
  'use strict';

  const STORAGE_KEY = 'eletrolink_mvp_bv_v2';
  const USER_POS = { lat: -8.1235, lng: -34.9032, label: 'Boa Viagem, Recife – PE' };

  const DEFAULT_STATIONS = [
    {
      id: 'zon-charge',
      code: 'TUP-0465',
      name: 'Zon Charge Charging Station',
      shortName: 'Zon Charge',
      network: 'Tupi / Zon Charge',
      networkBadge: 'Rede Tupi • Zon Charge',
      neighborhood: 'Boa Viagem',
      address: 'R. Ernesto de Paula Santos, 465 - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://tupimob.com/',
      lat: -8.1257,
      lng: -34.9078,
      status: 'available',
      statusNote: '2/2 Livres',
      totemLabel: 'Estacionamento Térreo • Vagas 01 e 02',
      photoVerified: 'Foto verificada há 2 dias',
      accessTip: 'Acesso direto pela R. Ernesto de Paula Santos, 465. Totem DC 60 kW com 2 conectores CCS2 disponíveis 24h.',
      accessGate: 'R. Ernesto de Paula Santos, 465 • Vagas 01-02',
      approachShort: '20m após o acesso da rua',
      promoBadge: 'Aberto 24h',
      detourMin: 2,
      telemetry: { maxKw: 60, successRate: '99.4%', rating: '5.0', charges: 124, currentType: 'Corrente Contínua' },
      prediction: {
        etaMinutes: 0,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 8,
        lastUpdatedBy: '@camila_bv',
        lastUpdatedMin: 2,
        basis: '2/2 conectores CCS2 60 kW livres agora, validado por 8 check-outs recentes.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento térreo' },
        { icon: 'barrier-off', label: 'Sem cancela' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'check-circle', label: 'Nota 5.0 (Google)' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: CCS2',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 1.95,
          free: false,
          status: 'available',
          estimateText: 'Estimativa típica: +140 km em 20 min',
          tagRight: 'Tupi App / Plug & Charge'
        },
        {
          id: 'c2',
          name: 'Conector 2: CCS2',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 1.95,
          free: false,
          status: 'available',
          estimateText: 'Estimativa típica: +140 km em 20 min',
          tagRight: 'Livre Agora'
        }
      ]
    },
    {
      id: 'duo-eletroposto',
      code: 'DUO-0161',
      name: 'Duo Eletroposto – Boa Viagem',
      shortName: 'Duo Eletroposto',
      network: 'Tupi / Duo',
      networkBadge: 'Rede Tupi • Duo',
      neighborhood: 'Boa Viagem',
      address: 'R. Padre Cabral, 161 - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://tupimob.com/',
      lat: -8.1338,
      lng: -34.9068,
      status: 'predicted',
      statusNote: 'Livre em ~12m',
      totemLabel: 'Pátio Duo • Totens 60 kW e 40 kW',
      photoVerified: 'Foto verificada há 1 dia',
      accessTip: 'Localizado na R. Padre Cabral, 161, próximo ao corredor sul de Boa Viagem. Aberto 24h com avaliação 5.0 (20 reviews).',
      accessGate: 'R. Padre Cabral, 161 • Baia Rápida',
      approachShort: '15m após a entrada da R. Padre Cabral',
      promoBadge: '5.0 ★ (20)',
      detourMin: 3,
      telemetry: { maxKw: 60, successRate: '99.6%', rating: '5.0', charges: 210, currentType: 'Corrente Contínua' },
      prediction: {
        etaMinutes: 12,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 9,
        lastUpdatedBy: '@marcos_ev',
        lastUpdatedMin: 2,
        basis: 'CCS2 40 kW (1/1) livre agora; CCS2 60 kW (0/2) com liberação estimada em ~12 min por 9 check-outs recentes.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento térreo' },
        { icon: 'barrier-off', label: 'Sem cancela' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'wifi', label: 'Wi-Fi Livre no local' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: CCS2 (40 kW)',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 40,
          cable: 'Cabo Preso',
          pricePerKwh: 1.89,
          free: false,
          status: 'available',
          estimateText: '1/1 disponível agora • +100 km em 22 min',
          tagRight: 'LIVRE AGORA'
        },
        {
          id: 'c2',
          name: 'Conector 2: CCS2 (60 kW)',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 1.99,
          free: false,
          status: 'occupied',
          etaMinutes: 12,
          vehicle: 'BYD Dolphin',
          progress: 84
        }
      ]
    },
    {
      id: 'stop-seek',
      code: 'STK-0153',
      name: 'Stop Seek Charging Station',
      shortName: 'Stop Seek',
      network: 'Stop Seek',
      networkBadge: 'Hub Stop Seek',
      neighborhood: 'Boa Viagem',
      address: 'R. Ernesto de Paula Santos, 153 - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://stopseek.com.br/',
      lat: -8.1259,
      lng: -34.9094,
      status: 'ultra',
      statusNote: '1 Vaga Livre',
      totemLabel: 'Hub Stop Seek • Recarga Rápida 24h',
      photoVerified: 'Foto verificada hoje',
      accessTip: 'Acesso fácil pela R. Ernesto de Paula Santos, 153. Estação mais bem avaliada do bairro (5.0 ★ com 26 avaliações).',
      accessGate: 'R. Ernesto de Paula Santos, 153 • Vaga 01',
      approachShort: '25m após o portão principal',
      promoBadge: 'Até 80% em 18m',
      detourMin: 2,
      telemetry: { maxKw: 120, successRate: '99.5%', rating: '5.0', charges: 260, currentType: 'Ultra-Rápido DC' },
      prediction: {
        etaMinutes: 0,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 11,
        lastUpdatedBy: '@julia_rec',
        lastUpdatedMin: 3,
        basis: 'Telemetria ativa + 11 check-outs colaborativos confirmados nas últimas 24h.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento amplo' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'wifi', label: 'Wi-Fi na área de espera' },
        { icon: 'bolt', label: 'Recarga Ultra DC' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: CCS2 Turbo',
          type: 'CCS2',
          mode: 'DC Ultra Rápido',
          powerKw: 120,
          cable: 'Cabo Preso',
          pricePerKwh: 2.29,
          free: false,
          status: 'available',
          estimateText: 'Até 80% em ~18 min (alta potência)',
          tagRight: '120 kW Real'
        },
        {
          id: 'c2',
          name: 'Conector 2: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Semi-Rápido',
          powerKw: 22,
          cable: 'Cabo Próprio',
          pricePerKwh: 1.75,
          free: false,
          status: 'available',
          estimateText: 'Ideal para paradas rápidas em Boa Viagem',
          tagRight: 'Econômico'
        }
      ]
    },
    {
      id: 'ezvolt-ribeiro',
      code: 'EZV-1034',
      name: 'EZvolt Charging Station',
      shortName: 'EZvolt Ribeiro',
      network: 'EZvolt',
      networkBadge: 'Rede EZvolt',
      neighborhood: 'Boa Viagem',
      address: 'R. Ribeiro de Brito, 1034 - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://www.ezvolt.com.br/',
      lat: -8.1228,
      lng: -34.9062,
      status: 'predicted',
      statusNote: 'Livre em ~18m',
      totemLabel: 'Estacionamento Ribeiro de Brito • Totens DC/AC',
      photoVerified: 'Foto verificada há 3 dias',
      accessTip: 'Entrada pela R. Ribeiro de Brito, 1034. Possui CCS2 60 kW (1/2 livre) e 2 vagas Tipo 2 7 kW (0/2 ocupadas).',
      accessGate: 'R. Ribeiro de Brito, 1034 • Vagas EV',
      approachShort: '30m à direita da entrada',
      promoBadge: '',
      detourMin: 1,
      telemetry: { maxKw: 60, successRate: '94.2%', rating: '3.2', charges: 84, currentType: 'DC / AC Misto' },
      prediction: {
        etaMinutes: 18,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 6,
        lastUpdatedBy: '@pedro_ev',
        lastUpdatedMin: 4,
        basis: 'Baseado em 6 check-outs recentes neste horário; 1 vaga CCS2 60 kW já está livre.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento térreo' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'wifi', label: 'Sinal 4G forte' },
        { icon: 'info', label: 'CCS2 1/2 Livre' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: CCS2',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 2.10,
          free: false,
          status: 'available',
          estimateText: '1/2 conectores livres agora',
          tagRight: 'LIVRE AGORA'
        },
        {
          id: 'c2',
          name: 'Conector 2: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Lento',
          powerKw: 7,
          cable: 'Cabo Próprio',
          pricePerKwh: 1.59,
          free: false,
          status: 'occupied',
          etaMinutes: 18,
          vehicle: 'GWM Ora 03',
          progress: 76
        }
      ]
    },
    {
      id: 'tupi-jorge-couceiro',
      code: 'TUP-0300',
      name: 'Tupi Charging Station',
      shortName: 'Tupi Couceiro',
      network: 'Tupi / EZvolt',
      networkBadge: 'Rede Tupi • EZvolt',
      neighborhood: 'Boa Viagem',
      address: 'R. Jorge Couceiro da Costa Eiras - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://www.ezvolt.com.br/',
      lat: -8.1221,
      lng: -34.9058,
      status: 'predicted',
      statusNote: 'Livre em ~9m',
      totemLabel: 'Estação Couceiro • 2x CCS2 60 kW',
      photoVerified: 'Foto verificada há 2 dias',
      accessTip: 'Acesso pela R. Jorge Couceiro da Costa Eiras, pertinho da R. Ribeiro de Brito. Aberto 24h.',
      accessGate: 'R. Jorge Couceiro • Baia 01-02',
      approachShort: '20m após a esquina',
      promoBadge: '',
      detourMin: 1,
      telemetry: { maxKw: 60, successRate: '98.5%', rating: '4.7', charges: 98, currentType: 'Corrente Contínua' },
      prediction: {
        etaMinutes: 9,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 5,
        lastUpdatedBy: '@ana_ev',
        lastUpdatedMin: 1,
        basis: 'Ambos os conectores CCS2 (0/2) em uso, mas um veículo atingiu 88% — liberação prevista em ~9 min.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento térreo' },
        { icon: 'barrier-off', label: 'Sem cancela' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'bolt', label: '2x CCS2 60 kW' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: CCS2',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 1.98,
          free: false,
          status: 'occupied',
          etaMinutes: 9,
          vehicle: 'Volvo EX30',
          progress: 88
        },
        {
          id: 'c2',
          name: 'Conector 2: CCS2',
          type: 'CCS2',
          mode: 'DC Rápido',
          powerKw: 60,
          cable: 'Cabo Preso',
          pricePerKwh: 1.98,
          free: false,
          status: 'occupied',
          etaMinutes: 24,
          vehicle: 'BYD Yuan Plus',
          progress: 58
        }
      ]
    },
    {
      id: 'porsche-carapuceiro',
      code: 'PRC-0777',
      name: 'Porsche Destination Charging',
      shortName: 'Porsche Shopping',
      network: 'Porsche Destination',
      networkBadge: 'Porsche Destination',
      neighborhood: 'Boa Viagem',
      address: 'R. Padre Carapuceiro, 777 - Shopping Recife',
      city: 'Recife, PE',
      website: 'https://www.porsche.com/',
      lat: -8.1187,
      lng: -34.9044,
      status: 'available',
      statusNote: '2/2 Livres',
      totemLabel: 'Shopping Recife • Ed. Garagem D1',
      photoVerified: 'Foto verificada há 2 dias',
      accessTip: 'Localizado no estacionamento do Shopping Recife (R. Padre Carapuceiro, 777). Vagas sinalizadas no piso térreo.',
      accessGate: 'Shopping Recife • Entrada D1',
      approachShort: '60m após a cancela do Shopping',
      promoBadge: 'Gratuito 2h',
      detourMin: 2,
      telemetry: { maxKw: 22, successRate: '98.1%', rating: '3.7', charges: 156, currentType: 'Corrente Alternada' },
      prediction: {
        etaMinutes: 0,
        confidence: 'Alta',
        confidenceScore: 3,
        recentCheckouts: 7,
        lastUpdatedBy: '@rafael_bv',
        lastUpdatedMin: 5,
        basis: 'Alta disponibilidade no horário comercial do Shopping Recife.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento coberto' },
        { icon: 'clock', label: 'Horário do shopping' },
        { icon: 'wifi', label: 'Wi-Fi Shopping Recife' },
        { icon: 'check-circle', label: 'Segurança 24h' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Semi-Rápido',
          powerKw: 22,
          cable: 'Cabo Preso',
          pricePerKwh: 0,
          free: true,
          freeNote: 'Cortesia Shopping',
          status: 'available',
          estimateText: 'Estimativa típica: +90 km em 45 min',
          tagRight: 'Gratuito'
        },
        {
          id: 'c2',
          name: 'Conector 2: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Semi-Rápido',
          powerKw: 22,
          cable: 'Cabo Preso',
          pricePerKwh: 0,
          free: true,
          freeNote: 'Cortesia Shopping',
          status: 'available',
          estimateText: 'Estimativa típica: +90 km em 45 min',
          tagRight: 'Livre Agora'
        }
      ]
    },
    {
      id: 'audi-carapuceiro',
      code: 'AUD-0777',
      name: 'Audi Charging Station',
      shortName: 'Audi Shopping',
      network: 'Audi Charging',
      networkBadge: 'Rede Audi',
      neighborhood: 'Boa Viagem',
      address: 'R. Padre Carapuceiro, 777 - Shopping Recife',
      city: 'Recife, PE',
      lat: -8.1181,
      lng: -34.9022,
      status: 'available',
      statusNote: '1/1 Livre',
      totemLabel: 'Shopping Recife • Setor Audi',
      photoVerified: 'Foto verificada há 3 dias',
      accessTip: 'Acesso pela R. Padre Carapuceiro, 777. Abre a partir das 10h; conector Tipo 2 de 22 kW.',
      accessGate: 'Shopping Recife • Vaga Audi',
      approachShort: '50m após a entrada principal',
      promoBadge: 'Cortesia AC',
      detourMin: 2,
      telemetry: { maxKw: 22, successRate: '99.0%', rating: '5.0', charges: 72, currentType: 'Corrente Alternada' },
      prediction: {
        etaMinutes: 0,
        confidence: 'Média',
        confidenceScore: 2,
        recentCheckouts: 4,
        lastUpdatedBy: '@lucas_ev',
        lastUpdatedMin: 8,
        basis: 'Vaga única Tipo 2 22 kW com boa rotatividade no período da manhã.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento coberto' },
        { icon: 'clock', label: 'Abre às 10h' },
        { icon: 'wifi', label: 'Wi-Fi Livre' },
        { icon: 'check-circle', label: 'Nota 5.0 (Google)' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Semi-Rápido',
          powerKw: 22,
          cable: 'Cabo Preso',
          pricePerKwh: 0,
          free: true,
          freeNote: 'Cortesia Audi',
          status: 'available',
          estimateText: 'Estimativa típica: +95 km em 45 min',
          tagRight: 'Gratuito'
        }
      ]
    },
    {
      id: 'bmw-conselheiro-4845',
      code: 'BMW-4845',
      name: 'BMW Public Charging – Boa Viagem',
      shortName: 'BMW Conselheiro',
      network: 'BMW Public Charging',
      networkBadge: 'BMW Public Charging',
      neighborhood: 'Boa Viagem',
      address: 'Av. Conselheiro Aguiar, 4845 - Boa Viagem',
      city: 'Recife, PE',
      website: 'https://bmw-public-charging.com/',
      lat: -8.1296,
      lng: -34.9010,
      status: 'available',
      statusNote: '1/1 Livre',
      totemLabel: 'Av. Conselheiro Aguiar, 4845 • Wallbox 22 kW',
      photoVerified: 'Foto verificada há 4 dias',
      accessTip: 'Ponto público 24h na Av. Conselheiro Aguiar, 4845, próximo à praia de Boa Viagem.',
      accessGate: 'Av. Conselheiro Aguiar, 4845 • Vaga 01',
      approachShort: '10m na entrada do recuo',
      promoBadge: 'Aberto 24h',
      detourMin: 1,
      telemetry: { maxKw: 22, successRate: '97.8%', rating: '4.8', charges: 54, currentType: 'Corrente Alternada' },
      prediction: {
        etaMinutes: 0,
        confidence: 'Média',
        confidenceScore: 2,
        recentCheckouts: 3,
        lastUpdatedBy: '@sofia_ev',
        lastUpdatedMin: 9,
        basis: 'Baseado em 3 check-outs recentes neste corredor da Conselheiro Aguiar.'
      },
      amenities: [
        { icon: 'parking', label: 'Recuo frontal' },
        { icon: 'barrier-off', label: 'Sem cancela' },
        { icon: 'clock', label: 'Aberto 24 horas' },
        { icon: 'walk', label: '2 min da orla' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Semi-Rápido',
          powerKw: 22,
          cable: 'Cabo Próprio',
          pricePerKwh: 1.79,
          free: false,
          status: 'available',
          estimateText: 'Estimativa típica: +85 km em 40 min',
          tagRight: 'Econômico'
        }
      ]
    },
    {
      id: 'conselheiro-2860',
      code: 'BVP-2860',
      name: 'Estação Conselheiro Aguiar 2860',
      shortName: 'Conselheiro 2860',
      network: 'Rede Pública AC',
      networkBadge: 'Ponto Urbano AC',
      neighborhood: 'Boa Viagem',
      address: 'Av. Conselheiro Aguiar, 2860 - Boa Viagem',
      city: 'Recife, PE',
      lat: -8.1135,
      lng: -34.8936,
      status: 'maintenance',
      statusNote: 'Inoperante',
      maintenanceTitle: 'Temporariamente fechado',
      maintenanceText: 'Ponto Tipo 2 (7 kW) temporariamente fechado para manutenção preventiva. Alternativa livre mais próxima: Audi / Porsche Shopping Recife.',
      totemLabel: 'Av. Conselheiro Aguiar, 2860 • Totem AC',
      photoVerified: 'Status verificado hoje',
      accessTip: 'Estação temporariamente fechada no Google Maps. Evite o deslocamento até confirmação de retorno.',
      accessGate: 'Av. Conselheiro Aguiar, 2860',
      approachShort: 'Temporariamente fechado',
      promoBadge: '',
      detourMin: 2,
      telemetry: { maxKw: 7, successRate: '88.0%', rating: '4.0', charges: 31, currentType: 'Manutenção' },
      prediction: {
        etaMinutes: null,
        confidence: 'Baixa',
        confidenceScore: 1,
        recentCheckouts: 0,
        lastUpdatedBy: '@monitor_eletrolink',
        lastUpdatedMin: 15,
        basis: 'Marcado como temporariamente fechado. Evite o deslocamento.'
      },
      amenities: [
        { icon: 'parking', label: 'Estacionamento térreo' },
        { icon: 'alert', label: 'Temporariamente fechado' },
        { icon: 'info', label: 'Alternativa próxima' },
        { icon: 'clock', label: 'Sem previsão' }
      ],
      connectors: [
        {
          id: 'c1',
          name: 'Conector 1: Tipo 2',
          type: 'Tipo 2',
          mode: 'AC Lento',
          powerKw: 7,
          cable: 'Cabo Próprio',
          pricePerKwh: 1.50,
          free: false,
          status: 'maintenance'
        }
      ]
    }
  ];

  const DEFAULT_STATE = {
    stations: DEFAULT_STATIONS,
    filters: {
      onlyAvailable: false,
      ultraFast: false,
      plugs: ['CCS2', 'Tipo 2'],
      minPower: 0,
      tariff: 'all', // all | free | economic
      radiusKm: 2.5,
      search: ''
    },
    selectedStationId: 'zon-charge',
    alerts: [],
    activeSession: null,
    myCar: {
      model: 'BYD Dolphin',
      plugs: ['CCS2', 'Tipo 2']
    },
    communityPoints: 820,
    monthlyKwh: 148.6,
    history: [
      { id: 'h1', station: 'Zon Charge Charging Station', date: 'Ontem, 18:15', connector: 'CCS2 60 kW', kwh: 24.5, cost: 'R$ 47,78', points: '+15 pts' },
      { id: 'h2', station: 'Duo Eletroposto – Boa Viagem', date: '18/11, 14:40', connector: 'CCS2 40 kW', kwh: 18.2, cost: 'R$ 34,40', points: '+15 pts' },
      { id: 'h3', station: 'Porsche Destination Charging', date: '15/11, 10:05', connector: 'Tipo 2 22 kW', kwh: 12.0, cost: 'Grátis', points: '+15 pts' }
    ]
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_STATE);
      const parsed = JSON.parse(raw);
      return Object.assign(clone(DEFAULT_STATE), parsed, {
        filters: Object.assign(clone(DEFAULT_STATE.filters), parsed.filters || {}),
        myCar: Object.assign(clone(DEFAULT_STATE.myCar), parsed.myCar || {})
      });
    } catch (e) {
      return clone(DEFAULT_STATE);
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore storage quota issues
    }
  }

  function resetDemoState() {
    state = clone(DEFAULT_STATE);
    saveState();
    showToast({
      type: 'info',
      title: 'Demonstração restaurada',
      message: 'Todos os postos de Boa Viagem voltaram ao estado inicial do MVP.'
    });
    setTimeout(() => window.location.reload(), 650);
  }

  // ===== Geo helpers =====
  function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function getDistanceKm(st) {
    return haversineKm(USER_POS.lat, USER_POS.lng, st.lat, st.lng);
  }

  function formatDist(km) {
    if (km < 1) return Math.round(km * 1000) + 'm';
    return km.toFixed(1).replace('.', ',') + ' km';
  }

  function formatDriveMin(km) {
    return Math.max(1, Math.round((km / 24) * 60));
  }

  function formatWalkMin(km) {
    return Math.max(2, Math.round((km / 4.8) * 60));
  }

  function formatPrice(n) {
    return 'R$ ' + n.toFixed(2).replace('.', ',');
  }

  function getClockPlus(minutes) {
    const d = new Date(Date.now() + minutes * 60000);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function getNowClock() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function getStationSummary(st) {
    const total = st.connectors.length;
    const freeCount = st.connectors.filter((c) => c.status === 'available').length;
    const maxKw = Math.max(...st.connectors.map((c) => c.powerKw));
    const hasFreeTariff = st.connectors.some((c) => c.free);
    const paidPrices = st.connectors.filter((c) => !c.free).map((c) => c.pricePerKwh);
    const minPaid = paidPrices.length ? Math.min(...paidPrices) : 0;
    const minPrice = hasFreeTariff ? 0 : minPaid;
    return { total, freeCount, maxKw, hasFreeTariff, minPaid, minPrice };
  }

  function matchesFilters(st, f) {
    const km = getDistanceKm(st);
    if (km > f.radiusKm + 0.05) return false;

    if (f.search && f.search.trim()) {
      const q = f.search.trim().toLowerCase();
      const hay = [st.name, st.network, st.address, st.neighborhood, ...st.connectors.map((c) => c.type)]
        .join(' ')
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    if (f.onlyAvailable) {
      const hasFree = st.connectors.some((c) => c.status === 'available');
      if (!hasFree || st.status === 'maintenance') return false;
    }

    if (f.plugs && f.plugs.length > 0) {
      const hasPlug = st.connectors.some((c) => f.plugs.includes(c.type));
      if (!hasPlug) return false;
    }

    const effectiveMinPower = f.ultraFast ? Math.max(f.minPower || 0, 50) : f.minPower || 0;
    if (effectiveMinPower > 0) {
      const hasPow = st.connectors.some((c) => c.powerKw >= effectiveMinPower);
      if (!hasPow) return false;
    }

    if (f.tariff === 'free') {
      if (!st.connectors.some((c) => c.free)) return false;
    } else if (f.tariff === 'economic') {
      if (!st.connectors.some((c) => c.free || c.pricePerKwh <= 2.0)) return false;
    }

    return true;
  }

  function countActiveFilters(f) {
    let n = 0;
    if (f.onlyAvailable) n++;
    if (f.ultraFast || f.minPower >= 50) n++;
    else if (f.minPower > 0) n++;
    if (f.tariff !== 'all') n++;
    if (f.radiusKm !== 2.5) n++;
    if (f.plugs.length !== 2 || !f.plugs.includes('CCS2') || !f.plugs.includes('Tipo 2')) n++;
    return n;
  }

  // ===== Toast Notifications (F4 & F5) =====
  function ensureToastStack() {
    let el = document.querySelector('.toast-stack');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast-stack';
      document.body.appendChild(el);
    }
    return el;
  }

  function showToast({ type = 'info', title, message, actionLabel, actionHref, onAction, duration = 6000 }) {
    const stack = ensureToastStack();
    const iconId = type === 'success' ? 'check-circle' : type === 'amber' ? 'hourglass' : 'bolt';
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = `
      <div class="tic"><svg class="ico"><use href="#${iconId}"/></svg></div>
      <div class="tbd">
        <b>${title}</b>
        <p>${message}</p>
        ${actionLabel ? `<div class="tact">${actionHref ? `<a href="${actionHref}">${actionLabel}</a>` : `<button type="button" class="tact-btn">${actionLabel}</button>`}</div>` : ''}
      </div>
      <button type="button" class="tx" aria-label="Fechar"><svg class="ico"><use href="#x"/></svg></button>
    `;
    toast.querySelector('.tx').addEventListener('click', () => toast.remove());
    if (onAction && toast.querySelector('.tact-btn')) {
      toast.querySelector('.tact-btn').addEventListener('click', () => {
        onAction();
        toast.remove();
      });
    }
    stack.appendChild(toast);
    if (duration > 0) {
      setTimeout(() => {
        if (toast.isConnected) toast.remove();
      }, duration);
    }
  }

  // ===== Generic Dialog (Zero Dead-Ends) =====
  function openDialog({ title, bodyHtml, onMount }) {
    closeDialog();
    const wrap = document.createElement('div');
    wrap.className = 'el-dialog-backdrop';
    wrap.innerHTML = `
      <div class="el-dialog" role="dialog" aria-modal="true">
        <div class="dg-glow"></div>
        <div class="dg-in">
          <div class="dg-hd">
            <h3>${title}</h3>
            <button type="button" class="xbtn dg-close" aria-label="Fechar"><svg class="ico"><use href="#x"/></svg></button>
          </div>
          <div class="dg-body">${bodyHtml}</div>
        </div>
      </div>
    `;
    wrap.addEventListener('click', (e) => {
      if (e.target === wrap) closeDialog();
    });
    wrap.querySelector('.dg-close').addEventListener('click', closeDialog);
    document.body.appendChild(wrap);
    if (onMount) onMount(wrap);
  }

  function closeDialog() {
    const existing = document.querySelector('.el-dialog-backdrop');
    if (existing) existing.remove();
  }

  // ===== Active Session & Station Status Helpers (F5) =====
  function recomputeStationStatus(st) {
    if (!st || st.status === 'maintenance') return;
    const sum = getStationSummary(st);
    const occupiedConns = st.connectors.filter((c) => c.status === 'occupied');
    const userHere = st.connectors.some((c) => c.occupiedByUser);

    if (sum.freeCount > 0 && occupiedConns.length === 0) {
      st.status = sum.maxKw >= 100 ? 'ultra' : 'available';
      st.statusNote = `${sum.freeCount}/${sum.total} ${sum.freeCount === 1 ? 'Livre' : 'Livres'}`;
      st.prediction.etaMinutes = 0;
    } else if (sum.freeCount > 0 && occupiedConns.length > 0) {
      if (userHere) {
        st.status = sum.maxKw >= 100 ? 'ultra' : 'available';
        st.statusNote = `${sum.freeCount}/${sum.total} ${sum.freeCount === 1 ? 'Livre' : 'Livres'}`;
      } else {
        const minEta = Math.min(...occupiedConns.map((c) => c.etaMinutes || 12));
        st.status = 'predicted';
        st.statusNote = `Livre em ~${minEta}m`;
        st.prediction.etaMinutes = minEta;
      }
    } else if (occupiedConns.length > 0) {
      const minEta = Math.min(...occupiedConns.map((c) => c.etaMinutes || 15));
      st.status = 'predicted';
      st.statusNote = userHere ? '0/' + sum.total + ' (Você aqui)' : `Livre em ~${minEta}m`;
      st.prediction.etaMinutes = minEta;
    }
  }

  function startChargingSession(st, chosenConn) {
    // If another session was active, free its connector first
    if (state.activeSession && !state.activeSession.finished && state.activeSession.stationId !== st.id) {
      const prevSt = state.stations.find((s) => s.id === state.activeSession.stationId);
      if (prevSt) {
        const prevC = prevSt.connectors.find((c) => c.id === state.activeSession.connectorId && c.occupiedByUser);
        if (prevC) {
          prevC.status = 'available';
          delete prevC.occupiedByUser;
          delete prevC.etaMinutes;
          delete prevC.progress;
          delete prevC.vehicle;
          recomputeStationStatus(prevSt);
        }
      }
    }

    // Only occupy if not already occupied by user in this session
    const alreadyActiveHere =
      state.activeSession &&
      !state.activeSession.finished &&
      state.activeSession.stationId === st.id;

    if (!alreadyActiveHere && chosenConn) {
      chosenConn.status = 'occupied';
      chosenConn.occupiedByUser = true;
      chosenConn.vehicle = `Você (${state.myCar.model})`;
      chosenConn.etaMinutes = 25;
      chosenConn.progress = 22;
      recomputeStationStatus(st);

      state.activeSession = {
        stationId: st.id,
        connectorId: chosenConn.id,
        startedAt: Date.now(),
        elapsedMin: 18,
        kwh: Number(((chosenConn.powerKw * 0.25) / 1.5).toFixed(1)),
        finished: false
      };
      saveState();
    }
  }

  function completeActiveSession(overrideKwh) {
    const sess = state.activeSession;
    if (!sess || sess.finished) return null;
    const target = state.stations.find((s) => s.id === sess.stationId);
    let conn = null;
    if (target) {
      conn = target.connectors.find((c) => c.id === sess.connectorId) || target.connectors[0];
      target.connectors.forEach((c) => {
        if (c.occupiedByUser || c.id === sess.connectorId) {
          c.status = 'available';
          delete c.occupiedByUser;
          delete c.etaMinutes;
          delete c.progress;
          delete c.vehicle;
          c.estimateText = 'Recém-liberado por você';
          c.tagRight = 'Livre Agora';
        }
      });
      recomputeStationStatus(target);
      target.prediction.recentCheckouts = (target.prediction.recentCheckouts || 4) + 1;
      target.prediction.confidence = 'Alta';
      target.prediction.confidenceScore = 3;
      target.prediction.lastUpdatedMin = 0;
      target.prediction.lastUpdatedBy = '@voce';
    }

    const finalKwh = Number((overrideKwh != null ? overrideKwh : sess.kwh || 11.4).toFixed(1));
    const costStr = conn && !conn.free ? formatPrice(finalKwh * conn.pricePerKwh) : 'Grátis';
    state.communityPoints += 15;
    state.monthlyKwh = Number((state.monthlyKwh + finalKwh).toFixed(1));
    if (target && conn) {
      state.history.unshift({
        id: 'h_' + Date.now(),
        station: target.name,
        date: 'Agora, ' + getNowClock(),
        connector: `${conn.type} ${conn.powerKw} kW`,
        kwh: finalKwh,
        cost: costStr,
        points: '+15 pts'
      });
      state.selectedStationId = target.id;
    }
    state.activeSession = { stationId: sess.stationId, finished: true };
    saveState();
    return { target, conn, costStr, finalKwh };
  }

  function renderActiveSessionBar() {
    const existing = document.querySelector('.active-session-bar');
    if (existing) existing.remove();
    // Don't show floating bar when already inside checkout.html
    if (document.getElementById('coFinishBtn')) return;
    if (!state.activeSession || state.activeSession.finished) return;

    const st = state.stations.find((s) => s.id === state.activeSession.stationId);
    if (!st) return;
    const conn = st.connectors.find((c) => c.id === state.activeSession.connectorId) || st.connectors[0];

    const bar = document.createElement('div');
    bar.className = 'active-session-bar';
    bar.innerHTML = `
      <span class="as-dot"></span>
      <div class="as-info">
        <b>Recarga ativa: ${st.shortName}</b>
        <span>${conn.type} ${conn.powerKw} kW • Lembre de avisar quando terminar</span>
      </div>
      <div class="as-actions">
        <a class="as-open" href="checkout.html?id=${st.id}">Ver sessão</a>
        <button type="button" class="as-done" id="quickCheckoutBtn">
          <svg class="ico" style="font-size:13px"><use href="#check-circle"/></svg>Terminei (Check-out)
        </button>
      </div>
    `;
    bar.querySelector('#quickCheckoutBtn').addEventListener('click', () => {
      const res = completeActiveSession();
      bar.remove();
      if (res && res.target) {
        showToast({
          type: 'success',
          title: 'Carregador liberado (+15 pts)!',
          message: `Vaga em ${res.target.shortName} atualizada para ${res.target.statusNote}.`,
          duration: 5000
        });
        setTimeout(() => window.location.reload(), 900);
      }
    });
    document.body.appendChild(bar);
  }

  function createUserPinIcon() {
    return L.divIcon({
      className: 'el-marker-icon',
      html: `<div class="el-user-pin" title="Sua posição atual em Boa Viagem">
               <div class="u-halo"></div>
               <div class="u-badge"><svg class="ico" style="width:18px;height:18px"><use href="#pin"/></svg></div>
               <div class="u-tip"></div>
               <div class="u-lab">Você</div>
             </div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
  }

  // ===== Route Planner Modal (F3 – Destaque no Header e Rodapé) =====
  const ROUTE_DESTINATIONS = [
    { id: 'aeroporto', label: 'Aeroporto Internacional do Recife', lat: -8.1264, lng: -34.9230 },
    { id: 'shopping-recife', label: 'Shopping Recife (Boa Viagem)', lat: -8.1187, lng: -34.9044 },
    { id: 'dona-lindu', label: 'Parque Dona Lindu (Orla Sul)', lat: -8.1412, lng: -34.9041 },
    { id: 'segundo-jardim', label: 'Segundo Jardim de Boa Viagem', lat: -8.1072, lng: -34.8891 },
    { id: 'riomar', label: 'Shopping RioMar (Pina)', lat: -8.0861, lng: -34.8948 }
  ];

  function openRoutePlanner() {
    openDialog({
      title: 'Planejador de Rotas – Menor Desvio (F3)',
      bodyHtml: `
        <p style="font-size:13px;color:var(--text2);margin-bottom:10px">Escolha seu destino saindo da sua posição em <b>Boa Viagem</b> para encontrar o eletroposto livre com menor desvio no caminho:</p>
        <select id="rpDestSelect" class="dg-input" style="margin-bottom:12px;cursor:pointer">
          ${ROUTE_DESTINATIONS.map((d) => `<option value="${d.id}">${d.label}</option>`).join('')}
        </select>
        <div class="dg-list" id="rpList"></div>
      `,
      onMount(wrap) {
        const sel = wrap.querySelector('#rpDestSelect');
        const listEl = wrap.querySelector('#rpList');
        const render = () => {
          const dest = ROUTE_DESTINATIONS.find((d) => d.id === sel.value) || ROUTE_DESTINATIONS[0];
          const directKm = haversineKm(USER_POS.lat, USER_POS.lng, dest.lat, dest.lng);
          const ranked = state.stations
            .filter((s) => s.status !== 'maintenance')
            .map((s) => {
              const d1 = getDistanceKm(s);
              const d2 = haversineKm(s.lat, s.lng, dest.lat, dest.lng);
              const extraKm = Math.max(0.1, d1 + d2 - directKm);
              const extraMin = Math.max(1, Math.round((extraKm / 22) * 60));
              const sum = getStationSummary(s);
              return { s, d1, extraKm, extraMin, sum };
            })
            .sort((a, b) => a.extraMin - b.extraMin || a.d1 - b.d1);

          listEl.innerHTML = ranked
            .slice(0, 4)
            .map(
              ({ s, d1, extraMin, sum }, idx) => `
              <a class="dg-item" href="detalhes.html?id=${s.id}">
                <div>
                  <b>${idx === 0 ? '★ ' : ''}${s.name}</b>
                  <small>Desvio: <b>+${extraMin} min</b> • a ${formatDist(d1)} de você • até ${sum.maxKw} kW</small>
                </div>
                <span class="badge ${s.status === 'predicted' ? 'b-amber' : 'b-green'}">${s.statusNote}</span>
              </a>`
            )
            .join('');
        };
        render();
        sel.addEventListener('change', render);
      }
    });
  }

  // ===== Shared Header & Footer Wiring =====
  function wireGlobalChrome() {
    // Add prominent "Planejar Rota" CTA in the Header
    const hright = document.querySelector('.hright');
    if (hright && !document.getElementById('headerRoutePlannerBtn')) {
      const routeBtn = document.createElement('button');
      routeBtn.type = 'button';
      routeBtn.id = 'headerRoutePlannerBtn';
      routeBtn.className = 'route-nav-btn';
      routeBtn.innerHTML = `<svg class="ico"><use href="#navigate"/></svg>Planejar Rota`;
      routeBtn.addEventListener('click', openRoutePlanner);
      hright.insertBefore(routeBtn, hright.firstChild);
    }

    // Show persistent floating reminder if user has an active charge
    renderActiveSessionBar();
    // Update My Car text
    const myCarEl = document.querySelector('.mycar');
    if (myCarEl) {
      myCarEl.innerHTML = `<svg class="ico"><use href="#car"/></svg> Meu Carro: <b>${state.myCar.plugs.join(' & ')}</b>`;
      myCarEl.title = 'Configurar conectores do veículo';
      myCarEl.addEventListener('click', () => {
        const allPlugs = ['CCS2', 'Tipo 2', 'CHAdeMO'];
        openDialog({
          title: 'Meu Veículo e Conectores',
          bodyHtml: `
            <p style="font-size:13px;color:var(--text2);margin-bottom:12px">Selecione os conectores compatíveis com seu carro (<b>${state.myCar.model}</b>) para filtrar automaticamente os postos de Boa Viagem.</p>
            <div class="dg-list">
              ${allPlugs
                .map(
                  (p) => `
                <label class="dg-item" style="cursor:pointer">
                  <div><b>${p}</b><small>${p === 'CCS2' ? 'Rápido & Ultra DC (50-120 kW)' : p === 'Tipo 2' ? 'AC Urbano (7.4-22 kW)' : 'Padrão Asiático Legado'}</small></div>
                  <input type="checkbox" value="${p}" ${state.myCar.plugs.includes(p) ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--primary)">
                </label>`
                )
                .join('')}
            </div>
            <button type="button" class="dg-btn" id="saveCarBtn" style="width:100%;margin-top:14px">Salvar compatibilidade</button>
          `,
          onMount(wrap) {
            wrap.querySelector('#saveCarBtn').addEventListener('click', () => {
              const checked = [...wrap.querySelectorAll('input:checked')].map((i) => i.value);
              if (!checked.length) {
                showToast({ type: 'amber', title: 'Selecione ao menos 1 plugue', message: 'Escolha um conector compatível com seu veículo.' });
                return;
              }
              state.myCar.plugs = checked;
              state.filters.plugs = checked.slice();
              saveState();
              closeDialog();
              window.location.reload();
            });
          }
        });
      });
    }

    // Header Search (Cmd+K)
    const openQuickSearch = () => {
      openDialog({
        title: 'Buscar em Boa Viagem, Recife',
        bodyHtml: `
          <input type="text" class="dg-input" id="qsInput" placeholder="Ex: Shopping Recife, Posto Rech, CCS2, Gratuito..." autocomplete="off">
          <div class="dg-list" id="qsResults" style="margin-top:12px"></div>
        `,
        onMount(wrap) {
          const inp = wrap.querySelector('#qsInput');
          const res = wrap.querySelector('#qsResults');
          const render = (q) => {
            const term = (q || '').trim().toLowerCase();
            const list = state.stations.filter((s) => {
              if (!term) return true;
              return [s.name, s.network, s.address, ...s.connectors.map((c) => c.type)].join(' ').toLowerCase().includes(term);
            });
            res.innerHTML = list.length
              ? list
                  .map((s) => {
                    const dist = formatDist(getDistanceKm(s));
                    return `
                      <a class="dg-item" href="detalhes.html?id=${s.id}">
                        <div><b>${s.name}</b><small>${s.network} • ${s.address} • ${dist}</small></div>
                        <span class="badge ${s.status === 'maintenance' ? 'b-red' : s.status === 'predicted' ? 'b-amber' : 'b-green'}">${s.statusNote}</span>
                      </a>`;
                  })
                  .join('')
              : '<p style="font-size:13px;color:var(--muted);padding:12px 0">Nenhum posto encontrado para essa busca.</p>';
          };
          render('');
          inp.focus();
          inp.addEventListener('input', () => render(inp.value));
        }
      });
    };

    const hsearch = document.querySelector('.hsearch .box');
    if (hsearch) hsearch.addEventListener('click', openQuickSearch);
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openQuickSearch();
      }
      if (e.key === 'Escape') closeDialog();
    });

    // Footer links (Zero dead-ends)
    document.querySelectorAll('.footer nav a').forEach((a) => {
      const txt = a.textContent.trim();
      if (txt.includes('Planejador')) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          openRoutePlanner();
        });
      } else if (txt.includes('Minhas Recargas')) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          openDialog({
            title: 'Minhas Recargas & Comunidade',
            bodyHtml: `
              <div style="display:flex;gap:10px;margin-bottom:12px">
                <div class="dg-item" style="flex:1"><div><small>Energia no mês</small><b>${state.monthlyKwh.toFixed(1)} kWh</b></div></div>
                <div class="dg-item" style="flex:1"><div><small>Pontos Comunidade</small><b style="color:var(--primary)">${state.communityPoints} pts</b></div></div>
              </div>
              <div class="dg-list">
                ${state.history
                  .map(
                    (h) => `
                  <div class="dg-item">
                    <div><b>${h.station}</b><small>${h.date} • ${h.connector} • ${h.kwh} kWh</small></div>
                    <div style="text-align:right"><b>${h.cost}</b><small style="color:var(--teal)">${h.points}</small></div>
                  </div>`
                  )
                  .join('')}
              </div>
              <button type="button" id="resetDemoBtn" style="margin-top:12px;font-size:12px;font-weight:600;color:var(--primary);text-align:center;width:100%">Restaurar dados iniciais da demonstração</button>
            `,
            onMount(wrap) {
              wrap.querySelector('#resetDemoBtn').addEventListener('click', resetDemoState);
            }
          });
        });
      }
    });

    // Avatar click -> same as Minhas Recargas
    const avatar = document.querySelector('.avatar');
    if (avatar) {
      avatar.style.cursor = 'pointer';
      avatar.title = 'Perfil e Minhas Recargas';
      avatar.addEventListener('click', () => {
        const navLink = [...document.querySelectorAll('.footer nav a')].find((x) => x.textContent.includes('Minhas Recargas'));
        if (navLink) navLink.click();
      });
    }
  }

  // ===== Leaflet Map Factory =====
  const TILE_LAYERS = [
    {
      name: 'Mapa Clean (EletroLink)',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      attr: '&copy; Esri &copy; OpenStreetMap',
      cleanFilter: true
    },
    {
      name: 'OpenStreetMap Detalhado',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attr: '&copy; OpenStreetMap contributors',
      cleanFilter: false
    },
    {
      name: 'Satélite (Esri)',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attr: '&copy; Esri',
      cleanFilter: false
    }
  ];

  function createLeafletMap(containerEl, center, zoom) {
    if (typeof L === 'undefined' || !containerEl) return null;
    const map = L.map(containerEl, {
      center,
      zoom,
      minZoom: 12,
      maxZoom: 19,
      zoomControl: false,
      attributionControl: true
    });
    let layerIdx = 0;
    containerEl.classList.toggle('map-clean', !!TILE_LAYERS[0].cleanFilter);
    let currentTile = L.tileLayer(TILE_LAYERS[0].url, {
      attribution: TILE_LAYERS[0].attr,
      maxZoom: 19
    }).addTo(map);

    map.cycleLayer = function () {
      layerIdx = (layerIdx + 1) % TILE_LAYERS.length;
      map.removeLayer(currentTile);
      containerEl.classList.toggle('map-clean', !!TILE_LAYERS[layerIdx].cleanFilter);
      currentTile = L.tileLayer(TILE_LAYERS[layerIdx].url, {
        attribution: TILE_LAYERS[layerIdx].attr,
        maxZoom: 19
      }).addTo(map);
      showToast({
        type: 'info',
        title: 'Camada do mapa alterada',
        message: 'Exibindo: ' + TILE_LAYERS[layerIdx].name,
        duration: 2800
      });
    };

    return map;
  }

  // ===== F4: Live Release Simulation (ocupado -> liberando -> livre) =====
  function triggerStationRelease(stationId, onUpdate) {
    const st = state.stations.find((s) => s.id === stationId);
    if (!st) return;

    const occupiedConn = st.connectors.find((c) => c.status === 'occupied');
    st.status = 'releasing';
    st.statusNote = 'Liberando agora...';
    st.prediction.etaMinutes = 1;
    st.prediction.lastUpdatedMin = 0;
    st.prediction.lastUpdatedBy = '@comunidade_ev';
    saveState();
    if (onUpdate) onUpdate();

    showToast({
      type: 'amber',
      title: 'Check-out detectado em ' + st.shortName,
      message: 'Motorista finalizou a recarga. Status: Ocupado → Liberando...',
      duration: 3800
    });

    setTimeout(() => {
      const target = state.stations.find((s) => s.id === stationId);
      if (!target) return;
      if (occupiedConn) {
        const c = target.connectors.find((x) => x.id === occupiedConn.id);
        if (c) {
          c.status = 'available';
          delete c.etaMinutes;
          delete c.progress;
          c.estimateText = 'Recém-liberado pela comunidade EletroLink';
          c.tagRight = 'Livre Agora';
        }
      }
      const sum = getStationSummary(target);
      target.status = sum.maxKw >= 100 ? 'ultra' : 'available';
      target.statusNote = `${sum.freeCount}/${sum.total} Livres`;
      target.prediction.etaMinutes = 0;
      target.prediction.recentCheckouts = (target.prediction.recentCheckouts || 4) + 1;
      target.prediction.confidence = 'Alta';
      target.prediction.confidenceScore = 3;
      state.alerts = state.alerts.filter((id) => id !== stationId);
      saveState();
      if (onUpdate) onUpdate();

      showToast({
        type: 'success',
        title: 'Vaga livre agora em ' + target.shortName + '!',
        message: `Status atualizado: Liberando → Livre (${target.statusNote}). Confiança preditiva recalibrada.`,
        actionLabel: 'Ver estação',
        actionHref: 'detalhes.html?id=' + target.id,
        duration: 8000
      });
    }, 2600);
  }

  // ===== PAGE 1: index.html (Mapa & Lista) =====
  function initMapPage() {
    const mapContainer = document.getElementById('leafletMap');
    if (!mapContainer) return;

    const map = createLeafletMap(mapContainer, [USER_POS.lat, USER_POS.lng], 15);
    let markersLayer = L.layerGroup().addTo(map);
    let radiusCircle = null;

    // User location marker (distinct pin)
    L.marker([USER_POS.lat, USER_POS.lng], { icon: createUserPinIcon(), zIndexOffset: 250 }).addTo(map);

    const searchInput = document.getElementById('sideSearchInput');
    const chipsContainer = document.getElementById('quickChips');
    const listHead = document.getElementById('listHead');
    const cardsContainer = document.getElementById('stationCards');

    if (searchInput) {
      searchInput.value = state.filters.search || '';
      searchInput.addEventListener('input', () => {
        state.filters.search = searchInput.value;
        saveState();
        renderAll();
      });
    }

    function renderChips() {
      const f = state.filters;
      const isTipo2Only = f.plugs.length === 1 && f.plugs[0] === 'Tipo 2';
      const isFree = f.tariff === 'free';
      const filterCount = countActiveFilters(f);

      chipsContainer.innerHTML = `
        <button type="button" class="chip ${f.onlyAvailable ? 'on1' : ''}" data-chip="avail">
          <svg class="ico"><use href="#check"/></svg>Livres agora
        </button>
        <button type="button" class="chip ${f.ultraFast ? 'on2' : ''}" data-chip="ultra">
          <svg class="ico"><use href="#bolt"/></svg>Ultra-rápido DC
        </button>
        <button type="button" class="chip ${isTipo2Only ? 'on2' : ''}" data-chip="tipo2">Tipo 2</button>
        <button type="button" class="chip ${isFree ? 'on1' : ''}" data-chip="free">Gratuito</button>
        <a class="chip all" href="filtros.html"><svg class="ico"><use href="#sliders"/></svg>Filtros${filterCount ? ` (${filterCount})` : ''}</a>
      `;

      chipsContainer.querySelectorAll('button[data-chip]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.chip;
          if (type === 'avail') f.onlyAvailable = !f.onlyAvailable;
          if (type === 'ultra') {
            f.ultraFast = !f.ultraFast;
            if (f.ultraFast && f.minPower < 50) f.minPower = 50;
            if (!f.ultraFast && f.minPower === 50) f.minPower = 0;
          }
          if (type === 'tipo2') {
            f.plugs = isTipo2Only ? state.myCar.plugs.slice() : ['Tipo 2'];
          }
          if (type === 'free') {
            f.tariff = isFree ? 'all' : 'free';
          }
          saveState();
          renderAll();
        });
      });
    }

    function buildBadgeHtml(st) {
      if (st.status === 'maintenance') {
        return `<span class="badge b-red"><svg class="ico" style="font-size:12px"><use href="#alert"/></svg>Inoperante</span>`;
      }
      if (st.status === 'releasing') {
        return `<span class="badge b-teal"><i class="dot"></i>Liberando...</span>`;
      }
      if (st.status === 'predicted') {
        return `<span class="badge b-amber"><svg class="ico" style="font-size:11px"><use href="#hourglass"/></svg>Livre em ~${st.prediction.etaMinutes}m</span>`;
      }
      if (st.status === 'ultra') {
        return `<span class="badge b-blue">${st.statusNote}</span>`;
      }
      return `<span class="badge b-green"><i class="dot"></i>${st.statusNote}</span>`;
    }

    function renderAll() {
      renderChips();
      const filtered = state.stations
        .filter((st) => matchesFilters(st, state.filters))
        .sort((a, b) => getDistanceKm(a) - getDistanceKm(b));

      if (filtered.length && !filtered.some((s) => s.id === state.selectedStationId)) {
        state.selectedStationId = filtered[0].id;
        saveState();
      }

      const radiusLabel = state.filters.radiusKm < 1
        ? `${Math.round(state.filters.radiusKm * 1000)} m`
        : `${state.filters.radiusKm.toFixed(1).replace('.', ',')} km`;

      listHead.innerHTML = `
        <b>${filtered.length} ${filtered.length === 1 ? 'carregador' : 'carregadores'} <span style="font-weight:500">em raio de ${radiusLabel}</span></b>
        <span>RECIFE • BOA VIAGEM</span>
      `;

      // Update radius circle on Leaflet map
      if (radiusCircle) map.removeLayer(radiusCircle);
      radiusCircle = L.circle([USER_POS.lat, USER_POS.lng], {
        radius: state.filters.radiusKm * 1000,
        color: '#004ac6',
        weight: 1.5,
        opacity: 0.32,
        fillColor: '#004ac6',
        fillOpacity: 0.04,
        dashArray: '6 6'
      }).addTo(map);

      // Render cards
      if (!filtered.length) {
        cardsContainer.innerHTML = `
          <div class="empty-state">
            <div class="ic"><svg class="ico"><use href="#search"/></svg></div>
            <h3>Nenhum eletroposto encontrado</h3>
            <p>Nenhuma estação em Boa Viagem corresponde aos filtros atuais no raio de ${radiusLabel}.</p>
            <button type="button" id="clearEmptyBtn">Redefinir filtros</button>
          </div>
        `;
        cardsContainer.querySelector('#clearEmptyBtn').addEventListener('click', () => {
          state.filters = clone(DEFAULT_STATE.filters);
          if (searchInput) searchInput.value = '';
          saveState();
          renderAll();
        });
      } else {
        cardsContainer.innerHTML = filtered
          .map((st) => {
            const isSel = st.id === state.selectedStationId;
            const isOff = st.status === 'maintenance';
            const dist = formatDist(getDistanceKm(st));
            const sum = getStationSummary(st);
            const isSubscribed = state.alerts.includes(st.id);

            const connHtml = isOff
              ? `<div class="warn"><b>${st.maintenanceTitle}</b><br>${st.maintenanceText}</div>`
              : `<div class="conn">${st.connectors
                  .map((c) => {
                    const ico = c.type === 'Tipo 2' ? 'plug' : 'bolt';
                    const sub =
                      c.status === 'occupied'
                        ? `<small>${c.etaMinutes}m rest.</small>`
                        : c.status === 'available' && st.status === 'predicted'
                        ? `<small style="color:var(--green-text)">● Livre</small>`
                        : `<small>${c.type}</small>`;
                    return `<div><svg class="ico" style="color:var(--primary);font-size:13px"><use href="#${ico}"/></svg>${c.powerKw} kW ${sub}</div>`;
                  })
                  .join('')}</div>`;

            const predHtml =
              st.status === 'predicted'
                ? `<div class="conf">Confiança preditiva: ${'<i></i>'.repeat(st.prediction.confidenceScore)} <b style="color:var(--green-text)">${st.prediction.confidence}</b></div>
                   <div class="conf" style="color:var(--muted)"><svg class="ico" style="font-size:12px"><use href="#check-circle"/></svg> ${st.prediction.recentCheckouts} check-outs recentes</div>`
                : st.status === 'ultra'
                ? `<div class="conf" style="color:var(--teal)"><svg class="ico" style="font-size:12px"><use href="#bolt"/></svg> ${st.promoBadge || 'Alta potência DC'}</div>`
                : '';

            const priceHtml = isOff
              ? `<div class="price"><span style="color:var(--red);font-weight:600">${st.connectors.length} carregadores indisponíveis</span> <span>•</span> <span>${dist}</span></div>`
              : sum.hasFreeTariff && sum.minPaid === 0
              ? `<div class="price"><span class="free">Tarifa Gratuita</span> <span>•</span> <span>${dist}</span></div>`
              : `<div class="price"><b>${formatPrice(sum.minPaid)}</b> / kWh <span>•</span> <span>${dist}</span>${st.promoBadge ? `<span class="badge b-blue" style="margin-left:auto">${st.promoBadge}</span>` : ''}</div>`;

            const actionsHtml = isSel
              ? `<div style="display:flex;gap:8px;align-items:center">
                  <a class="cta" style="flex:1" href="detalhes.html?id=${st.id}">Ver Detalhes e Rota <svg class="ico"><use href="#arrow-right"/></svg></a>
                  ${
                    st.status === 'predicted'
                      ? `<button type="button" class="alert-btn ${isSubscribed ? 'active' : ''}" data-alert="${st.id}" title="Receber alerta quando liberar">
                           <svg class="ico" style="font-size:14px"><use href="#${isSubscribed ? 'check-circle' : 'clock'}"/></svg>${isSubscribed ? 'Alerta ativo' : 'Avisar'}
                         </button>`
                      : ''
                  }
                 </div>`
              : '';

            return `
              <article class="card ${isSel ? 'sel' : ''} ${isOff ? 'off' : ''}" data-station="${st.id}">
                <div class="head">
                  <div>
                    <div class="eyebrow">${st.network} <em>• ${st.neighborhood}</em></div>
                    <h3>${st.name}</h3>
                    <div class="addr">${st.address}</div>
                  </div>
                  ${buildBadgeHtml(st)}
                </div>
                ${predHtml}
                ${connHtml}
                ${priceHtml}
                ${actionsHtml}
              </article>
            `;
          })
          .join('');

        // Card click -> select & pan map
        cardsContainer.querySelectorAll('article[data-station]').forEach((card) => {
          card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('button')) return;
            const id = card.dataset.station;
            state.selectedStationId = id;
            saveState();
            const st = state.stations.find((s) => s.id === id);
            if (st) map.panTo([st.lat, st.lng], { animate: true, duration: 0.45 });
            renderAll();
          });
        });

        // Alert toggle button (F4)
        cardsContainer.querySelectorAll('button[data-alert]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.alert;
            const st = state.stations.find((s) => s.id === id);
            if (state.alerts.includes(id)) {
              state.alerts = state.alerts.filter((x) => x !== id);
              saveState();
              renderAll();
              return;
            }
            state.alerts.push(id);
            saveState();
            renderAll();
            showToast({
              type: 'info',
              title: 'Alerta ativado para ' + st.shortName,
              message: 'Você será notificado assim que um motorista confirmar o check-out.',
              actionLabel: 'Simular liberação agora',
              onAction: () => triggerStationRelease(id, renderAll),
              duration: 7000
            });
          });
        });
      }

      // Render Leaflet markers
      markersLayer.clearLayers();
      filtered.forEach((st) => {
        const isSel = st.id === state.selectedStationId;
        const km = getDistanceKm(st);
        const sum = getStationSummary(st);
        const driveMin = formatDriveMin(km);

        let html = '';
        if (isSel) {
          const priceStr = sum.hasFreeTariff && sum.minPaid === 0 ? 'Gratuito' : `${formatPrice(sum.minPaid)}/kWh`;
          const statusColor =
            st.status === 'maintenance'
              ? 'var(--red)'
              : st.status === 'predicted'
              ? 'var(--amber-text)'
              : 'var(--green-text)';
          html = `
            <div class="pin sel">
              <div class="pop">
                <b>${st.shortName}</b>
                <small style="color:${statusColor}">${sum.maxKw} kW • ${st.statusNote}</small>
                <small>${st.network} • ${priceStr}</small>
                <small><svg class="ico" style="display:inline;vertical-align:-2px;font-size:12px"><use href="#car"/></svg> ${driveMin} min de carro (${formatDist(km)})</small>
                <a href="detalhes.html?id=${st.id}">Iniciar Rota</a>
              </div>
              <div class="pop-tip"></div>
              <div class="knob" style="margin-top:2px"></div>
            </div>`;
        } else {
          const cls =
            st.status === 'maintenance'
              ? 'red'
              : st.status === 'releasing'
              ? 'releasing'
              : st.status === 'predicted'
              ? 'amber'
              : st.status === 'ultra'
              ? 'blue'
              : 'green';
          const labRight =
            st.status === 'maintenance'
              ? ''
              : st.status === 'predicted'
              ? `<span style="color:var(--amber-text)">• ~${st.prediction.etaMinutes}m (${sum.maxKw} kW)</span>`
              : st.status === 'releasing'
              ? `<span style="color:var(--teal)">• Liberando</span>`
              : `<span style="color:var(--green-text)">• ${sum.maxKw} kW</span>`;
          html = `
            <div class="pin ${cls}">
              <div class="lab">${st.status === 'maintenance' ? 'Em manutenção' : st.shortName} ${labRight}</div>
              <div class="stem"></div>
              <div class="knob"></div>
            </div>`;
        }

        const icon = L.divIcon({
          className: 'el-marker-icon',
          html,
          iconSize: [0, 0],
          iconAnchor: [0, 0]
        });

        const marker = L.marker([st.lat, st.lng], {
          icon,
          zIndexOffset: isSel ? 900 : 300
        }).addTo(markersLayer);

        marker.on('click', () => {
          state.selectedStationId = st.id;
          saveState();
          map.panTo([st.lat, st.lng], { animate: true, duration: 0.4 });
          renderAll();
          const cardEl = cardsContainer.querySelector(`article[data-station="${st.id}"]`);
          if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      });
    }

    // Map controls
    const btnLayers = document.getElementById('btnLayers');
    const btnLocate = document.getElementById('btnLocate');
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnSim = document.getElementById('btnSimulateCheckout');
    const btnFeedback = document.getElementById('btnFeedback');

    if (btnLayers) btnLayers.addEventListener('click', () => map.cycleLayer());
    if (btnLocate) {
      btnLocate.addEventListener('click', () => {
        map.setView([USER_POS.lat, USER_POS.lng], 15, { animate: true });
        showToast({ type: 'info', title: 'Centralizado em Boa Viagem', message: USER_POS.label, duration: 2500 });
      });
    }
    if (btnZoomIn) btnZoomIn.addEventListener('click', () => map.zoomIn());
    if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());

    if (btnSim) {
      btnSim.addEventListener('click', () => {
        const candidate = state.stations.find((s) => s.status === 'predicted') || state.stations.find((s) => s.connectors.some((c) => c.status === 'occupied'));
        if (candidate) {
          state.selectedStationId = candidate.id;
          map.panTo([candidate.lat, candidate.lng], { animate: true });
          triggerStationRelease(candidate.id, renderAll);
        } else {
          showToast({
            type: 'info',
            title: 'Todos os postos já estão livres',
            message: 'Você pode restaurar a demonstração em "Minhas Recargas" para simular novamente.'
          });
        }
      });
    }

    if (btnFeedback) {
      btnFeedback.addEventListener('click', (e) => {
        e.preventDefault();
        openDialog({
          title: 'Enviar Feedback da Comunidade',
          bodyHtml: `
            <p style="font-size:13px;color:var(--text2);margin-bottom:10px">Ajude a melhorar o corredor piloto de Boa Viagem reportando novos eletropostos ou ajustes de tarifa.</p>
            <input type="text" class="dg-input" id="fbInput" placeholder="Ex: Novo carregador na Av. Boa Viagem, 3200...">
            <button type="button" class="dg-btn" id="fbSend" style="width:100%;margin-top:12px">Enviar contribuição</button>
          `,
          onMount(wrap) {
            wrap.querySelector('#fbSend').addEventListener('click', () => {
              closeDialog();
              showToast({ type: 'success', title: 'Feedback enviado!', message: 'Obrigado por contribuir com a rede neutra EletroLink.' });
            });
          }
        });
      });
    }

    renderAll();
  }

  // ===== PAGE 2: filtros.html (Filtros Avançados F6) =====
  function initFiltersPage() {
    const mapContainer = document.getElementById('leafletFiltersMap');
    if (!mapContainer) return;

    const map = createLeafletMap(mapContainer, [USER_POS.lat, USER_POS.lng - 0.008], 14);
    let markersLayer = L.layerGroup().addTo(map);
    let radiusCircle = null;

    L.marker([USER_POS.lat, USER_POS.lng], { icon: createUserPinIcon() }).addTo(map);

    const draft = clone(state.filters);
    const radiusSteps = [0.3, 0.5, 0.8, 1.5, 2.5, 3.0];

    const tagsEl = document.getElementById('activeFilterTags');
    const plugOptions = document.querySelectorAll('.opt[data-plug]');
    const powerButtons = document.querySelectorAll('.seg button[data-power]');
    const tariffChips = document.querySelectorAll('.pills .chip[data-tariff]');
    const radiusRange = document.getElementById('radiusRange');
    const radiusFill = document.getElementById('radiusFill');
    const radiusThumb = document.getElementById('radiusThumb');
    const radiusVal = document.getElementById('radiusVal');
    const insightProb = document.getElementById('insightProb');
    const insightDesc = document.getElementById('insightDesc');
    const footerCount = document.getElementById('footerCount');
    const footerFluid = document.getElementById('footerFluid');
    const applyBtn = document.getElementById('applyFiltersBtn');
    const clearBtn = document.getElementById('clearAllFilters');

    function syncRadiusSlider() {
      let idx = radiusSteps.findIndex((v) => Math.abs(v - draft.radiusKm) < 0.05);
      if (idx < 0) idx = 4;
      radiusRange.value = idx;
      const pct = (idx / (radiusSteps.length - 1)) * 100;
      radiusFill.style.width = pct + '%';
      radiusThumb.style.left = pct + '%';
      const distTxt = draft.radiusKm < 1 ? `${Math.round(draft.radiusKm * 1000)} m` : `${draft.radiusKm.toFixed(1).replace('.', ',')} km`;
      radiusVal.textContent = `${distTxt} (~${formatWalkMin(draft.radiusKm)} min)`;
    }

    function renderFiltersUI() {
      // Plugs
      plugOptions.forEach((opt) => {
        const plug = opt.dataset.plug;
        const on = draft.plugs.includes(plug);
        opt.classList.toggle('inactive', !on);
        const cb = opt.querySelector('.cb');
        cb.innerHTML = on ? '<svg class="ico" style="font-size:13px"><use href="#check"/></svg>' : '';
      });

      // Power
      powerButtons.forEach((btn) => {
        const pw = Number(btn.dataset.power);
        btn.classList.toggle('on', draft.minPower === pw);
      });

      // Tariff
      tariffChips.forEach((ch) => {
        ch.classList.toggle('on', draft.tariff === ch.dataset.tariff);
      });

      syncRadiusSlider();

      // Active tags
      const tags = [];
      draft.plugs.forEach((p) => tags.push({ kind: 'plug', val: p, html: `<i class="dot"></i>${p}` }));
      const rTxt = draft.radiusKm < 1 ? `${Math.round(draft.radiusKm * 1000)}m` : `${draft.radiusKm.toFixed(1).replace('.', ',')}km`;
      tags.push({ kind: 'radius', val: draft.radiusKm, html: `<svg class="ico" style="font-size:11px"><use href="#walk"/></svg>Raio ${rTxt}` });
      if (draft.minPower > 0) {
        tags.push({ kind: 'power', val: draft.minPower, hl: true, html: `<svg class="ico" style="font-size:10px"><use href="#bolt"/></svg>≥ ${draft.minPower} kW` });
      }
      if (draft.tariff !== 'all') {
        tags.push({ kind: 'tariff', val: draft.tariff, hl: true, html: draft.tariff === 'free' ? 'Apenas Gratuitos' : 'Até R$ 2,00/kWh' });
      }

      tagsEl.innerHTML = tags
        .map((t) => `<span class="tag ${t.hl ? 'hl' : ''}" data-rm-kind="${t.kind}" data-rm-val="${t.val}">${t.html}<svg class="ico"><use href="#x"/></svg></span>`)
        .join('');

      tagsEl.querySelectorAll('.tag').forEach((tagEl) => {
        tagEl.addEventListener('click', () => {
          const k = tagEl.dataset.rmKind;
          const v = tagEl.dataset.rmVal;
          if (k === 'plug' && draft.plugs.length > 1) draft.plugs = draft.plugs.filter((x) => x !== v);
          if (k === 'power') {
            draft.minPower = 0;
            draft.ultraFast = false;
          }
          if (k === 'tariff') draft.tariff = 'all';
          if (k === 'radius') draft.radiusKm = 2.5;
          renderFiltersUI();
        });
      });

      // Compute matches
      const matches = state.stations.filter((st) => matchesFilters(st, draft));
      const freeMatches = matches.filter((st) => st.status !== 'maintenance' && st.connectors.some((c) => c.status === 'available'));
      const prob = matches.length === 0 ? 15 : Math.min(96, Math.round(55 + (freeMatches.length / matches.length) * 40));

      insightProb.textContent = `${prob}% de probabilidade`;
      insightDesc.textContent =
        matches.length > 0
          ? `Tomada livre estimada sem filas no raio de ${rTxt} em Boa Viagem nos próximos 30 minutos.`
          : `Amplie o raio de busca ou reduza a potência mínima para encontrar estações compatíveis.`;

      footerCount.innerHTML = `<i></i>${matches.length} ${matches.length === 1 ? 'carregador compatível' : 'carregadores compatíveis'}`;
      footerFluid.textContent = prob >= 80 ? 'Alta fluidez' : prob >= 50 ? 'Fluidez moderada' : 'Baixa oferta';
      applyBtn.innerHTML = `<svg class="ico" style="font-size:18px"><use href="#check-circle"/></svg>Aplicar Filtros (${matches.length} ${matches.length === 1 ? 'resultado encontrado' : 'resultados encontrados'})`;

      // Update background Leaflet map
      if (radiusCircle) map.removeLayer(radiusCircle);
      radiusCircle = L.circle([USER_POS.lat, USER_POS.lng], {
        radius: draft.radiusKm * 1000,
        color: '#004ac6',
        weight: 1.5,
        opacity: 0.35,
        fillColor: '#004ac6',
        fillOpacity: 0.05
      }).addTo(map);

      markersLayer.clearLayers();
      matches.forEach((st) => {
        const sum = getStationSummary(st);
        const dotColor = st.status === 'maintenance' ? 'var(--red)' : st.status === 'predicted' ? 'var(--amber)' : 'var(--teal)';
        const badgeStyle = sum.maxKw >= 60 ? 'background:var(--s5);color:var(--navy)' : 'background:var(--mint);color:var(--mint-text)';
        const icon = L.divIcon({
          className: 'el-marker-icon',
          html: `<div class="mappin"><i style="background:${dotColor}"></i><b>${st.shortName}</b><span style="${badgeStyle}">${sum.maxKw} kW</span></div>`,
          iconSize: [0, 0],
          iconAnchor: [0, 0]
        });
        L.marker([st.lat, st.lng], { icon })
          .addTo(markersLayer)
          .on('click', () => {
            state.selectedStationId = st.id;
            saveState();
            window.location.href = 'detalhes.html?id=' + st.id;
          });
      });
    }

    plugOptions.forEach((opt) => {
      opt.addEventListener('click', () => {
        const p = opt.dataset.plug;
        if (draft.plugs.includes(p)) {
          if (draft.plugs.length > 1) draft.plugs = draft.plugs.filter((x) => x !== p);
        } else {
          draft.plugs.push(p);
        }
        renderFiltersUI();
      });
    });

    powerButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        draft.minPower = Number(btn.dataset.power);
        draft.ultraFast = draft.minPower >= 50;
        renderFiltersUI();
      });
    });

    tariffChips.forEach((ch) => {
      ch.addEventListener('click', () => {
        draft.tariff = ch.dataset.tariff;
        renderFiltersUI();
      });
    });

    radiusRange.addEventListener('input', () => {
      draft.radiusKm = radiusSteps[Number(radiusRange.value)] || 2.5;
      renderFiltersUI();
    });

    clearBtn.addEventListener('click', () => {
      Object.assign(draft, clone(DEFAULT_STATE.filters));
      renderFiltersUI();
    });

    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      state.filters = clone(draft);
      saveState();
      window.location.href = 'index.html';
    });

    const fLocate = document.getElementById('fLocate');
    const fLayers = document.getElementById('fLayers');
    const fZoomIn = document.getElementById('fZoomIn');
    const fZoomOut = document.getElementById('fZoomOut');
    if (fLocate) fLocate.addEventListener('click', () => map.setView([USER_POS.lat, USER_POS.lng - 0.008], 14, { animate: true }));
    if (fLayers) fLayers.addEventListener('click', () => map.cycleLayer());
    if (fZoomIn) fZoomIn.addEventListener('click', () => map.zoomIn());
    if (fZoomOut) fZoomOut.addEventListener('click', () => map.zoomOut());

    renderFiltersUI();
  }

  // ===== PAGE 3: detalhes.html (Detalhes, Previsão F4 & Rota F3) =====
  function initDetailsPage() {
    const mapContainer = document.getElementById('leafletDetailMap');
    if (!mapContainer) return;

    const params = new URLSearchParams(window.location.search);
    const stationId = params.get('id') || state.selectedStationId || 'duo-eletroposto';
    const st = state.stations.find((s) => s.id === stationId) || state.stations[0];
    state.selectedStationId = st.id;
    saveState();

    const km = getDistanceKm(st);
    const distTxt = formatDist(km);
    const driveMin = formatDriveMin(km);
    const walkMin = formatWalkMin(km);

    document.title = `EletroLink – ${st.name}`;

    // Populate left column
    document.getElementById('dtCode').innerHTML = `<i></i>ID: ${st.code}`;
    document.getElementById('dtNet').textContent = st.networkBadge;
    document.getElementById('dtName').textContent = st.name;
    document.getElementById('dtAddr').innerHTML = `<svg class="ico"><use href="#pin"/></svg>${st.address} - ${st.city} <span style="color:var(--muted);font-weight:700">•</span> <b>${distTxt} de distância</b>`;
    document.getElementById('dtTotemLabel').innerHTML = `<svg class="ico" style="font-size:12px"><use href="#car"/></svg>${st.totemLabel}`;
    document.getElementById('dtPhotoVer').textContent = st.photoVerified;

    function renderPredictionCard() {
      const stNow = state.stations.find((s) => s.id === st.id);
      const isAlertOn = state.alerts.includes(stNow.id);
      const stBadge = document.getElementById('dtPredBadge');
      const predVal = document.getElementById('dtPredVal');
      const predSub = document.getElementById('dtPredSub');
      const predConf = document.getElementById('dtPredConf');
      const predBasis = document.getElementById('dtPredBasis');
      const predUpd = document.getElementById('dtPredUpd');
      const predAlertSlot = document.getElementById('dtPredAlertSlot');

      if (stNow.status === 'maintenance') {
        stBadge.innerHTML = `<i style="background:var(--red)"></i>Em Manutenção`;
        predVal.textContent = 'Indisponível';
        predSub.innerHTML = `<svg class="ico"><use href="#alert"/></svg>${stNow.maintenanceText}`;
      } else if (stNow.status === 'releasing') {
        stBadge.innerHTML = `<i style="background:var(--teal)"></i>Liberando agora`;
        predVal.textContent = 'Livre em ~1 min';
        predSub.innerHTML = `<svg class="ico"><use href="#check-circle"/></svg>Check-out em andamento detectado agora (${getNowClock()}).`;
      } else if (stNow.status === 'predicted' && stNow.prediction.etaMinutes > 0) {
        stBadge.innerHTML = `<i style="background:#f59e0b"></i>Parcialmente Ocupado`;
        predVal.textContent = `Livre em ~${stNow.prediction.etaMinutes} min`;
        predSub.innerHTML = `<svg class="ico"><use href="#clock"/></svg>Vaga prevista para <b>~${getClockPlus(stNow.prediction.etaMinutes)}</b> (Cálculo realizado às ${getNowClock()}).`;
      } else {
        stBadge.innerHTML = `<i style="background:var(--green)"></i>Disponível Agora`;
        predVal.textContent = 'Vaga Livre Agora';
        predSub.innerHTML = `<svg class="ico"><use href="#check-circle"/></svg>Sem fila estimada nos próximos 30 min (Atualizado às ${getNowClock()}).`;
      }

      predConf.innerHTML = `
        <span><svg class="ico"><use href="#check-circle"/></svg>${stNow.prediction.confidence} Confiança</span>
        <div>${'<i></i>'.repeat(stNow.prediction.confidenceScore)}</div>
      `;
      predBasis.textContent = stNow.prediction.basis;
      predUpd.innerHTML = `<svg class="ico"><use href="#clock"/></svg>Atualizado há ${stNow.prediction.lastUpdatedMin} min por <b style="color:var(--primary)">${stNow.prediction.lastUpdatedBy}</b>`;

      if (stNow.status === 'predicted') {
        predAlertSlot.innerHTML = `
          <div style="display:flex;gap:8px;margin-top:4px">
            <button type="button" id="dtAlertToggle" class="alert-btn ${isAlertOn ? 'active' : ''}" style="flex:1">
              <svg class="ico" style="font-size:14px"><use href="#${isAlertOn ? 'check-circle' : 'clock'}"/></svg>
              ${isAlertOn ? 'Alerta de vaga livre ativado' : 'Avisar quando liberar a vaga'}
            </button>
            <button type="button" id="dtSimFree" class="alert-btn" style="background:var(--s2);color:var(--primary)">
              Simular check-out
            </button>
          </div>
        `;
        document.getElementById('dtAlertToggle').addEventListener('click', () => {
          if (state.alerts.includes(stNow.id)) {
            state.alerts = state.alerts.filter((x) => x !== stNow.id);
          } else {
            state.alerts.push(stNow.id);
            showToast({
              type: 'info',
              title: 'Alerta ativado (F4)',
              message: `Avisaremos assim que o conector ocupado em ${stNow.shortName} iniciar liberação.`
            });
          }
          saveState();
          renderPredictionCard();
        });
        document.getElementById('dtSimFree').addEventListener('click', () => {
          triggerStationRelease(stNow.id, () => {
            renderPredictionCard();
            renderConnectors();
          });
        });
      } else {
        predAlertSlot.innerHTML = '';
      }
    }

    function renderConnectors() {
      const stNow = state.stations.find((s) => s.id === st.id);
      const wrap = document.getElementById('dtConns');
      document.getElementById('dtConnCount').textContent = `${stNow.connectors.length} ${stNow.connectors.length === 1 ? 'Ponto de Carga' : 'Pontos de Carga'}`;
      wrap.innerHTML = stNow.connectors
        .map((c) => {
          const isUsed = c.status === 'occupied';
          const isMaint = c.status === 'maintenance';
          const ico = c.type === 'Tipo 2' ? 'plug' : 'bolt';
          const statusLabel = isMaint
            ? `<span class="st" style="background:var(--red-bg);color:var(--red-dark)"><i style="background:var(--red)"></i>INOPERANTE</span>`
            : isUsed
            ? `<span class="st"><i></i>Em uso (~${c.etaMinutes}m restantes)</span>`
            : `<span class="st"><i></i>LIVRE AGORA</span>`;
          const priceHtml = c.free
            ? `<b class="g">GRÁTIS</b><small>${c.freeNote || 'Cortesia'}</small>`
            : `<b>${formatPrice(c.pricePerKwh)}</b><small>por kWh consumido</small>`;
          const bottomHtml = isMaint
            ? `<div class="warn" style="margin-top:4px">${stNow.maintenanceText}</div>`
            : isUsed
            ? `<div class="prog"><div class="t"><span>Veículo conectado: ${c.vehicle || 'EV'}</span><span>${c.progress || 80}% concluído</span></div><div class="bar"><i style="width:${c.progress || 80}%"></i></div></div>`
            : `<div class="est"><span>${c.estimateText || 'Pronto para recarga'}</span><b>${c.tagRight || 'Disponível'}</b></div>`;
          return `
            <div class="cn ${isUsed || isMaint ? 'used' : ''}">
              <div class="r">
                <div class="m">
                  <div class="ic"><svg class="ico"><use href="#${ico}"/></svg></div>
                  <div class="mm">
                    <div class="ln"><h3>${c.name}</h3>${statusLabel}</div>
                    <div class="sp"><b>${c.mode}</b>•<b class="d">${c.powerKw} kW</b>•<span>${c.cable}</span></div>
                  </div>
                </div>
                <div class="pr">${priceHtml}</div>
              </div>
              ${bottomHtml}
            </div>`;
        })
        .join('');
    }

    // Amenities & Telemetry
    document.getElementById('dtAmenGrid').innerHTML = st.amenities
      .map((a) => `<div><svg class="ico"><use href="#${a.icon}"/></svg>${a.label}</div>`)
      .join('');
    document.getElementById('dtAmenTip').textContent = st.accessTip;

    document.getElementById('dtTele').innerHTML = `
      <div><small>Potência Máxima</small><b>${st.telemetry.maxKw} kW</b><em>${st.telemetry.currentType}</em></div>
      <div><small>Taxa de Sucesso</small><b>${st.telemetry.successRate}</b><em>Últimos 30 dias</em></div>
      <div><small>Avaliação Média</small><b>${st.telemetry.rating} <svg class="ico fill"><use href="#star"/></svg></b><em class="m">(${st.telemetry.charges} recargas)</em></div>
    `;

    // External Google Maps route link (F3)
    const goExternal = document.getElementById('dtGoExternal');
    goExternal.href = `https://www.google.com/maps/dir/?api=1&origin=${USER_POS.lat},${USER_POS.lng}&destination=${st.lat},${st.lng}&travelmode=driving`;
    goExternal.target = '_blank';
    goExternal.rel = 'noopener noreferrer';

    // Start charge -> checkout.html (F5)
    const startChargeBtn = document.getElementById('dtStartCharge');
    const isAlreadyChargingHere =
      state.activeSession && !state.activeSession.finished && state.activeSession.stationId === st.id;

    if (st.status === 'maintenance') {
      startChargeBtn.style.opacity = '0.5';
      startChargeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast({ type: 'amber', title: 'Totem indisponível', message: 'Este carregador está em manutenção preventiva no momento.' });
      });
    } else {
      startChargeBtn.href = `checkout.html?id=${st.id}`;
      if (isAlreadyChargingHere) {
        startChargeBtn.innerHTML = `<svg class="ico"><use href="#bolt"/></svg>Ver minha sessão ativa / Fazer check-out`;
      }
      startChargeBtn.addEventListener('click', () => {
        const stLive = state.stations.find((s) => s.id === st.id);
        const chosenConn = stLive.connectors.find((c) => c.status === 'available') || stLive.connectors[0];
        startChargingSession(stLive, chosenConn);
      });
    }

    // Refresh prediction button
    document.getElementById('dtRefreshPred').addEventListener('click', () => {
      const stNow = state.stations.find((s) => s.id === st.id);
      if (stNow.prediction.etaMinutes && stNow.prediction.etaMinutes > 2) {
        stNow.prediction.etaMinutes -= 1;
      }
      stNow.prediction.lastUpdatedMin = 0;
      saveState();
      renderPredictionCard();
      showToast({ type: 'info', title: 'Previsão recalculada', message: 'Dados sincronizados com check-outs recentes de Boa Viagem.', duration: 2800 });
    });

    // Right column map bar & approach card
    document.getElementById('dtRouteBar').innerHTML = `
      <span class="a"><i></i>Modo Aproximação: ${distTxt}</span>
      <div><span><i style="background:var(--blue)"></i>Carro (${driveMin} min)</span><span><i style="background:var(--teal)"></i>A pé (${walkMin} min)</span></div>
    `;
    document.getElementById('dtDirBox').innerHTML = `
      <b><svg class="ico"><use href="#navigate"/></svg>Acesso ao Totem: ${st.approachShort}</b>
      <p>${st.accessTip}</p>
    `;

    renderPredictionCard();
    renderConnectors();

    // Real Leaflet approach map
    const midLat = (USER_POS.lat + st.lat) / 2;
    const midLng = (USER_POS.lng + st.lng) / 2;
    const map = createLeafletMap(mapContainer, [midLat, midLng], 15);

    // Build realistic corridor polyline via Boa Viagem avenues
    const wp1 = [USER_POS.lat, USER_POS.lng];
    const wpMid = [(USER_POS.lat + st.lat) / 2 + 0.0012, (USER_POS.lng + st.lng) / 2 - 0.0008];
    const wpDest = [st.lat, st.lng];

    L.polyline([wp1, wpMid, wpDest], {
      color: '#2563eb',
      weight: 5,
      opacity: 0.85,
      lineCap: 'round'
    }).addTo(map);

    L.polyline([wp1, [(USER_POS.lat + st.lat) / 2 - 0.0006, (USER_POS.lng + st.lng) / 2 + 0.0006], wpDest], {
      color: '#006a61',
      weight: 3,
      dashArray: '6 8',
      opacity: 0.85
    }).addTo(map);

    L.marker(wp1, { icon: createUserPinIcon() }).addTo(map);

    const destIcon = L.divIcon({
      className: 'el-marker-icon',
      html: `<div style="transform:translate(-50%,-100%);display:flex;flex-direction:column;align-items:center">
               <div style="background:#131b2e;color:#fff;padding:8px 12px;border-radius:10px;box-shadow:var(--shadow-lg);white-space:nowrap">
                 <div style="font-size:10px;font-weight:700;color:#86f2e4;font-family:'Plus Jakarta Sans',sans-serif">${st.shortName.toUpperCase()}</div>
                 <div style="font-size:10px;opacity:.9">${st.accessGate}</div>
               </div>
               <div style="width:14px;height:14px;border-radius:9999px;background:#006a61;border:3px solid #fff;margin-top:4px;box-shadow:var(--shadow-md)"></div>
             </div>`,
      iconSize: [0, 0]
    });
    L.marker(wpDest, { icon: destIcon }).addTo(map);

    map.fitBounds(L.latLngBounds([wp1, wpDest]).pad(0.28));

    document.getElementById('dLocate').addEventListener('click', () => map.fitBounds(L.latLngBounds([wp1, wpDest]).pad(0.28)));
    document.getElementById('dZoomIn').addEventListener('click', () => map.zoomIn());
    document.getElementById('dZoomOut').addEventListener('click', () => map.zoomOut());
  }

  // ===== PAGE 4: checkout.html (Check-out Ágil 1 Toque F5) =====
  function initCheckoutPage() {
    const finishBtn = document.getElementById('coFinishBtn');
    if (!finishBtn) return;

    const params = new URLSearchParams(window.location.search);
    const stationId = params.get('id') || (state.activeSession && state.activeSession.stationId) || state.selectedStationId || 'duo-eletroposto';
    const st = state.stations.find((s) => s.id === stationId) || state.stations[0];
    const conn =
      (state.activeSession && st.connectors.find((c) => c.id === state.activeSession.connectorId)) ||
      st.connectors.find((c) => c.status !== 'maintenance') ||
      st.connectors[0];

    // Background context metrics
    const bgName = document.getElementById('coBgStation');
    const bgKwh = document.getElementById('coBgKwh');
    const bgPts = document.getElementById('coBgPts');
    if (bgName) bgName.textContent = st.name;
    if (bgKwh) bgKwh.innerHTML = `${state.monthlyKwh.toFixed(1)} <small>kWh</small>`;
    if (bgPts) bgPts.innerHTML = `${state.communityPoints} <small>pts</small>`;

    // Modal header & station info
    document.getElementById('coCloseLink').href = `detalhes.html?id=${st.id}`;
    document.getElementById('coStationName').textContent = st.name;
    document.getElementById('coTotemSub').innerHTML = `<span>Totem #${st.code.slice(-2)}</span>•<span style="background:none;padding:0">${st.neighborhood}</span>`;
    document.getElementById('coConnType').textContent = conn.type;
    document.getElementById('coConnPower').textContent = `${conn.powerKw} kW ${conn.mode.includes('DC') ? 'DC' : 'AC'}`;

    let elapsedMin = (state.activeSession && state.activeSession.elapsedMin) || 34;
    let kwh = (state.activeSession && state.activeSession.kwh) || 11.4;
    let pct = 68;

    const timeEl = document.getElementById('coTime');
    const energyEl = document.getElementById('coEnergy');
    const rangeEl = document.getElementById('coRange');
    const barEl = document.getElementById('coProgressBar');
    const tariffLink = document.getElementById('coTariffLink');

    function renderMetrics() {
      timeEl.innerHTML = `${elapsedMin} <span>min</span>`;
      energyEl.innerHTML = `~${kwh.toFixed(1)} <span>kWh</span>`;
      rangeEl.textContent = `~${Math.round(kwh * 5.4)} km de range`;
      barEl.style.width = Math.min(100, pct) + '%';
      const priceLabel = conn.free ? 'Tarifa Gratuita (Cortesia)' : `Ver detalhes da tarifa (${formatPrice(conn.pricePerKwh)}/kWh)`;
      tariffLink.innerHTML = `<svg class="ico"><use href="#receipt"/></svg>${priceLabel}`;
    }
    renderMetrics();

    // Subtle live ticking during pitch
    const tick = setInterval(() => {
      if (state.activeSession && state.activeSession.finished) return;
      kwh = Number((kwh + 0.1).toFixed(1));
      pct = Math.min(99, pct + 1);
      renderMetrics();
    }, 4000);

    // 1-Tap Check-out (F5)
    finishBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearInterval(tick);

      if (!state.activeSession || state.activeSession.finished) {
        state.activeSession = { stationId: st.id, connectorId: conn.id, kwh, finished: false };
      }
      const res = completeActiveSession(kwh);
      const costStr = res ? res.costStr : (conn.free ? 'Grátis' : formatPrice(kwh * conn.pricePerKwh));

      // Replace action area with instant confirmation
      const finBox = document.getElementById('coFinBox');
      finBox.innerHTML = `
        <div class="fin-done">
          <svg class="ico"><use href="#check-circle"/></svg>
          <div>
            Check-out confirmado em 1 toque! +15 pts na comunidade.<br>
            <span style="font-weight:500">Status em ${st.shortName} atualizado para <b>${res && res.target ? res.target.statusNote : 'Livre'}</b> e alertas disparados.</span>
          </div>
        </div>
        <a class="btn" href="index.html" style="margin-top:4px">Voltar ao Mapa de Boa Viagem <svg class="ico"><use href="#arrow-right"/></svg></a>
      `;

      showToast({
        type: 'success',
        title: 'Carregador liberado com sucesso!',
        message: `Previsão recalibrada em ${st.shortName}. Total estimado: ${costStr}.`,
        duration: 6000
      });
    });

    // Tariff details modal
    tariffLink.addEventListener('click', (e) => {
      e.preventDefault();
      const totalEst = conn.free ? 'R$ 0,00 (Cortesia)' : formatPrice(kwh * conn.pricePerKwh);
      openDialog({
        title: 'Detalhes da Tarifa',
        bodyHtml: `
          <div class="dg-list">
            <div class="dg-item"><div><b>Estação</b><small>${st.name}</small></div><span>${st.network}</span></div>
            <div class="dg-item"><div><b>Conector</b><small>${conn.name} (${conn.powerKw} kW)</small></div><b>${conn.free ? 'Grátis' : formatPrice(conn.pricePerKwh) + '/kWh'}</b></div>
            <div class="dg-item"><div><b>Consumo atual</b><small>${elapsedMin} min decorridos</small></div><b>${kwh.toFixed(1)} kWh</b></div>
            <div class="dg-item"><div><b>Valor estimado</b><small>Sem taxa de desbloqueio</small></div><b style="color:var(--primary)">${totalEst}</b></div>
          </div>
        `
      });
    });

    // Report problem modal
    document.getElementById('coReportLink').addEventListener('click', (e) => {
      e.preventDefault();
      openDialog({
        title: 'Reportar Problema no Totem',
        bodyHtml: `
          <p style="font-size:13px;color:var(--text2);margin-bottom:10px">Selecione o ocorrido em <b>${st.shortName}</b> para alertar outros motoristas em Boa Viagem:</p>
          <div class="dg-list">
            <button type="button" class="dg-item" data-rep="offline" style="text-align:left;width:100%"><div><b>Totem fora do ar / tela apagada</b><small>Marca o posto em alerta de manutenção</small></div><svg class="ico"><use href="#arrow-right"/></svg></button>
            <button type="button" class="dg-item" data-rep="blocked" style="text-align:left;width:100%"><div><b>Vaga bloqueada por carro a combustão</b><small>Envia aviso para a comunidade</small></div><svg class="ico"><use href="#arrow-right"/></svg></button>
            <button type="button" class="dg-item" data-rep="cable" style="text-align:left;width:100%"><div><b>Cabo ou conector danificado</b><small>Notifica a operadora ${st.network}</small></div><svg class="ico"><use href="#arrow-right"/></svg></button>
          </div>
        `,
        onMount(wrap) {
          wrap.querySelectorAll('button[data-rep]').forEach((b) => {
            b.addEventListener('click', () => {
              if (b.dataset.rep === 'offline') {
                const target = state.stations.find((s) => s.id === st.id);
                if (target) {
                  target.status = 'maintenance';
                  target.statusNote = 'Inoperante';
                  target.maintenanceTitle = 'Reportado pela comunidade';
                  target.maintenanceText = 'Motorista reportou falha no totem agora. Operadora notificada.';
                  saveState();
                }
              }
              closeDialog();
              showToast({
                type: 'amber',
                title: 'Ocorrência registrada',
                message: `Obrigado! A comunidade EletroLink e a rede ${st.network} foram notificadas.`
              });
            });
          });
        }
      });
    });
  }

  // ===== Bootstrap =====
  document.addEventListener('DOMContentLoaded', () => {
    wireGlobalChrome();
    initMapPage();
    initFiltersPage();
    initDetailsPage();
    initCheckoutPage();
  });
})();
