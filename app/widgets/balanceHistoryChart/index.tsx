import React, { useEffect, useRef, useState } from 'react';
import { Interpolation, LineChart } from 'chartist';
import { clsx } from 'clsx';
import './styles.scss';

export interface BalanceHistoryChartProps {
  labels: string[];
  srTitle?: string;
  series: Array<{
    name?: string;
    data: Array<number>;
  }>;
}

export function Index({ labels, series, srTitle = 'Line chart with area data' }: BalanceHistoryChartProps) {
  const chartRef = useRef(null);
  const [legend, setLegend] = useState<Array<string | null>>();

  useEffect(() => {
    if (chartRef.current && !!series?.length) {
      const seriesData = series.map((d) => d.data);
      setLegend(series.map((d) => d?.name || null));

      new LineChart(
        chartRef.current,
        {
          labels: labels,
          series: seriesData,
        },
        {
          lineSmooth: Interpolation.cardinal({ tension: 2 }),
          fullWidth: true,
          height: '230px',
          showPoint: false,
          chartPadding: { top: 20, right: 25, bottom: 5, left: 10 },
          showArea: true,
          axisY: {
            onlyInteger: true,
            offset: 50,
          },
        }
      );
    }
  }, [labels, series]);

  return (
    <div
      className="bg-white rounded-[25px] w-full xl:w-[635px] h-[276px]"
      aria-label={`${srTitle} chart`}
      role="graphics-document"
    >
      <div className="flex justify-end gap-x-8 font-inter text-light-blue text-base font-normal">
        {legend?.map((d, i) => (
          <div className="flex items-center gap-x-2.5" key={i}>
            <div className={clsx(`h-[15px] w-[15px] rounded-full ${d?.toLowerCase()}-legend`)}></div>
            <div>{d}</div>
          </div>
        ))}
      </div>

      <div ref={chartRef} className="ct-balance-chart"></div>

      <div className="sr-only">
        <h2>{srTitle}</h2>
        <ul>
          {labels.map((label, idx) => (
            <li key={idx}>
              {label} | {series.map(({ data, name }) => `${name}: $${data[idx]}` || 0).join(' | ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
