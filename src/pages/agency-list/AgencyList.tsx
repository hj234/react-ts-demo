import React from 'react'
// import { Button } from 'antd'
import { Table } from 'antd';
import { columns, data} from './const'

interface AgencyListProps {
  
}

export const AgencyList:React.FC<AgencyListProps> = ()=>{
  return (
    <div>
      {/* <Button type="primary">submit</Button> */}
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

