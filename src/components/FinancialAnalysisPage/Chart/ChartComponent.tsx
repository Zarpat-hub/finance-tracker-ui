import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ChartCanvas, ChartOption, ChartSection, Option } from './styled'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

enum TypesOfPeriod {
  WEEK = 'Week',
  MONTH = 'Month',
  YEAR = 'YEAR',
}

export const MockData = {
  spendings: [
    {
      date: '2023-01-05',
      value: 4000,
      description: 'Car sell',
    },
    {
      date: '2023-06-21',
      value: 3200,
      description: 'PC sell',
    },
    {
      date: '2023-06-22',
      value: 3200,
      description: 'PC sell',
    },
    {
      date: '2023-06-22',
      value: 3200,
      description: 'PC sell',
    },
    {
      date: '2023-10-05',
      value: 800,
      description: 'PC sell',
    },
  ],
  incomes: [
    {
      date: '2023-01-01',
      value: 5000,
      description: 'Car sell',
    },
    {
      date: '2023-06-22',
      value: 6200,
      description: 'PC sell',
    },
    {
      date: '2023-10-05',
      value: 800,
      description: 'PC sell',
    },
  ],
}

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const ChartComponent = () => {
  const [labels, setLabels] = useState<string[]>([...Months])
  const [period, setPeriod] = useState<string>(TypesOfPeriod.YEAR)
  const [dataChart, setDataChart] = useState<any>({
    labels,
    datasets: [],
  })

  useEffect(() => {
    setDataChart({
      labels,
      datasets: [
        {
          label: 'Spendings',
          data: prepareDataFn(MockData.spendings),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Incomes',
          data: prepareDataFn(MockData.incomes),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    })
  }, [period])

  const handlePeriod = (perdiod: string) => {
    switch (perdiod) {
      case TypesOfPeriod.WEEK:
        setPeriod(TypesOfPeriod.WEEK)
        const curr = new Date()
        const first = curr.getDate() - curr.getDay()
        const last = first + 6
        const newLabels = []
        for (let i = first; i <= last; i++) {
          const month =
            curr.getMonth() < 10
              ? '0' + (curr.getMonth() + 1).toString()
              : curr.getMonth() + 1
          const day = i < 10 ? '0' + i.toString() : i
          const yearString = `${curr.getFullYear()}-${month}-${day}`
          newLabels.push(yearString)
        }
        setLabels(newLabels)
        break
      case TypesOfPeriod.MONTH:
        setPeriod(TypesOfPeriod.MONTH)
        // daty z okresu tego miesiąca
        break
      case TypesOfPeriod.YEAR:
        setPeriod(TypesOfPeriod.YEAR)
        setLabels([...Months])
        break
    }
  }

  const prepareDataFn = (type: any) => {
    switch (period) {
      case TypesOfPeriod.WEEK:
        const weekData = labels.map((label: string) => {
          const data = type.reduce((acc: number, curr: any) => {
            return label === curr.date ? acc + Number(curr.value) : acc + 0
          }, 0)
          return data
        })
        return weekData
      case TypesOfPeriod.MONTH:
        break
      case TypesOfPeriod.YEAR:
        const yearData = labels.map((label: string) => {
          const data = type.reduce((acc: number, curr: any) => {
            const date = new Date('2000 ' + label)
            const convertedDate = new Date(curr.date)
            const monthNumber = date.getMonth()
            return convertedDate.getUTCMonth() === monthNumber
              ? acc + Number(curr.value)
              : acc + 0
          }, 0)
          return data
        })
        return yearData
    }
  }

  const convertDateToString = () => {
    // convert Date To String | add to helpers file
  }

  const options = {
    responsive: true,
  }

  return (
    <>
      <ChartSection>
        <ChartCanvas>
          <Bar options={options} data={dataChart} />
        </ChartCanvas>
        <ChartOption>
          <Option onClick={() => handlePeriod(TypesOfPeriod.YEAR)}>Year</Option>
          <Option onClick={() => handlePeriod(TypesOfPeriod.WEEK)}>Week</Option>
          <Option onClick={() => handlePeriod(TypesOfPeriod.MONTH)}>
            Month
          </Option>
        </ChartOption>
      </ChartSection>
    </>
  )
}

export default ChartComponent
