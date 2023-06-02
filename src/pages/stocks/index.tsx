import { MarketOverview } from 'react-ts-tradingview-widgets';
import { useTheme } from '@nextui-org/react';

const Stocks = () => {
  const { isDark } = useTheme();
  return (
    <MarketOverview
      colorTheme={isDark ? 'dark' : 'light'}
      width="100%"
      height="700"
      tabs={[
        {
          title: 'Indices',
          symbols: [
            {
              s: 'FOREXCOM:SPXUSD',
              d: 'S&P 500',
            },

            {
              s: 'NASDAQ:MSFT',
            },
            {
              s: 'NASDAQ:AAPL',
            },
            {
              s: 'NASDAQ:GOOGL',
            },
            {
              s: 'NASDAQ:META',
            },
            {
              s: 'NASDAQ:AMZN',
            },
            {
              s: 'NASDAQ:ADBE',
            },
            {
              s: 'XETR:ZAL',
            },
          ],
          originalTitle: 'Indices',
        },
        {
          title: 'Forex',
          symbols: [
            {
              s: 'FX_IDC:EURINR',
              d: 'EUR/INR',
            },
            {
              s: 'FX_IDC:USDINR',
              d: 'USD/INR',
            },
            {
              s: 'FX:EURUSD',
              d: 'EUR/USD',
            },
            {
              s: 'FX:GBPUSD',
              d: 'GBP/USD',
            },
          ],
          originalTitle: 'Forex',
        },
      ]}
      dateRange={'1D'}
      locale={'en'}
      isTransparent={false}
      showChart={true}
      showSymbolLogo={true}
    />
  );
};

export default Stocks;
