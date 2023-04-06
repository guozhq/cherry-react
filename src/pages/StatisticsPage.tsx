import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const items = [
    { date: '2000-01-01', value: 5000 },
    { date: '2000-01-02', value: 4000 },
    { date: '2000-01-03', value: 5000 },
    { date: '2000-01-04', value: 4000 },
    { date: '2000-01-05', value: 5000 },
    { date: '2000-01-06', value: 4000 },
    { date: '2000-01-07', value: 5000 },
    { date: '2000-01-08', value: 4000 },
    { date: '2000-01-09', value: 5000 },
    { date: '2000-01-10', value: 4000 },
    { date: '2000-01-11', value: 5000 },
    { date: '2000-01-12', value: 4000 },
    { date: '2000-01-13', value: 5000 },
    { date: '2000-01-14', value: 4000 },
    { date: '2000-01-15', value: 5000 },
    { date: '2000-01-16', value: 4000 },
    { date: '2000-01-17', value: 5000 },
    { date: '2000-01-18', value: 4000 },
    { date: '2000-01-31', value: 5000 },
  ].map(item => ({ x: item.date, y: item.value / 100 }))
  const items2 = [
    { tag: '吃饭', amount: 10000 },
    { tag: '喝酒', amount: 20000 },
    { tag: '睡觉', amount: 30000 },
    { tag: '购物', amount: 20000 },
  ].map(item => ({ x: item.tag, y: item.amount / 100 }))
  return (
    <div>
      <Gradient>
        <TopNav title="统计图表" icon={
          <Icon name="back" className="w-24px h-24px" />
        } />
      </Gradient>
      <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
      <LineChart className='h-120px' items={items} />
      <PieChart className='h-260px' items={items2}></PieChart>
    </div>
  )
}
