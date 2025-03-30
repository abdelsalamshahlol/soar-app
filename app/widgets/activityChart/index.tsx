import { useEffect, useRef, useState } from 'react';
import { BarChart } from 'chartist';
import { clsx } from 'clsx';
import 'chartist/dist/index.css';
import './styles.scss';
import { motion } from 'motion/react';

export interface ActivityChartProps {
  labels: string[];
  srTitle?: string;
  series: Array<{
    name: 'Deposit' | 'Withdraw';
    data: Array<number>;
  }>;
}
export function ActivityChart({ labels, series, srTitle = 'Bar chart data' }: ActivityChartProps) {
  const chartRef = useRef(null);
  const [legend, setLegend] = useState<Array<string>>();

  useEffect(() => {
    if (chartRef.current && !!series?.length) {
      const seriesData = series.map((d) => d.data);
      setLegend(series.map((d) => d.name));

      new BarChart(
        chartRef.current,
        {
          labels: labels,
          series: seriesData,
        },
        {
          seriesBarDistance: 10,
          axisY: {
            onlyInteger: true,
            offset: 50,
          },
          axisX: {
            showGrid: false,
          },
          height: '230px',
        }
      );
    }
  }, [labels, series]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, easing: 'ease-out' }}
      className="bg-white rounded-[25px] w-full lg:w-[730px] h-[322px]"
      aria-label={`${srTitle} chart`}
      role="graphics-document"
    >
      <div className="flex justify-end gap-x-8 font-inter text-light-blue text-base font-normal pt-7 pr-8">
        {legend?.map((d, i) => (
          <div className="flex items-center gap-x-2.5" key={i}>
            <div className={clsx(`h-[15px] w-[15px] rounded-full ${d.toLowerCase()}-legend`)}></div>
            <div>{d}</div>
          </div>
        ))}
      </div>

      <div ref={chartRef} className="ct-bar-chart"></div>

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
    </motion.div>
  );
}
