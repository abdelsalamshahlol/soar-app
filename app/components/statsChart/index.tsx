import { useEffect, useRef } from 'react';
import { PieChart } from 'chartist';
import './styles.scss';

export interface ActivityPieChartProps {
  labels: string[];
  series: number[];
}

export function StatsChart({ labels, series }: ActivityPieChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && series.length > 0) {
      new PieChart(
        chartRef.current,
        {
          labels,
          series,
        },
        {
          showLabel: false,
          width: '300px',
          height: '260px',
        }
      ).on('draw', function (data) {
        if (data.type === 'slice') {
          const chartElement = document.querySelector('.ct-chart-pie');

          const { center, radius, startAngle, endAngle } = data;

          const midAngle = (startAngle + endAngle) / 2;
          const textX = center.x + radius * 0.6 * Math.cos(midAngle * (Math.PI / 180));
          const textY = center.y + radius * 0.6 * Math.sin(midAngle * (Math.PI / 180));

          const foreignObject = document.createElement('div');
          foreignObject.innerHTML = `<span class="ct-label ct-value">${series[data.index]}%</span><br/>
                             <span class="ct-label ct-text">${labels[data.index]}</span>`;

          foreignObject.style.position = 'absolute';
          foreignObject.style.left = `${textX}px`;
          foreignObject.style.top = `${textY}px`;
          foreignObject.style.transform = 'translate(-50%, -50%)';
          foreignObject.style.textAlign = 'center';

          chartElement?.appendChild(foreignObject);
        }
      });
    }
  }, [labels, series]);

  return (
    <div
      className="bg-white rounded-[25px] lg:w-[350px] h-[322px] flex flex-col items-center py-[30px]"
      role="graphics-document"
      aria-labelledby="pieChartTitle"
      tabIndex={0}
    >
      <h2 id="pieChartTitle" className="sr-only">
        Pie chart showing category distribution
      </h2>

      <div ref={chartRef} className="ct-chart-pie relative"></div>

      <div className="sr-only">
        <h3>Category Breakdown</h3>
        <ul>
          {labels.map((label, idx) => (
            <li key={idx}>
              {label}: {series[idx]}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
