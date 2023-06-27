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
import AxiosInstance from '../../../app/services/AxiosInstance'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

enum TypesOfTime {
  WEEK = 'Week',
  MONTH = 'Month',
  YEAR = 'YEAR',
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
  const [time, setTime] = useState<string>(TypesOfTime.YEAR)
  const [dataChart, setDataChart] = useState<any>({
    labels,
    datasets: [],
  })

  const [dataInfo, setDataInfo] = useState({
    spendings: [],
    incomes: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      await AxiosInstance.get(`/balance`).then((res) => {
        setDataInfo(res.data)
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    setDataChart({
      labels,
      datasets: [
        {
          label: 'Spendings',
          data: prepareDataFn(dataInfo.spendings),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Incomes',
          data: prepareDataFn(dataInfo.incomes),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    })
  }, [time, dataInfo])

  const handlePeriod = (perdiod: string) => {
    switch (perdiod) {
      case TypesOfTime.WEEK:
        setTime(TypesOfTime.WEEK)

        const curr = new Date()
        const firstDayOfWeek = curr.getDate() - curr.getDay()
        const lastDayOfWeek = firstDayOfWeek + 6
        const daysOfWeek = []
        for (let i = firstDayOfWeek; i <= lastDayOfWeek; i++) {
          const month =
            curr.getMonth() < 10
              ? '0' + (curr.getMonth() + 1).toString()
              : curr.getMonth() + 1
          const day = i < 10 ? '0' + i.toString() : i
          const yearString = `${curr.getFullYear()}-${month}-${day}`
          daysOfWeek.push(yearString)
        }
        setLabels(daysOfWeek)
        break
      case TypesOfTime.MONTH:
        setTime(TypesOfTime.MONTH)
        const curr1 = new Date()
        const date = new Date(
          Date.UTC(curr1.getFullYear(), curr1.getUTCMonth(), 1)
        )
        const days = []
        while (date.getUTCMonth() === curr1.getUTCMonth()) {
          days.push(new Date(date))
          date.setUTCDate(date.getUTCDate() + 1)
        }
        const daysOfMonth: string[] = []
        days.forEach((date: Date) => {
          daysOfMonth.push(convertDateToString(date))
        })
        setLabels(daysOfMonth)
        break
      case TypesOfTime.YEAR:
        setTime(TypesOfTime.YEAR)
        setLabels([...Months])
        break
    }
  }

  const prepareDataFn = (type: any) => {
    switch (time) {
      case TypesOfTime.WEEK:
      case TypesOfTime.MONTH:
        const weekData = labels.map((label: string) => {
          const data = type.reduce((acc: number, curr: any) => {
            return label === curr.date ? acc + Number(curr.value) : acc + 0
          }, 0)
          return data
        })
        return weekData
      case TypesOfTime.YEAR:
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

  const convertDateToString = (date: Date) => {
    const month =
      date.getMonth() < 10
        ? '0' + (date.getMonth() + 1).toString()
        : date.getMonth() + 1

    const day =
      date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()

    const yearString = `${date.getFullYear()}-${month}-${day}`
    return yearString
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
          <Option onClick={() => handlePeriod(TypesOfTime.YEAR)}>Year</Option>
          <Option onClick={() => handlePeriod(TypesOfTime.WEEK)}>Week</Option>
          <Option onClick={() => handlePeriod(TypesOfTime.MONTH)}>Month</Option>
        </ChartOption>
      </ChartSection>
    </>
  )
}

export default ChartComponent
