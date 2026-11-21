/* EletroLink Mobile MVP – Boa Viagem, Recife (F1, F3, F4, F5, F6) */
(function () {
  'use strict';

  const STORAGE_KEY = 'eletrolink_mvp_bv_v3';
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
      lat: -8.1257,
      lng: -34.9078,
      status: 'available',
      statusNote: '2/2 Livres',
      totemLabel: 'Estacionamento Térreo • Vagas 01-02',
      accessTip: 'Acesso direto pela R. Ernesto de Paula Santos, 465. Totem DC 60 kW disponível 24h.',
      detourMin: 2,
      prediction: { etaMinutes: 0, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 8, lastUpdatedBy: '@camila_bv', lastUpdatedMin: 2, basis: '2/2 conectores CCS2 60 kW livres agora, validado por 8 check-outs recentes.' },
      connectors: [
        { id: 'c1', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 1.95, free: false, status: 'available' },
        { id: 'c2', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 1.95, free: false, status: 'available' }
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
      lat: -8.1338,
      lng: -34.9068,
      status: 'predicted',
      statusNote: 'Livre em ~12m',
      totemLabel: 'Pátio Duo • Totens 60 kW e 40 kW',
      accessTip: 'R. Padre Cabral, 161, corredor sul de Boa Viagem. Aberto 24h (5.0 ★).',
      detourMin: 3,
      prediction: { etaMinutes: 12, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 9, lastUpdatedBy: '@marcos_ev', lastUpdatedMin: 2, basis: 'CCS2 40 kW (1/1) livre agora; CCS2 60 kW com liberação estimada em ~12 min.' },
      connectors: [
        { id: 'c1', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 40, pricePerKwh: 1.89, free: false, status: 'available' },
        { id: 'c2', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 1.99, free: false, status: 'occupied', etaMinutes: 12, vehicle: 'BYD Dolphin', progress: 84 }
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
      lat: -8.1259,
      lng: -34.9094,
      status: 'ultra',
      statusNote: '2/2 Livres',
      totemLabel: 'Hub Stop Seek • Recarga Ultra 24h',
      accessTip: 'R. Ernesto de Paula Santos, 153. Estação 5.0 ★ com 26 avaliações no Google.',
      detourMin: 2,
      prediction: { etaMinutes: 0, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 11, lastUpdatedBy: '@julia_rec', lastUpdatedMin: 3, basis: 'Telemetria ativa + 11 check-outs colaborativos nas últimas 24h.' },
      connectors: [
        { id: 'c1', name: 'CCS2 Turbo', type: 'CCS2', mode: 'DC Ultra Rápido', powerKw: 120, pricePerKwh: 2.29, free: false, status: 'available' },
        { id: 'c2', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Semi-Rápido', powerKw: 22, pricePerKwh: 1.75, free: false, status: 'available' }
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
      lat: -8.1228,
      lng: -34.9062,
      status: 'predicted',
      statusNote: 'Livre em ~18m',
      totemLabel: 'Ribeiro de Brito • Totens DC/AC',
      accessTip: 'Entrada pela R. Ribeiro de Brito, 1034. CCS2 60 kW (1/2 livre) e Tipo 2 7 kW.',
      detourMin: 1,
      prediction: { etaMinutes: 18, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 6, lastUpdatedBy: '@pedro_ev', lastUpdatedMin: 4, basis: 'Baseado em 6 check-outs recentes; 1 vaga CCS2 60 kW já está livre.' },
      connectors: [
        { id: 'c1', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 2.10, free: false, status: 'available' },
        { id: 'c2', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Lento', powerKw: 7, pricePerKwh: 1.59, free: false, status: 'occupied', etaMinutes: 18, vehicle: 'GWM Ora 03', progress: 76 }
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
      lat: -8.1221,
      lng: -34.9058,
      status: 'predicted',
      statusNote: 'Livre em ~9m',
      totemLabel: 'Estação Couceiro • 2x CCS2 60 kW',
      accessTip: 'Acesso pela R. Jorge Couceiro da Costa Eiras. Aberto 24h sem cancela.',
      detourMin: 1,
      prediction: { etaMinutes: 9, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 5, lastUpdatedBy: '@ana_ev', lastUpdatedMin: 1, basis: 'Veículo conectado atingiu 88% — liberação prevista em ~9 min.' },
      connectors: [
        { id: 'c1', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 1.98, free: false, status: 'occupied', etaMinutes: 9, vehicle: 'Volvo EX30', progress: 88 },
        { id: 'c2', name: 'CCS2 DC', type: 'CCS2', mode: 'DC Rápido', powerKw: 60, pricePerKwh: 1.98, free: false, status: 'occupied', etaMinutes: 24, vehicle: 'BYD Yuan Plus', progress: 58 }
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
      lat: -8.1187,
      lng: -34.9044,
      status: 'available',
      statusNote: '2/2 Livres',
      totemLabel: 'Shopping Recife • Ed. Garagem D1',
      accessTip: 'Estacionamento do Shopping Recife (R. Padre Carapuceiro, 777). Cortesia AC 22 kW.',
      detourMin: 2,
      prediction: { etaMinutes: 0, confidence: 'Alta', confidenceScore: 3, recentCheckouts: 7, lastUpdatedBy: '@rafael_bv', lastUpdatedMin: 5, basis: 'Alta disponibilidade no horário comercial do Shopping Recife.' },
      connectors: [
        { id: 'c1', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Semi-Rápido', powerKw: 22, pricePerKwh: 0, free: true, status: 'available' },
        { id: 'c2', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Semi-Rápido', powerKw: 22, pricePerKwh: 0, free: true, status: 'available' }
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
      accessTip: 'R. Padre Carapuceiro, 777 (Shopping Recife). Abre às 10h; Tipo 2 22 kW gratuito.',
      detourMin: 2,
      prediction: { etaMinutes: 0, confidence: 'Média', confidenceScore: 2, recentCheckouts: 4, lastUpdatedBy: '@lucas_ev', lastUpdatedMin: 8, basis: 'Vaga única Tipo 2 22 kW com boa rotatividade.' },
      connectors: [
        { id: 'c1', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Semi-Rápido', powerKw: 22, pricePerKwh: 0, free: true, status: 'available' }
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
      lat: -8.1296,
      lng: -34.9010,
      status: 'available',
      statusNote: '1/1 Livre',
      totemLabel: 'Av. Conselheiro Aguiar, 4845 • 22 kW',
      accessTip: 'Ponto público 24h na Av. Conselheiro Aguiar, 4845, a 2 min da orla.',
      detourMin: 1,
      prediction: { etaMinutes: 0, confidence: 'Média', confidenceScore: 2, recentCheckouts: 3, lastUpdatedBy: '@sofia_ev', lastUpdatedMin: 9, basis: 'Baseado em 3 check-outs recentes na Av. Conselheiro Aguiar.' },
      connectors: [
        { id: 'c1', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Semi-Rápido', powerKw: 22, pricePerKwh: 1.79, free: false, status: 'available' }
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
      maintenanceText: 'Ponto Tipo 2 (7 kW) temporariamente fechado para manutenção preventiva.',
      totemLabel: 'Av. Conselheiro Aguiar, 2860 • Totem AC',
      accessTip: 'Estação temporariamente fechada no Google Maps. Evite o deslocamento.',
      detourMin: 2,
      prediction: { etaMinutes: null, confidence: 'Baixa', confidenceScore: 1, recentCheckouts: 0, lastUpdatedBy: '@monitor_eletrolink', lastUpdatedMin: 15, basis: 'Marcado como temporariamente fechado.' },
      connectors: [
        { id: 'c1', name: 'Tipo 2 AC', type: 'Tipo 2', mode: 'AC Lento', powerKw: 7, pricePerKwh: 1.50, free: false, status: 'maintenance' }
      ]
    }
  ];

  const DEFAULT_STATE = {
    stations: DEFAULT_STATIONS,
    filters: { onlyAvailable: false, ultraFast: false, plugs: ['CCS2', 'Tipo 2'], minPower: 0, tariff: 'all', radiusKm: 2.5, search: '' },
    selectedStationId: 'zon-charge',
    alerts: [],
    activeSession: null,
    myCar: { model: 'BYD Dolphin', plugs: ['CCS2', 'Tipo 2'] },
    communityPoints: 820,
    monthlyKwh: 148.6,
    history: [
      { id: 'h1', station: 'Zon Charge Charging Station', date: 'Ontem, 18:15', connector: 'CCS2 60 kW', kwh: 24.5, cost: 'R$ 47,78', points: '+15 pts' },
      { id: 'h2', station: 'Duo Eletroposto – Boa Viagem', date: '18/11, 14:40', connector: 'CCS2 40 kW', kwh: 18.2, cost: 'R$ 34,40', points: '+15 pts' },
      { id: 'h3', station: 'Porsche Destination Charging', date: '15/11, 10:05', connector: 'Tipo 2 22 kW', kwh: 12.0, cost: 'Grátis', points: '+15 pts' }
    ]
  };

  const ROUTE_DESTINATIONS = [
    { id: 'aeroporto', label: 'Aeroporto Internacional do Recife', lat: -8.1264, lng: -34.9230 },
    { id: 'shopping-recife', label: 'Shopping Recife (Boa Viagem)', lat: -8.1187, lng: -34.9044 },
    { id: 'dona-lindu', label: 'Parque Dona Lindu (Orla Sul)', lat: -8.1412, lng: -34.9041 },
    { id: 'segundo-jardim', label: 'Segundo Jardim de Boa Viagem', lat: -8.1072, lng: -34.8891 },
    { id: 'riomar', label: 'Shopping RioMar (Pina)', lat: -8.0861, lng: -34.8948 }
  ];

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_STATE);
      const p = JSON.parse(raw);
      return Object.assign(clone(DEFAULT_STATE), p, {
        filters: Object.assign(clone(DEFAULT_STATE.filters), p.filters || {}),
        myCar: Object.assign(clone(DEFAULT_STATE.myCar), p.myCar || {})
      });
    } catch (e) {
      return clone(DEFAULT_STATE);
    }
  }

  let state = loadState();
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function getDistanceKm(st) { return haversineKm(USER_POS.lat, USER_POS.lng, st.lat, st.lng); }
  function formatDist(km) { return km < 1 ? Math.round(km * 1000) + 'm' : km.toFixed(1).replace('.', ',') + ' km'; }
  function formatWalkMin(km) { return Math.max(2, Math.round((km / 4.8) * 60)); }
  function formatPrice(n) { return 'R$ ' + n.toFixed(2).replace('.', ','); }
  function getNowClock() { return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }
  function getClockPlus(m) { return new Date(Date.now() + m * 60000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }

  function getStationSummary(st) {
    const total = st.connectors.length;
    const freeCount = st.connectors.filter((c) => c.status === 'available').length;
    const maxKw = Math.max(...st.connectors.map((c) => c.powerKw));
    const hasFreeTariff = st.connectors.some((c) => c.free);
    const paid = st.connectors.filter((c) => !c.free).map((c) => c.pricePerKwh);
    const minPaid = paid.length ? Math.min(...paid) : 0;
    return { total, freeCount, maxKw, hasFreeTariff, minPaid };
  }

  function matchesFilters(st, f) {
    if (getDistanceKm(st) > f.radiusKm + 0.05) return false;
    if (f.search && f.search.trim()) {
      const q = f.search.trim().toLowerCase();
      const hay = [st.name, st.network, st.address, ...st.connectors.map((c) => c.type)].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (f.onlyAvailable && (st.status === 'maintenance' || !st.connectors.some((c) => c.status === 'available'))) return false;
    if (f.plugs && f.plugs.length && !st.connectors.some((c) => f.plugs.includes(c.type))) return false;
    const minPow = f.ultraFast ? Math.max(f.minPower || 0, 50) : f.minPower || 0;
    if (minPow > 0 && !st.connectors.some((c) => c.powerKw >= minPow)) return false;
    if (f.tariff === 'free' && !st.connectors.some((c) => c.free)) return false;
    if (f.tariff === 'economic' && !st.connectors.some((c) => c.free || c.pricePerKwh <= 2.0)) return false;
    return true;
  }

  function countActiveFilters(f) {
    let n = 0;
    if (f.onlyAvailable) n++;
    if (f.ultraFast || f.minPower > 0) n++;
    if (f.tariff !== 'all') n++;
    if (f.radiusKm !== 2.5) n++;
    if (f.plugs.length !== 2 || !f.plugs.includes('CCS2') || !f.plugs.includes('Tipo 2')) n++;
    return n;
  }

  function recomputeStationStatus(st) {
    if (!st || st.status === 'maintenance') return;
    const sum = getStationSummary(st);
    const occupied = st.connectors.filter((c) => c.status === 'occupied');
    const userHere = st.connectors.some((c) => c.occupiedByUser);
    if (sum.freeCount > 0 && (occupied.length === 0 || userHere)) {
      st.status = sum.maxKw >= 100 ? 'ultra' : 'available';
      st.statusNote = `${sum.freeCount}/${sum.total} ${sum.freeCount === 1 ? 'Livre' : 'Livres'}`;
      st.prediction.etaMinutes = 0;
    } else if (occupied.length > 0) {
      const minEta = Math.min(...occupied.map((c) => c.etaMinutes || 15));
      st.status = 'predicted';
      st.statusNote = userHere && sum.freeCount === 0 ? `0/${sum.total} (Você aqui)` : `Livre em ~${minEta}m`;
      st.prediction.etaMinutes = minEta;
    }
  }

  // ===== Mobile Toast & Modal =====
  function showToast({ type = 'info', title, message, actionLabel, actionHref, onAction, duration = 5000 }) {
    let stack = document.querySelector('.m-toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'm-toast-stack';
      document.body.appendChild(stack);
    }
    const el = document.createElement('div');
    el.className = 'm-toast ' + type;
    el.innerHTML = `
      <div class="tbd">
        <b>${title}</b>
        <p>${message}</p>
        ${actionLabel ? `<div class="tact">${actionHref ? `<a href="${actionHref}">${actionLabel}</a>` : `<button type="button" class="ta">${actionLabel}</button>`}</div>` : ''}
      </div>
      <button type="button" class="tx" aria-label="Fechar"><svg class="ico" style="font-size:13px"><use href="#x"/></svg></button>
    `;
    el.querySelector('.tx').addEventListener('click', () => el.remove());
    if (onAction && el.querySelector('.ta')) {
      el.querySelector('.ta').addEventListener('click', () => { onAction(); el.remove(); });
    }
    stack.appendChild(el);
    if (duration > 0) setTimeout(() => { if (el.isConnected) el.remove(); }, duration);
  }

  function closeModal() {
    const m = document.querySelector('.m-modal-bg');
    if (m) m.remove();
  }

  function openModal({ title, bodyHtml, onMount }) {
    closeModal();
    const bg = document.createElement('div');
    bg.className = 'm-modal-bg';
    bg.innerHTML = `
      <div class="m-modal">
        <div class="grab" style="margin:0 auto"></div>
        <div class="mhd"><h3>${title}</h3><button type="button" class="mx"><svg class="ico"><use href="#x"/></svg></button></div>
        <div class="mbd">${bodyHtml}</div>
      </div>
    `;
    bg.addEventListener('click', (e) => { if (e.target === bg) closeModal(); });
    bg.querySelector('.mx').addEventListener('click', closeModal);
    document.body.appendChild(bg);
    if (onMount) onMount(bg);
  }

  // ===== Active Session (F5) =====
  function startChargingSession(st) {
    const alreadyHere = state.activeSession && !state.activeSession.finished && state.activeSession.stationId === st.id;
    if (!alreadyHere) {
      if (state.activeSession && !state.activeSession.finished) {
        const prev = state.stations.find((s) => s.id === state.activeSession.stationId);
        if (prev) {
          const pc = prev.connectors.find((c) => c.id === state.activeSession.connectorId && c.occupiedByUser);
          if (pc) {
            pc.status = 'available';
            delete pc.occupiedByUser;
            delete pc.etaMinutes;
            recomputeStationStatus(prev);
          }
        }
      }
      const chosen = st.connectors.find((c) => c.status === 'available') || st.connectors[0];
      chosen.status = 'occupied';
      chosen.occupiedByUser = true;
      chosen.vehicle = `Você (${state.myCar.model})`;
      chosen.etaMinutes = 25;
      recomputeStationStatus(st);
      state.activeSession = {
        stationId: st.id,
        connectorId: chosen.id,
        startedAt: Date.now(),
        elapsedMin: 18,
        kwh: Number(((chosen.powerKw * 0.25) / 1.5).toFixed(1)),
        finished: false
      };
      saveState();
    }
    openSessionModal();
  }

  function completeActiveSession() {
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
        }
      });
      recomputeStationStatus(target);
      target.prediction.recentCheckouts = (target.prediction.recentCheckouts || 4) + 1;
      target.prediction.lastUpdatedMin = 0;
      target.prediction.lastUpdatedBy = '@voce';
    }
    const kwh = Number((sess.kwh || 11.4).toFixed(1));
    const costStr = conn && !conn.free ? formatPrice(kwh * conn.pricePerKwh) : 'Grátis';
    state.communityPoints += 15;
    state.monthlyKwh = Number((state.monthlyKwh + kwh).toFixed(1));
    if (target && conn) {
      state.history.unshift({ id: 'h_' + Date.now(), station: target.name, date: 'Agora, ' + getNowClock(), connector: `${conn.type} ${conn.powerKw} kW`, kwh, cost: costStr, points: '+15 pts' });
    }
    state.activeSession = { stationId: sess.stationId, finished: true };
    saveState();
    return { target, conn, costStr };
  }

  function openSessionModal() {
    const sess = state.activeSession;
    if (!sess || sess.finished) return;
    const st = state.stations.find((s) => s.id === sess.stationId);
    if (!st) return;
    const conn = st.connectors.find((c) => c.id === sess.connectorId) || st.connectors[0];
    openModal({
      title: 'Sessão de Recarga Ativa',
      bodyHtml: `
        <div class="mitem">
          <div><b>${st.name}</b><small>${conn.type} • ${conn.powerKw} kW • ${st.neighborhood}</small></div>
          <span class="bd mint"><i></i>Ativo</span>
        </div>
        <div class="m-sess-grid" style="margin:10px 0">
          <div><small>Conector</small><b>${conn.type}</b></div>
          <div><small>Tempo</small><b>${sess.elapsedMin} min</b></div>
          <div><small>Energia</small><b style="color:var(--primary)">~${sess.kwh} kWh</b></div>
        </div>
        <div class="m-pbar" style="margin-bottom:12px"><i></i></div>
        <button type="button" class="mcta" id="mFinishChargeBtn"><svg class="ico"><use href="#check-circle"/></svg>Terminei, liberar o carregador</button>
        <p style="font-size:11px;color:var(--text2);text-align:center;margin-top:8px">Se fechar no X, sua vaga continua ocupada e exibiremos um lembrete na parte inferior.</p>
      `,
      onMount(bg) {
        bg.querySelector('#mFinishChargeBtn').addEventListener('click', () => {
          const res = completeActiveSession();
          closeModal();
          renderActiveBar();
          if (res && res.target) {
            showToast({ type: 'success', title: 'Check-out confirmado (+15 pts)!', message: `Vaga em ${res.target.shortName} atualizada para ${res.target.statusNote}.` });
            setTimeout(() => window.location.reload(), 800);
          }
        });
      }
    });
  }

  function renderActiveBar() {
    const old = document.querySelector('.m-active-bar');
    if (old) old.remove();
    if (!state.activeSession || state.activeSession.finished) return;
    const st = state.stations.find((s) => s.id === state.activeSession.stationId);
    if (!st) return;
    const conn = st.connectors.find((c) => c.id === state.activeSession.connectorId) || st.connectors[0];
    const hasNav = !!document.querySelector('.nav');
    const bar = document.createElement('div');
    bar.className = 'm-active-bar' + (hasNav ? '' : ' no-nav');
    bar.innerHTML = `
      <span class="dot-p"></span>
      <div class="info"><b>Recarga ativa: ${st.shortName}</b><small>${conn.type} ${conn.powerKw} kW • Avise ao terminar</small></div>
      <div class="btns-r">
        <button type="button" class="b-view">Ver</button>
        <button type="button" class="b-end">Terminei</button>
      </div>
    `;
    bar.querySelector('.b-view').addEventListener('click', openSessionModal);
    bar.querySelector('.b-end').addEventListener('click', () => {
      const res = completeActiveSession();
      bar.remove();
      if (res && res.target) {
        showToast({ type: 'success', title: 'Carregador liberado (+15 pts)!', message: `${res.target.shortName}: ${res.target.statusNote}.` });
        setTimeout(() => window.location.reload(), 800);
      }
    });
    document.body.appendChild(bar);
  }

  // ===== Route Planner & History Modals =====
  function openRoutePlanner() {
    openModal({
      title: 'Planejador de Rotas (F3)',
      bodyHtml: `
        <p style="font-size:12px;color:var(--text2);margin-bottom:8px">Escolha o destino saindo de <b>Boa Viagem</b> para ver os postos com menor desvio:</p>
        <select id="mRpDest" class="minput" style="margin-bottom:10px">
          ${ROUTE_DESTINATIONS.map((d) => `<option value="${d.id}">${d.label}</option>`).join('')}
        </select>
        <div class="mlist" id="mRpList"></div>
      `,
      onMount(bg) {
        const sel = bg.querySelector('#mRpDest');
        const list = bg.querySelector('#mRpList');
        const render = () => {
          const dest = ROUTE_DESTINATIONS.find((d) => d.id === sel.value) || ROUTE_DESTINATIONS[0];
          const direct = haversineKm(USER_POS.lat, USER_POS.lng, dest.lat, dest.lng);
          const ranked = state.stations
            .filter((s) => s.status !== 'maintenance')
            .map((s) => {
              const d1 = getDistanceKm(s);
              const extraKm = Math.max(0.1, d1 + haversineKm(s.lat, s.lng, dest.lat, dest.lng) - direct);
              const extraMin = Math.max(1, Math.round((extraKm / 22) * 60));
              return { s, d1, extraMin, sum: getStationSummary(s) };
            })
            .sort((a, b) => a.extraMin - b.extraMin || a.d1 - b.d1);
          list.innerHTML = ranked.slice(0, 4).map(({ s, d1, extraMin, sum }, i) => `
            <a class="mitem" href="detalhes.html?id=${s.id}">
              <div><b>${i === 0 ? '★ ' : ''}${s.shortName}</b><small>Desvio +${extraMin} min • ${formatDist(d1)} • ${sum.maxKw} kW</small></div>
              <span class="bd ${s.status === 'predicted' ? 'amber' : 'mint'}">${s.statusNote}</span>
            </a>`).join('');
        };
        render();
        sel.addEventListener('change', render);
      }
    });
  }

  function openHistoryModal() {
    openModal({
      title: 'Minhas Recargas & Perfil',
      bodyHtml: `
        <div class="m-sess-grid" style="grid-template-columns:1fr 1fr;margin-bottom:10px">
          <div><small>Energia no mês</small><b>${state.monthlyKwh.toFixed(1)} kWh</b></div>
          <div><small>Comunidade</small><b style="color:var(--primary)">${state.communityPoints} pts</b></div>
        </div>
        <div class="mlist">
          ${state.history.map((h) => `<div class="mitem"><div><b>${h.station}</b><small>${h.date} • ${h.connector}</small></div><div style="text-align:right"><b>${h.cost}</b><small style="color:var(--teal)">${h.points}</small></div></div>`).join('')}
        </div>
        <button type="button" id="mResetDemo" style="margin-top:12px;color:var(--primary);font-size:12px;font-weight:700;width:100%;text-align:center">Restaurar dados iniciais da demonstração</button>
      `,
      onMount(bg) {
        bg.querySelector('#mResetDemo').addEventListener('click', () => {
          state = clone(DEFAULT_STATE);
          saveState();
          window.location.reload();
        });
      }
    });
  }

  // ===== Leaflet Factory (Esri Clean, zero API key) =====
  const TILE_LAYERS = [
    { name: 'Mapa Clean', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', attr: '&copy; Esri', clean: true },
    { name: 'OpenStreetMap', url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', attr: '&copy; OSM', clean: false },
    { name: 'Satélite', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', attr: '&copy; Esri', clean: false }
  ];

  function createMap(el, center, zoom) {
    if (typeof L === 'undefined' || !el) return null;
    const map = L.map(el, { center, zoom, minZoom: 12, maxZoom: 19, zoomControl: false, attributionControl: true });
    let idx = 0;
    el.classList.add('map-clean');
    let tile = L.tileLayer(TILE_LAYERS[0].url, { attribution: TILE_LAYERS[0].attr, maxZoom: 19 }).addTo(map);
    map.cycleLayer = () => {
      idx = (idx + 1) % TILE_LAYERS.length;
      map.removeLayer(tile);
      el.classList.toggle('map-clean', TILE_LAYERS[idx].clean);
      tile = L.tileLayer(TILE_LAYERS[idx].url, { attribution: TILE_LAYERS[idx].attr, maxZoom: 19 }).addTo(map);
      showToast({ type: 'info', title: 'Camada alterada', message: TILE_LAYERS[idx].name, duration: 2200 });
    };
    return map;
  }

  function userPinIcon() {
    return L.divIcon({
      className: 'el-m-icon',
      html: `<div class="el-user-pin"><div class="u-halo"></div><div class="u-badge"><svg class="ico" style="width:16px;height:16px"><use href="#pin"/></svg></div><div class="u-tip"></div><div class="u-lab">Você</div></div>`,
      iconSize: [0, 0]
    });
  }

  function triggerRelease(stationId, onUpdate) {
    const st = state.stations.find((s) => s.id === stationId);
    if (!st) return;
    st.status = 'releasing';
    st.statusNote = 'Liberando...';
    saveState();
    if (onUpdate) onUpdate();
    showToast({ type: 'amber', title: 'Check-out em ' + st.shortName, message: 'Status: Ocupado → Liberando...', duration: 3200 });
    setTimeout(() => {
      const target = state.stations.find((s) => s.id === stationId);
      if (!target) return;
      const occ = target.connectors.find((c) => c.status === 'occupied');
      if (occ) { occ.status = 'available'; delete occ.etaMinutes; }
      recomputeStationStatus(target);
      target.prediction.recentCheckouts = (target.prediction.recentCheckouts || 4) + 1;
      saveState();
      if (onUpdate) onUpdate();
      showToast({ type: 'success', title: 'Vaga livre em ' + target.shortName + '!', message: `Status: Liberando → Livre (${target.statusNote}).`, actionLabel: 'Abrir', actionHref: 'detalhes.html?id=' + target.id });
    }, 2400);
  }

  function wireGlobalMobile() {
    const hdr = document.querySelector('.hdr');
    if (hdr && !document.getElementById('mHeaderRouteBtn')) {
      const prof = hdr.querySelector('.prof');
      if (prof) {
        const r = document.createElement('div');
        r.className = 'r';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'mHeaderRouteBtn';
        btn.className = 'm-route-btn';
        btn.innerHTML = `<svg class="ico"><use href="#navigate"/></svg>Rota`;
        btn.addEventListener('click', openRoutePlanner);
        prof.parentNode.insertBefore(r, prof);
        r.appendChild(btn);
        r.appendChild(prof);
        prof.style.cursor = 'pointer';
        prof.addEventListener('click', openHistoryModal);
      }
    }
    document.querySelectorAll('.nav a').forEach((a) => {
      if (a.textContent.includes('Recargas') || a.textContent.includes('Perfil')) {
        a.addEventListener('click', (e) => { e.preventDefault(); openHistoryModal(); });
      }
    });
    renderActiveBar();
  }

  // ===== PAGE 1: index.html (Onboarding) =====
  function initWelcome() {
    const plugs = document.querySelectorAll('.plug[data-plug]');
    if (!plugs.length) return;
    const sync = () => {
      plugs.forEach((p) => p.classList.toggle('off', !state.myCar.plugs.includes(p.dataset.plug)));
    };
    plugs.forEach((p) => {
      p.addEventListener('click', () => {
        const val = p.dataset.plug;
        if (state.myCar.plugs.includes(val)) {
          if (state.myCar.plugs.length > 1) state.myCar.plugs = state.myCar.plugs.filter((x) => x !== val);
        } else {
          state.myCar.plugs.push(val);
        }
        state.filters.plugs = state.myCar.plugs.slice();
        saveState();
        sync();
      });
    });
    const ap = document.getElementById('wlApplyCar');
    if (ap) ap.addEventListener('click', () => { state.myCar.plugs = ['CCS2', 'Tipo 2']; state.filters.plugs = ['CCS2', 'Tipo 2']; saveState(); sync(); showToast({ type: 'success', title: 'Padrão aplicado', message: 'CCS2 & Tipo 2 selecionados.' }); });
    const miniEl = document.getElementById('wlMiniMap');
    if (miniEl) {
      const m = createMap(miniEl, [USER_POS.lat, USER_POS.lng], 14);
      L.marker([USER_POS.lat, USER_POS.lng], { icon: userPinIcon() }).addTo(m);
    }
    const useLoc = document.getElementById('wlUseLoc');
    if (useLoc) useLoc.addEventListener('click', (e) => { e.preventDefault(); showToast({ type: 'info', title: 'GPS ativo em Boa Viagem', message: '9 eletropostos encontrados no corredor piloto.' }); });
    sync();
  }

  // ===== PAGE 2: mapa.html =====
  function initMobileMap() {
    const mapEl = document.getElementById('mLeafletMap');
    if (!mapEl) return;
    const map = createMap(mapEl, [USER_POS.lat, USER_POS.lng], 15);
    let layer = L.layerGroup().addTo(map);
    let circle = null;
    L.marker([USER_POS.lat, USER_POS.lng], { icon: userPinIcon(), zIndexOffset: 250 }).addTo(map);

    const searchInp = document.getElementById('mSearchInput');
    const clearSearch = document.getElementById('mClearSearch');
    const qfEl = document.getElementById('mQuickFilters');
    const fCountEl = document.getElementById('mFilterBadge');
    const shSub = document.getElementById('mSheetSub');
    const stackEl = document.getElementById('mStationStack');

    if (searchInp) {
      searchInp.value = state.filters.search || '';
      searchInp.addEventListener('input', () => { state.filters.search = searchInp.value; saveState(); render(); });
    }
    if (clearSearch) {
      clearSearch.addEventListener('click', () => { state.filters.search = ''; if (searchInp) searchInp.value = ''; saveState(); render(); });
    }

    function render() {
      const f = state.filters;
      const isFree = f.tariff === 'free';
      const isTipo2 = f.plugs.length === 1 && f.plugs[0] === 'Tipo 2';
      if (fCountEl) fCountEl.textContent = countActiveFilters(f);

      qfEl.innerHTML = `
        <button type="button" class="${f.onlyAvailable ? 'on' : ''}" data-q="avail"><svg class="ico"><use href="#check-circle"/></svg>Livres agora</button>
        <button type="button" class="${f.ultraFast ? 'on-blue' : ''}" data-q="ultra"><svg class="ico"><use href="#bolt"/></svg>Ultra DC</button>
        <button type="button" class="${isTipo2 ? 'on-blue' : ''}" data-q="t2">Tipo 2</button>
        <button type="button" class="${isFree ? 'on' : ''}" data-q="free"><svg class="ico"><use href="#gift"/></svg>Gratuitos</button>
      `;
      qfEl.querySelectorAll('button').forEach((b) => {
        b.addEventListener('click', () => {
          const q = b.dataset.q;
          if (q === 'avail') f.onlyAvailable = !f.onlyAvailable;
          if (q === 'ultra') { f.ultraFast = !f.ultraFast; f.minPower = f.ultraFast ? 50 : 0; }
          if (q === 't2') f.plugs = isTipo2 ? state.myCar.plugs.slice() : ['Tipo 2'];
          if (q === 'free') f.tariff = isFree ? 'all' : 'free';
          saveState();
          render();
        });
      });

      const list = state.stations.filter((s) => matchesFilters(s, f)).sort((a, b) => getDistanceKm(a) - getDistanceKm(b));
      const rTxt = f.radiusKm < 1 ? `${Math.round(f.radiusKm * 1000)} m` : `${f.radiusKm.toFixed(1).replace('.', ',')} km`;
      shSub.textContent = `${list.length} encontrados em raio de ${rTxt} • Boa Viagem`;

      if (circle) map.removeLayer(circle);
      circle = L.circle([USER_POS.lat, USER_POS.lng], { radius: f.radiusKm * 1000, color: '#004ac6', weight: 1.5, opacity: 0.3, fillColor: '#004ac6', fillOpacity: 0.04, dashArray: '5 5' }).addTo(map);

      layer.clearLayers();
      list.forEach((st) => {
        const sum = getStationSummary(st);
        const bg = st.status === 'maintenance' ? 'var(--red)' : st.status === 'predicted' ? '#d97706' : st.status === 'ultra' ? 'var(--primary)' : 'var(--teal)';
        const label = st.status === 'maintenance' ? 'Manutenção' : st.status === 'predicted' ? `~${st.prediction.etaMinutes}m` : `${sum.maxKw} kW`;
        const icon = L.divIcon({
          className: 'el-m-icon',
          html: `<div class="mpin ${st.id === state.selectedStationId ? 'sel' : ''}"><div class="p" style="background:${bg}"><svg class="ico"><use href="#${st.status === 'predicted' ? 'hourglass' : st.status === 'maintenance' ? 'alert' : 'bolt'}"/></svg>${label}</div><i style="background:${bg}"></i></div>`,
          iconSize: [0, 0]
        });
        L.marker([st.lat, st.lng], { icon }).addTo(layer).on('click', () => {
          state.selectedStationId = st.id;
          saveState();
          map.panTo([st.lat, st.lng], { animate: true });
          render();
          const c = stackEl.querySelector(`article[data-id="${st.id}"]`);
          if (c) c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });

      if (!list.length) {
        stackEl.innerHTML = `<div class="sc" style="text-align:center"><b>Nenhum carregador encontrado</b><small style="color:var(--text2)">Amplie o raio ou redefina os filtros.</small><button type="button" class="act" id="mResetEmpty">Redefinir filtros</button></div>`;
        stackEl.querySelector('#mResetEmpty').addEventListener('click', () => { state.filters = clone(DEFAULT_STATE.filters); saveState(); render(); });
        return;
      }

      stackEl.innerHTML = list.map((st) => {
        const sum = getStationSummary(st);
        const dist = formatDist(getDistanceKm(st));
        const bCls = st.status === 'maintenance' ? 'red' : st.status === 'predicted' ? 'amber' : 'mint';
        const isAlertOn = state.alerts.includes(st.id);
        const priceHtml = st.status === 'maintenance'
          ? `<div class="pr"><small style="color:var(--red)">Indisponível</small><em>${dist}</em></div>`
          : sum.hasFreeTariff && sum.minPaid === 0
          ? `<div class="pr"><b class="g">Gratuita</b><em>${dist}</em></div>`
          : `<div class="pr"><b>${formatPrice(sum.minPaid)}</b> <small>/kWh</small><em>${dist}</em></div>`;
        const alertBtnHtml = st.status === 'predicted'
          ? `<button type="button" class="m-alert-btn ${isAlertOn ? 'active' : ''}" data-malert="${st.id}"><svg class="ico" style="font-size:14px"><use href="#${isAlertOn ? 'check-circle' : 'clock'}"/></svg>${isAlertOn ? 'Ativo' : 'Avisar'}</button>`
          : '';
        return `
          <article class="sc ${st.id === state.selectedStationId ? 'sel' : ''} ${st.status === 'maintenance' ? 'off' : ''}" data-id="${st.id}">
            <div class="t">
              <div><h3>${st.shortName} <small>${st.network}</small></h3><div class="ad">${st.address}</div></div>
              <span class="bd ${bCls}">${st.status === 'available' || st.status === 'ultra' ? '<i></i>' : ''}${st.statusNote}</span>
            </div>
            <div class="m">
              <div class="chips">${st.connectors.map((c) => `<span class="cp"><svg class="ico"><use href="#${c.type === 'Tipo 2' ? 'plug' : 'bolt'}"/></svg>${c.type} ${c.powerKw}kW</span>`).join('')}</div>
              ${priceHtml}
            </div>
            <div class="m-act-row">
              <a class="act ${st.status === 'predicted' ? 'soft' : ''}" href="detalhes.html?id=${st.id}"><svg class="ico"><use href="#navigate"/></svg>Ver Detalhes e Rota</a>
              ${alertBtnHtml}
            </div>
          </article>`;
      }).join('');

      stackEl.querySelectorAll('button[data-malert]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.malert;
          const st = state.stations.find((s) => s.id === id);
          if (state.alerts.includes(id)) {
            state.alerts = state.alerts.filter((x) => x !== id);
            saveState();
            render();
            return;
          }
          state.alerts.push(id);
          saveState();
          render();
          showToast({
            type: 'info',
            title: 'Alerta ativado para ' + st.shortName,
            message: 'Você será notificado assim que um motorista confirmar o check-out.',
            actionLabel: 'Simular liberação agora',
            onAction: () => triggerRelease(id, render),
            duration: 7000
          });
        });
      });
    }

    document.getElementById('mLocateBtn').addEventListener('click', () => map.setView([USER_POS.lat, USER_POS.lng], 15, { animate: true }));
    document.getElementById('mLayersBtn').addEventListener('click', () => map.cycleLayer());
    const simBtn = document.getElementById('mSimBtn');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        const cand = state.stations.find((s) => s.status === 'predicted');
        if (cand) triggerRelease(cand.id, render);
        else showToast({
          type: 'info',
          title: 'Todos os postos já estão livres',
          message: 'Restaure os postos ocupados para testar alertas novamente.',
          actionLabel: 'Restaurar',
          onAction: () => { state = clone(DEFAULT_STATE); saveState(); window.location.reload(); },
          duration: 7000
        });
      });
    }
    render();
  }

  // ===== PAGE 3: filtros.html =====
  function initMobileFilters() {
    const applyBtn = document.getElementById('mfApply');
    if (!applyBtn) return;
    const draft = clone(state.filters);
    const steps = [0.3, 0.5, 0.8, 1.5, 2.5, 3.0];
    const poEls = document.querySelectorAll('.po[data-plug]');
    const pwBtns = document.querySelectorAll('.pw button[data-power]');
    const tfEls = document.querySelectorAll('.tf span[data-tariff]');
    const rangeInp = document.getElementById('mfRange');
    const trFill = document.getElementById('mfTrFill');
    const distVal = document.getElementById('mfDistVal');
    const liveTxt = document.getElementById('mfLiveTxt');
    const deckCount = document.getElementById('mfDeckCount');

    function render() {
      poEls.forEach((el) => el.classList.toggle('on', draft.plugs.includes(el.dataset.plug)));
      pwBtns.forEach((b) => b.classList.toggle('on', draft.minPower === Number(b.dataset.power)));
      tfEls.forEach((s) => s.classList.toggle('on', draft.tariff === s.dataset.tariff));
      let idx = steps.findIndex((v) => Math.abs(v - draft.radiusKm) < 0.05);
      if (idx < 0) idx = 4;
      rangeInp.value = idx;
      trFill.style.width = (idx / (steps.length - 1)) * 100 + '%';
      const rTxt = draft.radiusKm < 1 ? `${Math.round(draft.radiusKm * 1000)} m` : `${draft.radiusKm.toFixed(1).replace('.', ',')} km`;
      distVal.textContent = `${rTxt} (~${formatWalkMin(draft.radiusKm)} min)`;
      const matches = state.stations.filter((s) => matchesFilters(s, draft));
      const free = matches.filter((s) => s.status !== 'maintenance' && s.connectors.some((c) => c.status === 'available'));
      const prob = matches.length ? Math.min(96, Math.round(55 + (free.length / matches.length) * 40)) : 15;
      liveTxt.textContent = `${prob}% de probabilidade de tomada livre sem fila no raio de ${rTxt} em Boa Viagem.`;
      deckCount.innerHTML = `<i></i><span><b>${matches.length} carregadores compatíveis</b> em Boa Viagem</span>`;
      applyBtn.innerHTML = `<svg class="ico" style="font-size:18px"><use href="#check-circle"/></svg>Aplicar Filtros (${matches.length} resultados)`;
    }

    poEls.forEach((el) => el.addEventListener('click', () => {
      const p = el.dataset.plug;
      if (draft.plugs.includes(p)) { if (draft.plugs.length > 1) draft.plugs = draft.plugs.filter((x) => x !== p); }
      else draft.plugs.push(p);
      render();
    }));
    pwBtns.forEach((b) => b.addEventListener('click', () => { draft.minPower = Number(b.dataset.power); draft.ultraFast = draft.minPower >= 50; render(); }));
    tfEls.forEach((s) => s.addEventListener('click', () => { draft.tariff = s.dataset.tariff; render(); }));
    rangeInp.addEventListener('input', () => { draft.radiusKm = steps[Number(rangeInp.value)] || 2.5; render(); });
    document.getElementById('mfClear').addEventListener('click', () => { Object.assign(draft, clone(DEFAULT_STATE.filters)); render(); });
    applyBtn.addEventListener('click', (e) => { e.preventDefault(); state.filters = clone(draft); saveState(); window.location.href = 'mapa.html'; });
    render();
  }

  // ===== PAGE 4: detalhes.html =====
  function initMobileDetails() {
    const startBtn = document.getElementById('mdStartCharge');
    if (!startBtn) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || state.selectedStationId || 'zon-charge';
    const st = state.stations.find((s) => s.id === id) || state.stations[0];
    state.selectedStationId = st.id;
    saveState();

    document.getElementById('mdNet').innerHTML = `<svg class="ico"><use href="#check-circle"/></svg>${st.networkBadge}`;
    document.getElementById('mdSub').textContent = `${st.neighborhood} • ${st.code}`;
    document.getElementById('mdName').textContent = st.name;
    document.getElementById('mdAddr').innerHTML = `<svg class="ico"><use href="#pin"/></svg><span>${st.address}</span><span style="color:var(--muted)">•</span><b>${formatDist(getDistanceKm(st))}</b>`;

    function renderDetails() {
      const cur = state.stations.find((s) => s.id === st.id);
      const stEl = document.getElementById('mdPredStatus');
      const pvEl = document.getElementById('mdPredTime');
      const etaEl = document.getElementById('mdPredEta');
      if (cur.status === 'maintenance') {
        stEl.innerHTML = `<i style="background:var(--red)"></i>Em Manutenção`;
        pvEl.innerHTML = `Status<b>Indisponível</b>`;
        etaEl.innerHTML = `<svg class="ico"><use href="#alert"/></svg>${cur.maintenanceText}`;
      } else if (cur.status === 'predicted' && cur.prediction.etaMinutes > 0) {
        stEl.innerHTML = `<i style="background:#d97706"></i>Parcialmente Ocupado`;
        pvEl.innerHTML = `Prevista para<b>~${getClockPlus(cur.prediction.etaMinutes)}</b>`;
        etaEl.innerHTML = `<svg class="ico"><use href="#hourglass"/></svg>Deve liberar em ~${cur.prediction.etaMinutes} min`;
      } else {
        stEl.innerHTML = `<i style="background:var(--teal)"></i>Disponível Agora`;
        pvEl.innerHTML = `Disponibilidade<b>${cur.statusNote}</b>`;
        etaEl.innerHTML = `<svg class="ico"><use href="#check-circle"/></svg>Sem fila estimada nos próximos 30 min`;
      }
      document.getElementById('mdPredBasis').textContent = cur.prediction.basis;
      document.getElementById('mdPredUpd').innerHTML = `<svg class="ico" style="font-size:12px"><use href="#check-circle"/></svg><span>Atualizado há ${cur.prediction.lastUpdatedMin} min por <b>${cur.prediction.lastUpdatedBy}</b></span>`;

      let alertRow = document.getElementById('mdAlertRow');
      if (!alertRow) {
        alertRow = document.createElement('div');
        alertRow.id = 'mdAlertRow';
        alertRow.className = 'm-act-row';
        document.getElementById('mdPredBasis').parentNode.appendChild(alertRow);
      }
      if (cur.status === 'predicted') {
        const isAlertOn = state.alerts.includes(cur.id);
        alertRow.innerHTML = `
          <button type="button" class="m-alert-btn ${isAlertOn ? 'active' : ''}" id="mdAlertBtn" style="flex:1;height:38px;font-size:12px">
            <svg class="ico" style="font-size:13px"><use href="#${isAlertOn ? 'check-circle' : 'clock'}"/></svg>${isAlertOn ? 'Alerta ativado' : 'Avisar quando liberar'}
          </button>
          <button type="button" class="sim-pill" id="mdSimBtn" style="height:38px;padding:0 12px">Simular check-out</button>
        `;
        alertRow.querySelector('#mdAlertBtn').addEventListener('click', () => {
          if (state.alerts.includes(cur.id)) state.alerts = state.alerts.filter((x) => x !== cur.id);
          else {
            state.alerts.push(cur.id);
            showToast({ type: 'info', title: 'Alerta ativado (F4)', message: `Avisaremos assim que ${cur.shortName} liberar.` });
          }
          saveState();
          renderDetails();
        });
        alertRow.querySelector('#mdSimBtn').addEventListener('click', () => triggerRelease(cur.id, renderDetails));
      } else {
        alertRow.innerHTML = '';
      }

      document.getElementById('mdConnCount').textContent = `${cur.connectors.length} ${cur.connectors.length === 1 ? 'tomada' : 'tomadas'}`;
      document.getElementById('mdConns').innerHTML = cur.connectors.map((c) => {
        const used = c.status !== 'available';
        return `
          <div class="box cn ${used ? 'used' : ''}">
            <div class="r">
              <div class="l"><span class="ic"><svg class="ico"><use href="#${c.type === 'Tipo 2' ? 'plug' : 'bolt'}"/></svg></span>
                <div><div class="tg"><h4>${c.name}</h4><span class="live2">${c.status === 'maintenance' ? 'Inoperante' : c.occupiedByUser ? 'Em uso (Você)' : used ? `Em uso (~${c.etaMinutes}m)` : 'Livre agora'}</span></div><p>${c.mode}</p></div>
              </div>
              <div class="kw">${c.powerKw}<br>kW</div>
            </div>
            <div class="tf2"><span>Tarifa:</span>${c.free ? '<b class="free">GRATUITA</b>' : `<span><b>${formatPrice(c.pricePerKwh)}</b> <small>/ kWh</small></span>`}</div>
          </div>`;
      }).join('');
    }

    document.getElementById('mdAccessTip').innerHTML = `<svg class="ico"><use href="#parking"/></svg>${st.accessTip}`;
    const goExt = document.getElementById('mdGoMaps');
    goExt.href = `https://www.google.com/maps/dir/?api=1&origin=${USER_POS.lat},${USER_POS.lng}&destination=${st.lat},${st.lng}&travelmode=driving`;
    goExt.target = '_blank';
    goExt.rel = 'noopener noreferrer';

    const mapEl = document.getElementById('mdMiniMap');
    if (mapEl) {
      const m = createMap(mapEl, [st.lat, st.lng], 15);
      L.polyline([[USER_POS.lat, USER_POS.lng], [st.lat, st.lng]], { color: '#2563eb', weight: 4, opacity: 0.85 }).addTo(m);
      L.marker([USER_POS.lat, USER_POS.lng], { icon: userPinIcon() }).addTo(m);
      L.circleMarker([st.lat, st.lng], { radius: 8, color: '#fff', weight: 3, fillColor: '#006a61', fillOpacity: 1 }).addTo(m);
      m.fitBounds(L.latLngBounds([[USER_POS.lat, USER_POS.lng], [st.lat, st.lng]]).pad(0.25));
    }

    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cur = state.stations.find((s) => s.id === st.id);
      if (cur.status === 'maintenance') {
        showToast({ type: 'amber', title: 'Totem indisponível', message: cur.maintenanceText });
        return;
      }
      startChargingSession(cur);
      renderDetails();
      renderActiveBar();
    });

    renderDetails();
  }

  document.addEventListener('DOMContentLoaded', () => {
    wireGlobalMobile();
    initWelcome();
    initMobileMap();
    initMobileFilters();
    initMobileDetails();
  });
})();
