import ReactECharts from "echarts-for-react";

import "./sankey.scss";

const data = {
  nodes: [
    { name: "Porcentaje Central", itemStyle: { color: "transparent" } },
    // Nodos izquierdos
    { name: "Valor Izq 1", itemStyle: { color: "transparent" } },
    { name: "Valor Izq 2", itemStyle: { color: "transparent" } },
    { name: "Valor Izq 3", itemStyle: { color: "transparent" } },
    // Nodos derechos
    { name: "Valor Der 1", itemStyle: { color: "transparent" } },
    { name: "Valor Der 2", itemStyle: { color: "transparent" } },
    { name: "Valor Der 3", itemStyle: { color: "transparent" } },
  ],
  links: [
    // Enlaces desde la izquierda hacia el centro
    { source: "Valor Izq 1", target: "Porcentaje Central", value: 30 },
    { source: "Valor Izq 2", target: "Porcentaje Central", value: 20 },
    { source: "Valor Izq 3", target: "Porcentaje Central", value: 25 },
    // Enlaces desde el centro hacia la derecha
    { source: "Porcentaje Central", target: "Valor Der 1", value: 20 },
    { source: "Porcentaje Central", target: "Valor Der 2", value: 25 },
    { source: "Porcentaje Central", target: "Valor Der 3", value: 30 },
  ],
};

const Sankey: React.FC = () => {
  const options = {
    tooltip: {
      trigger: "item",
    },
    animation: true,
    animationDuration: 100, // Duración de la animación en milisegundos
    animationEasing: "cubicOut",
    series: [
      {
        type: "sankey",
        data: data.nodes,
        links: data.links,
        nodeWidth: 1,
        nodeGap: 100, // Aumenta el espacio entre nodos
        layoutIterations: 100,
        label: {
          position: "outside", // Posiciona las etiquetas fuera
          align: "center", // Alineación del texto
          fontSize: 12,
          formatter: (params: any) => {
            // Si es un nodo del lado izquierdo, alinear a la izquierda
            if (params.dataIndex <= 2) {
              return `${params.name}`;
            }
            // Si es un nodo del lado derecho, alinear a la derecha
            return `${params.name}`;
          },
        }, // Ayuda a mejorar la distribución
        emphasis: {
          focus: "adjacency",
        },
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: "#278df3" }, // Azul oscuro
              { offset: 1, color: "#99ccff" }, // Azul claro
            ],
          },
          curveness: 0.5,
          width: 0.5,
        },
      },
    ],
  };

  return (
    <div className="sankey">
      <ReactECharts style={{ width: "100%", height: "100%" }} option={options} />
    </div>
  );
};

export default Sankey;
