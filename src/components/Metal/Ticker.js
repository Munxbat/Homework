import zIndex from '@mui/material/styles/zIndex';
import React, { useState, useEffect } from 'react';

const Ticker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    const storedData = localStorage.getItem('tickerData');
    if (storedData) {
      const parsed = JSON.parse(storedData);
      if (parsed.date === today) {
        setData(parsed);
        return;
      }
    }

    const fetchRates = async (date) => {
      const usdRes = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/usd.json`);
      const usdData = await usdRes.json();
      const usdRates = usdData.usd;

      const xauRes = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/xau.json`);
      const xauData = await xauRes.json();
      const xauRates = xauData.xau;

      const xagRes = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/xag.json`);
      const xagData = await xagRes.json();
      const xagRates = xagData.xag;

      return {
        usd_mnt: usdRates.mnt,
        eur_mnt: (1 / usdRates.eur) * usdRates.mnt,
        cny_mnt: (1 / usdRates.cny) * usdRates.mnt,
        rub_mnt: (1 / usdRates.rub) * usdRates.mnt,
        gold_usd: xauRates.usd,
        gold_mnt: xauRates.usd * usdRates.mnt,
        silver_usd: xagRates.usd,
        silver_mnt: xagRates.usd * usdRates.mnt,
      };
    };

    const updateData = async () => {
      const todayRates = await fetchRates('latest');
      const yesterdayRates = await fetchRates(yesterday);
      const newData = { date: today, today: todayRates, yesterday: yesterdayRates };
      localStorage.setItem('tickerData', JSON.stringify(newData));
      setData(newData);
    };

    updateData();
  }, []);

  if (!data) return <div style={styles.ticker}>Loading...</div>;

  const items = [
    { label: 'USD/MNT', value: data.today.usd_mnt.toFixed(2), prev: data.yesterday.usd_mnt},
    { label: 'EUR/MNT', value: data.today.eur_mnt.toFixed(2), prev: data.yesterday.eur_mnt },
    { label: 'CNY/MNT', value: data.today.cny_mnt.toFixed(2), prev: data.yesterday.cny_mnt },
    { label: 'RUB/MNT', value: data.today.rub_mnt.toFixed(2), prev: data.yesterday.rub_mnt },
    { label: 'Gold (USD/oz)', value: data.today.gold_usd.toFixed(2), prev: data.yesterday.gold_usd },
    { label: 'Gold (MNT/oz)', value: data.today.gold_mnt.toFixed(0), prev: data.yesterday.gold_mnt },
    { label: 'Silver (USD/oz)', value: data.today.silver_usd.toFixed(2), prev: data.yesterday.silver_usd },
    { label: 'Silver (MNT/oz)', value: data.today.silver_mnt.toFixed(0), prev: data.yesterday.silver_mnt },
  ];

const renderItem = (item) => {
  const change = item.value - item.prev;
  let arrow = '';
  let color = 'white';
  if (change > 0) {
    arrow = ' ▲';
    color = 'green';
  } else if (change < 0) {
    arrow = ' ▼';
    color = 'red';
  }
  return (
    <span key={item.label} style={{ marginRight: '20px', position: 'relative', zIndex: 10 }}>
      {item.label}: {item.value}
      <span style={{ color }}>{arrow}</span>
    </span>
  );
};
  const content = items.map(renderItem);
  
  return (
    <div style={styles.ticker}>
      <div style={styles.marquee}>
        {content} {content} {/* toirog bolgonoo xerew dutwal 4 bolgo */}
      </div>
    </div>
  );
};

const styles = {
  ticker: {
    backgroundColor: 'black',
    color: 'white',
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    zIndex: zIndex.appBar + 1,
  },
  marquee: {
    whiteSpace: 'nowrap',
    animation: 'marquee 30s linear infinite',
    display: 'flex',
  },
};

export default Ticker;