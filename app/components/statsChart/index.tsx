import { useEffect, useRef } from 'react';
import { PieChart, Svg } from 'chartist';
import './styles.scss';

export interface ActivityPieChartProps {
  labels: string[];
  series: number[];
  colors?: string[];
}

export function StatsChart({ labels, series, colors }: ActivityPieChartProps) {
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
          // startAngle: 300,

          showLabel: false,
          // labelPosition: 'inside',
          // labelOffset: 30,
          // labelDirection: 'neutral',
          // chartPadding: 20,
          width: '300px',
          height: '260px',
        }
      )
        // .on('draw', (data) => {
        // if (data.type === 'slice') {
        //   // Get the underlying DOM node for the slice's path
        //   const pathEl = data.element._node;
        //   if (pathEl && typeof pathEl.getTotalLength === 'function') {
        //     const totalLength = pathEl.getTotalLength();
        //     // Use half the total length to get the midpoint along the arc
        //     const midPoint = pathEl.getPointAtLength(totalLength / 2);
        //
        //     // Append a text element using the computed midpoint
        //     data.group
        //       .elem('text', {
        //         x: midPoint.x,
        //         y: midPoint.y,
        //         'text-anchor': 'middle',
        //         style: 'font-size: 12px; fill: #fff;',
        //       })
        //       .text(data.value ? data.value.toString() : '');
        //   }
        // }
        // if (data.type === 'slice') {
        //   const container = chartRef.current;
        //   if (!container) return;
        //   const containerWidth = container.offsetWidth;
        //   const containerHeight = container.offsetHeight;
        //   const centerX = containerWidth / 2;
        //   const centerY = containerHeight / 2;
        //   // Approximate radius based on the container dimensions
        //   const radius = Math.min(centerX, centerY);
        //
        //   // Compute the middle angle of the slice (in degrees)
        //   const midAngle = (data.startAngle + data.endAngle) / 2;
        //   // Convert angle to radians for Math.cos/sin
        //   const midAngleRad = (midAngle * Math.PI) / 180;
        //
        //   // Place the label at 60% of the radius from the center
        //   const labelRadius = radius * 0.6;
        //   const { x, y } = data.path.pathElements;
        //
        //   const labelX = centerX + labelRadius * Math.cos(midAngleRad);
        //   const labelY = centerY + labelRadius * Math.sin(midAngleRad);
        //   console.log(data, data.path.pathElements);
        //   // Insert a text element for the label (using data.group provided by Chartist)
        //
        //   data.group
        //     .elem('text', {
        //       x: labelX,
        //       y: labelY,
        //       'text-anchor': 'middle',
        //       style: 'font-size: 22px; fill: #fff;',
        //     })
        //     .text(data.value ? data.value.toString() : '');
        // }
        // });
        //
        // .on('draw', (data) => {
        //   if (data.type === 'label') {
        //     labelCount++;
        //     console.log(data.chartRect);
        //     let textHtml = [
        //       '<span class="ct-label flex items-center flex-col">',
        //       '<div class="value">',
        //       data.series,
        //       '%</div>',
        //       '<div class="label">',
        //       data.text,
        //       '</div>',
        //       '</span>',
        //     ].join('');
        //
        //     let multilineText = new Svg('svg').foreignObject(
        //       textHtml,
        //       {
        //         style: 'overflow: visible;',
        //         x: data.x - 30 - labelCount * 3,
        //         y: data.y - 20,
        //         width: 70,
        //         height: 50,
        //       },
        //       'ct-label'
        //     );
        //     data.element.replace(multilineText);
        //   }
        // });

        .on('draw', function (data) {
          if (data.type === 'slice') {
            const chartElement = document.querySelector('.ct-chart-pie');

            // Chartist provides start & end angles
            const { center, radius, startAngle, endAngle } = data;

            // Convert polar to cartesian (get midpoint of slice)
            const midAngle = (startAngle + endAngle) / 2;
            const textX = center.x + radius * 0.6 * Math.cos(midAngle * (Math.PI / 180));
            const textY = center.y + radius * 0.6 * Math.sin(midAngle * (Math.PI / 180));

            // Create foreignObject element for custom HTML labels
            const foreignObject = document.createElement('div');
            foreignObject.innerHTML = `<span class="ct-label ct-value">${series[data.index]}%</span><br/>
                               <span class="ct-label ct-text">${labels[data.index]}</span>`;

            foreignObject.style.position = 'absolute';
            foreignObject.style.left = `${textX}px`;
            foreignObject.style.top = `${textY}px`;
            // foreignObject.style.transform = 'translate(-50%, -50%)'; // Center it
            foreignObject.style.textAlign = 'center';

            chartElement?.appendChild(foreignObject);
          }
        });
    }
  }, [labels, series]);

  return (
    <div
      className="bg-white rounded-[25px] w-[350px] h-[322px] flex flex-col items-center"
      role="img"
      aria-label="Pie chart showing category distribution"
    >
      <div ref={chartRef} className="ct-chart-pie"></div>

      {/*<div className="sr-only">*/}
      {/*  <h2>Category Distribution</h2>*/}
      {/*  <ul>*/}
      {/*    {labels.map((label, idx) => (*/}
      {/*      <li key={idx}>*/}
      {/*        {label}: {series[idx]}%*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
}
