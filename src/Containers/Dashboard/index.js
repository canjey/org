import * as React from 'react';
import Stats from '../../Components/Stats';
import OrgTable from '../../Components/Table';
import Layout from "../../Components/Layout";


export default function Dashboard() {
  return (
    <Layout>
      <Stats/>
      <OrgTable/>
    </Layout>
  )
}
