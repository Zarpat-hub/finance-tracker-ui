import { useEffect, useState } from 'react'
import BasicInfo from '../../../components/GoalsPage/BasicInfo/BasicInfo'
import LastSpendings from '../../../components/GoalsPage/LastSpendings/LastSpendings'
import AxiosInstance from '../../services/AxiosInstance'

const Goals = () => {
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

  return (
    <>
      <BasicInfo dataInfo={dataInfo} />
      <LastSpendings dataInfo={dataInfo} />
    </>
  )
}

export default Goals
