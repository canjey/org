import * as React from 'react';
import Stats from '../../Components/Dashboard/Stats';
import OrgTable from '../../Components/Dashboard/Table';
import Layout from "../../Components/Layout";
 
export default function Dashboard() {
  return (
    <Layout>
      <Stats/>
      <OrgTable/>
    </Layout>
  )
}


