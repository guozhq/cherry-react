import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

type Props = {
  className?: string
  items?: { x: number | string; y: number }[]
}
export const PieChart: React.FC<Props> = (props) => {
  const { className, items } = props
  const div = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  useEffect(() => {
    if (!div.current) { return }
    if (initialized.current) { return }
    const myChart = echarts.init(div.current)
    initialized.current = true
    const option: EChartsOption = {
      tooltip: {
        trigger: 'item'
      },
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '90%',
          data: items?.map(item => ({ value: item.y, name: item.x })),
        }
      ]
    }
    myChart.setOption(option)
  })
  return <div ref={div} className={className}></div>
}
